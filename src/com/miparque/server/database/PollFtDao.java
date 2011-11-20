package com.miparque.server.database;

import static com.miparque.server.database.FusionTableUtil.nullSafeString;

import java.text.Normalizer;
import java.text.Normalizer.Form;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.Iterator;
import java.util.List;
import java.util.Map;

import org.json.JSONException;
import org.json.JSONObject;

import com.miparque.restlet.PollJsonAdapter;
import com.miparque.server.ResourceNotFoundException;
import com.miparque.server.dao.Choice;
import com.miparque.server.dao.Poll;
import com.miparque.server.dao.PollType;

/**
 * FusionTable based data access implemention for a Poll.
 * 
 * I guess we could have checked exceptions to give back to the caller if we need to
 * 
 * @author codersquid
 */
public class PollFtDao {
    private static final String POLL_FID = "2149092";
    private static final String CHOICE_FID = "2149094";
    private static final String USER_CHOICE_HISTORY_FID = "2148972";
    private static final String columnsPoll = "ROWID,description,title,openGraphUrl,pollType,active,openGraphImageUrl";
    private static final String columnsChoice = "ROWID,viewIndex,openGraphUrl,choice,details,pollId,openGraphImageUrl";
    private static final String columnsHistory = "ROWID,choiceId,userId,timeOfVote,pollId";

    /**
     * @param rowid rowid for a Poll
     * @return the Poll in json form
     * @throws ResourceNotFoundException 
     * @throws JSONException 
     */
    public JSONObject getPoll(String rowid) throws ResourceNotFoundException, JSONException {

        FusionTablesManager fm;
        String pollquery = "SELECT " + columnsPoll + " from " + POLL_FID + " WHERE ROWID = '" + rowid + "'" ;
        String choicequery = "SELECT " + columnsChoice + " from " + CHOICE_FID + " WHERE 'pollId' = '" + rowid + "'" ;

        List<Map<String, String>> pollrows = runSelect(pollquery);
        // TODO allow unattached polls? If so, try/catch this result
        List<Map<String, String>> choicerows = runSelect(choicequery);

        Map<String,String> pollMap = pollrows.get(0); // TODO want to throw an exception for more than one result?

        JSONObject pollJson = PollJsonAdapter.pollFromMappedResults(pollMap); 

        List<JSONObject> choices = new ArrayList<JSONObject>();
        for (Map<String,String> choiceMap : choicerows) {
            JSONObject choice = PollJsonAdapter.choiceFromMappedResults(choiceMap);
            choices.add(choice);
        }
        pollJson.put("choices", choices);

        return pollJson;
    }
    public Poll getDetachedPoll(String rowid) throws ResourceNotFoundException {
        String pollquery = "SELECT " + columnsPoll + " from " + POLL_FID + " WHERE ROWID = '" + rowid + "'" ;
        List<Map<String, String>> pollrows = runSelect(pollquery);
        if (pollrows.size() > 1) {
            // the database is screwed up
            throw new RuntimeException("No unique choice. poll: " + rowid + " results: " + pollrows);
        }
        return pollFromMappedResults(pollrows.get(0));
    }
    public Choice getDetachedChoice(String pollId, String choiceId) throws ResourceNotFoundException {
        String choicequery = "SELECT " + columnsChoice + " from " + CHOICE_FID
                + " WHERE 'pollId' = '" + pollId + "'"
                + " AND ROWID = '" + choiceId + "'";
        List<Map<String, String>> rows = runSelect(choicequery);
        if (rows.size() > 1) {
            // the database is screwed up
            throw new RuntimeException("No unique choice. poll: " + pollId + " choice: " + choiceId
                    + " results: " + rows);
        }
        return choiceFromMappedResults(rows.get(0));
    }
    
    public List<JSONObject> getUserChoiceHistory(String userId) throws ResourceNotFoundException, JSONException {
        String query = "SELECT " + columnsHistory + " FROM " + USER_CHOICE_HISTORY_FID + " WHERE 'userId' = '"
                + userId + "'";
        List<Map<String,String>> rows = runSelect(query);
        
        List<JSONObject> history = new ArrayList<JSONObject>();
        for (Map<String,String> row : rows) {
            JSONObject json = PollJsonAdapter.jsonFromMap(row);
            history.add(json);
        }
        return history;
    }

    /**
     * Persist a Poll and its Choices to fusiontables.
     * 
     * @param poll poll entity to be persisted
     * @return rowid of the new row
     * @throws RuntimeExceptions if any of the objects do not pass validation, or there are service problems.
     */
    public String createPoll(Poll poll) {
        validate(poll);
        String pollInsert = pollInsertSql(poll);

        List<String> rowids = new ArrayList<String>();
        rowids = runInsert(pollInsert);
        String pollid = rowids.get(0);

        String choicesInsert = choicesInsertSql(poll.getChoices(), pollid);
        runInsert(choicesInsert);
        return pollid;
    }
    public List<String> createUserChoiceHistory(String pollId, String choiceId, String userId) {
        // https://groups.google.com/group/fusion-tables-users-group/msg/7c41c7f6ea5f485f?dmode=source&output=gplain&noredirect
        // fusiontables ignore time right now
        Date date = new Date();
        SimpleDateFormat df = new SimpleDateFormat("yyyy.MM.dd");
        StringBuffer sb = new StringBuffer("insert into ")
                .append(USER_CHOICE_HISTORY_FID)
                .append(" (choiceId,userId,timeOfVote,pollId) ")
                .append(" values (")
                .append(nullSafeString(choiceId))
                .append(",")
                .append(nullSafeString(userId))
                .append(",")
                .append(nullSafeString(df.format(date)))
                .append(",")
                .append(nullSafeString(pollId))
                .append(" )");
        return runInsert(sb.toString());
    }

    /**
     * Delegates to FusionTableManager.runInsert and does validation
     * @param insert sql insert command
     * @return list of new rowids
     * @throws RuntimeExceptions if any of the objects do not pass validation, or there are service problems.
     */
    private List<String> runInsert(String insert) {
        System.out.println(insert);
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
    private List<Map<String,String>> runSelect(String query) throws ResourceNotFoundException {
        // logger.debug(query)
        System.out.println(query);
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
     * Validates a poll for storing
     * @param poll
     */
    private void validate(Poll poll) {
        if (poll.getTitle() == null || poll.getTitle().isEmpty()) {
            throw new IllegalArgumentException("Polls need a title in order to be stored. Failed to store" +
                    " Poll object: " + poll);
        }
    }
    private void validate(Choice choice) {
        if (choice.getChoice() == null || choice.getChoice().isEmpty()) {
            throw new IllegalArgumentException("Choices need a choice in order to be stored. Failed to store" +
                    " Choice object: " + choice);
        }
    }
    /**
     * Builds a poll from the map of strings returned by {@link FusionTablesManager#runSelect(String)}
     * 
     * @param m map of column values from a fusiontable row
     * @return a Poll representation of the results
     */
    private Poll pollFromMappedResults(Map<String,String> m) {
        Poll poll = new Poll();
        if (m.containsKey("rowid")) {
            poll.setId(m.get("rowid"));
        }
        if (m.containsKey("description")) {
            poll.setDescription(m.get("description"));
        }
        if (m.containsKey("title")) {
            poll.setTitle(m.get("title"));
        }
        if (m.containsKey("openGraphUrl")) {
            poll.setOpenGraphUrl(m.get("openGraphUrl"));
        }
        if (m.containsKey("pollType")) {
            poll.setType(PollType.valueOf(m.get("pollType")));
        }
        if (m.containsKey("active")) {
            poll.setActive(m.get("active").equals("true"));
        }
        if (m.containsKey("openGraphImageUrl")) {
            poll.setOpenGraphImageUrl(m.get("openGraphImageUrl"));
        }
        return poll;
    }
    /**
     * Builds a choice from the map of strings returned by {@link FusionTablesManager#runSelect(String)}
     * 
     * @param m map of column values from a fusiontable row
     * @return a Choice representation of the results
     */
    private Choice choiceFromMappedResults(Map<String,String> m) {
        //"ROWID,viewIndex,openGraphUrl,choice,details,pollId,openGraphImageUrl";
        Choice choice = new Choice();
        if (m.containsKey("rowid")) {
            choice.setId(m.get("rowid"));
        }
        if (m.containsKey("viewIndex")) {
            choice.setViewIndex(m.get("viewIndex"));
        }
        if (m.containsKey("openGraphUrl")) {
            choice.setOpenGraphUrl(m.get("openGraphUrl"));
        }
        if (m.containsKey("choice")) {
            choice.setChoice(m.get("choice"));
        }
        if (m.containsKey("details")) {
            choice.setDetail(m.get("details"));
        }
        if (m.containsKey("pollId")) {
            choice.setPollId(m.get("pollId"));
        }
        if (m.containsKey("openGraphImageUrl")) {
            choice.setOpenGraphImageUrl(m.get("openGraphImageUrl"));
        }
        return choice;
    }
    /**
     * Generates insert statement for requested poll
     * @param poll a validate poll
     * @return sql insert statement valid for fusiontables
     */
    private String pollInsertSql(Poll poll) {
        String active = poll.isActive() ? "true" : "false";
        poll.setOpenGraphUrl(slugify(poll.getTitle()));
        StringBuffer sb = new StringBuffer("insert into ")
                .append(POLL_FID)
                .append(" (description,title,openGraphUrl,pollType,active,openGraphImageUrl)")
                .append(" values (")
                .append(nullSafeString(poll.getDescription()))
                .append(",")
                .append(nullSafeString(poll.getTitle()))
                .append(",")
                .append(nullSafeString(poll.getOpenGraphUrl()))
                .append(",")
                .append(nullSafeString(poll.getType().name()))
                .append(",")
                .append(nullSafeString(active))
                .append(",")
                .append(nullSafeString(poll.getOpenGraphImageUrl()))
                .append(" )");
        return sb.toString();
    }
    private String choicesInsertSql(List<Choice> choices, String pollId) {
        Iterator<Choice> iter = choices.iterator();
        StringBuffer sb = new StringBuffer();
        while (iter.hasNext()) {
            Choice choice = iter.next();
            validate(choice);
            sb.append(choiceInsertSql(choice, pollId));
            if (iter.hasNext()) {
                sb.append(";");
            }
        }
        return sb.toString();
    }
    
    private String choiceInsertSql(Choice choice, String pollId) {
        choice.setOpenGraphUrl(slugify(choice.getChoice()));
        choice.setPollId(pollId);
        StringBuffer sb = new StringBuffer("insert into ")
                .append(CHOICE_FID)
                .append(" (viewIndex,openGraphUrl,choice,details,pollId,openGraphImageUrl)")
                .append(" values (")
                .append(nullSafeString(choice.getViewIndex()))
                .append(",")
                .append(nullSafeString(choice.getOpenGraphUrl()))
                .append(",")
                .append(nullSafeString(choice.getChoice()))
                .append(",")
                .append(nullSafeString(choice.getDetail()))
                .append(",")
                .append(nullSafeString(choice.getPollId()))
                .append(",")
                .append(nullSafeString(choice.getOpenGraphImageUrl()))
                .append(" )");
        return sb.toString();
    }
    // TODO this section will get refactored out

    /**
     * see http://pinboard.in/u:sky/t:java/t:unicode/
     * @param value
     * @return a slugified version of the title that can serve as a url
     */
    private String slugify(String value) {
        if (value == null || value.isEmpty()) {
            return "404";
        }
        return Normalizer.normalize(value, Form.NFD)
                .replaceAll("\\p{InCombiningDiacriticalMarks}+", "")
                .replaceAll("\\p{Punct}+", "")
                .replaceAll("\\p{Space}+", "-")
                .toLowerCase();
    }

}
