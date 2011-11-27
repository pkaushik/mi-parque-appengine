package com.miparque.server.database;

import java.io.IOException;
import java.text.Normalizer;
import java.text.Normalizer.Form;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import java.util.Map;

import org.json.JSONException;
import org.json.JSONObject;

import com.google.gdata.util.AuthenticationException;
import com.google.gdata.util.ServiceException;
import com.miparque.server.ResourceNotFoundException;
import com.miparque.server.dao.Choice;
import com.miparque.server.dao.Poll;

/**
 * Every FT based Dao will want to call {@link FusionTablesManager} and will want to do validation and
 * exception handling, so this class does those common things.
 * 
 * TODO: Is it a good choice to authenticate everytime we run a query? i.e. instantiate the manager and run queries
 * 
 * TODO: It really doesn't make sense for me to specify all of these abstract methods here but I'm too dopey
 * to work it out right now and want to get on with standing things up rather than taking too long to think
 * about blah blah blah interface this that the other and design crap. But seriously, the json stuff doesn't
 * belong here, so there's probably JsonifyDoodad interface or who knows, and secondly, not everything we
 * store makes sense to get in a list, or get as a unique thing, even though that's how fusiontables work,
 * so we'd want to have a version of some things that should be unique, and a version of other things that
 * you can get from a list. or something. whatever. my fried is brained.
 * 
 * @author codersquid
 */
public abstract class AbstractFtDao<T,K> {
    public abstract List<JSONObject> getJsonList(K key) throws ResourceNotFoundException, JSONException;
    public abstract JSONObject getJson(K key) throws ResourceNotFoundException, JSONException;
    protected abstract void validateForInsert(T entity);
    /**
     * @return a string version of the fusion table id
     */
    protected abstract String getFusionTableId();
    /**
     * @return a comma delimited string of the fusion table column names
     */
    protected abstract String getColumns();
    protected abstract String getInsertSql(T entity);
    /**
     * By convention, the rowMap should be a mapped result from a FusionTable search request where
     * the keys are the column names and values are the results
     * 
     * @param resultMap
     * @return the entity based on the result map
     */
    protected abstract T mergeFromMap(Map<String, String> resultMap);

    /**
     * Persist an entity to its fusion table
     * 
     * @param T entity to be persisted
     * @return rowid of the new row
     * @throws runtime exceptions if the entity is invalid, or there are service problems.
     */
    public String insert(T entity) {
        validateForInsert(entity);
        String insertSql = getInsertSql(entity);
        List<String> rowids = runInsert(insertSql);
        if (rowids.size() > 1) {
            // This would be a WARN log line.
            System.out.println("There should only be one rowid resulting from an insertion of one entity but "
                    + " we got more than one. rowids: " + rowids + " entity: " + entity);
        }
        String rowid = rowids.get(0);
        return rowid;
    }
    /**
     * Assumption being made: Expect a unique result for T based on this key
     * 
     * @param key
     * @return
     * @throws ResourceNotFoundException
     */
    public T get(K key) throws ResourceNotFoundException {
        List<Map<String, String>> rows = getMappedResults(key);
        return mergeFromMap(rows.get(0));
    }
    public List<T> getList(K key) throws ResourceNotFoundException {
        String choicequery = "SELECT " + getColumns() + " from " + getFusionTableId()
                + " WHERE ROWID = '" + key + "'";
        List<Map<String, String>> rows = runSelect(choicequery);
        List<T> resultList = new ArrayList<T>();
        for (Map<String, String> resultMap : rows) {
            resultList.add(mergeFromMap(resultMap));
        }
        return resultList;
    }
    public T getByOpenGraphUrl(String ogUrl) throws ResourceNotFoundException {
        String ogQuery = "SELECT " + getColumns() + " from " + getFusionTableId()
                + " WHERE openGraphUrl = '" + ogUrl + "'";
        List<Map<String, String>> rows = runSelect(ogQuery);
        if (rows.size() > 1) {
            // the data is screwed up
            throw new RuntimeException("We should only get one result from an open graph url query. "
                    + " results: " + rows);
        }
        return mergeFromMap(rows.get(0));
    }
    /**
     * Inserts a list of entities in to their fusion table. We want to use this when we have multiple objects
     * to insert because it is best practice in the case of fusion tables to do one insert for multiple objects
     * rather than one insert for each.
     * 
     * only use for cases where there are no child entities to insert
     * 
     * @param entities
     * @return
     */
    public List<String> insertList(List<T> entities) {
        String insertSql = getInsertSql(entities);
        return runInsert(insertSql);
    }
    /**
     * get sql to insert entities, but only use this for simple cases where there are no child entities to insert
     * @param entities
     * @return
     */
    private String getInsertSql(List<T> entities) {
        Iterator<T> iter = entities.iterator();
        StringBuffer sb = new StringBuffer();
        while (iter.hasNext()) {
            T entity = iter.next();
            validateForInsert(entity);
            sb.append(getInsertSql(entity));
            if (iter.hasNext()) {
                sb.append(";");
            }
        }
        return sb.toString();
    }

    protected List<Map<String,String>> getAllMappedResults() throws ResourceNotFoundException {
        String pollquery = "SELECT " + getColumns() + " from " + getFusionTableId();
        List<Map<String, String>> pollrows = runSelect(pollquery);
        return pollrows;
    }

    protected List<Map<String,String>> getMappedResults(K rowid) throws ResourceNotFoundException {
        String pollquery = "SELECT " + getColumns() + " from " + getFusionTableId() + " WHERE ROWID = '" + rowid + "'" ;
        List<Map<String, String>> pollrows = runSelect(pollquery);
        return pollrows;
    }
    /**
     * Delegates to {@link FusionTablesManager#runInsert(String)} and returns results or throws
     * an exception if the service had a problem when trying to persist the object.
     * 
     * @param insert sql insert command
     * @return list of new rowids
     * @throws RuntimeExceptions if any of the objects do not pass validation, or there are service problems.
     */
    protected List<String> runInsert(String insert) {
        List<String> rowids = new ArrayList<String>();
        try {
            FusionTablesManager fm = new FusionTablesManager();
            rowids = fm.runInsert(insert);
        } catch (Exception e) {
            throw new RuntimeException("Unable to persist. insert: [" + insert + "]", e);
        }
        if (rowids == null || rowids.isEmpty()) {
            throw new RuntimeException("There was a problem persisting this object. We did not find any ROWIDS in the "
                    + " response. insert: [" + insert + "]");
        }
        return rowids;
    }

    /**
     * Runs a select against the fusiontables manager and returns results or throws
     * an exception if no results are found.
     * 
     * @param query fustiontable sql statement 
     * @return list of maps for each row in the result
     * @throws ResourceNotFoundException if no results are found
     */
    protected List<Map<String,String>> runSelect(String query) throws ResourceNotFoundException {
        List<Map<String, String>> rows;
        try {
            FusionTablesManager fm = new FusionTablesManager();
            rows = fm.runSelect(query);
            System.out.println(rows);
        } catch (Exception e) {
            throw new RuntimeException("Unable to find results for query: " + query, e);
        }
        if (rows.isEmpty()) {
            throw new ResourceNotFoundException("No results found for query: " + query);
        }
        return rows;
    }

    /**
     * see http://pinboard.in/u:sky/t:java/t:unicode/
     * @param value
     * @return a slugified version of the title that can serve as a url
     */
    protected String slugify(String value) {
        if (value == null || value.isEmpty()) {
            return "404";
        }
        return Normalizer.normalize(value, Form.NFD)
                .replaceAll("\\p{InCombiningDiacriticalMarks}+", "")
                .replaceAll("\\p{Punct}+", "")
                .replaceAll("\\p{Space}+", "-")
                .toLowerCase();
    }
    /**
     * @param value String to be persisted
     * @return value formatted for FusionTable insert sql
     */
    protected String nullSafeString(String value) {
        return value == null || value.isEmpty() ? "''" : "'" + value + "'";
    }
    /**
     * @param value number to be persisted
     * @return value formatted for FusionTable insert sql
     */
    protected String nullSafeNumber(Integer value) {
        return value == null ? "''" : value.toString();
    }
    /**
     * @param value number to be persisted
     * @return value formatted for FusionTable insert sql
     */
    protected String nullSafeNumber(Long value) {
        return value == null ? "''" : value.toString();
    }}
