package com.miparque.server.database;

import java.text.Normalizer;
import java.text.Normalizer.Form;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import org.json.JSONException;
import org.json.JSONObject;

import com.miparque.server.ResourceNotFoundException;

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
    public abstract List<T> getList(K key) throws ResourceNotFoundException;
    public abstract T get(K key) throws ResourceNotFoundException;
    public abstract List<JSONObject> getJsonList(K key) throws ResourceNotFoundException, JSONException;
    public abstract JSONObject getJson(K key) throws ResourceNotFoundException, JSONException;
    public abstract List<K> insertList(List<T> objs);
    public abstract K insert(T obj);

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
