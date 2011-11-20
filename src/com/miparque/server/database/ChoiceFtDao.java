package com.miparque.server.database;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import java.util.Map;

import org.json.JSONException;
import org.json.JSONObject;

import com.miparque.restlet.JsonAdapter;
import com.miparque.server.ResourceNotFoundException;
import com.miparque.server.dao.Choice;

public class ChoiceFtDao extends AbstractFtDao<Choice,String> {
    private static final String CHOICE_FID = "2149094";
    private static final String columnsChoice = "ROWID,viewIndex,openGraphUrl,choice,details,pollId,openGraphImageUrl,active";

    public Choice get(String choiceId) throws ResourceNotFoundException {
        String choicequery = "SELECT " + columnsChoice + " from " + CHOICE_FID
                + " WHERE ROWID = '" + choiceId + "'";
        List<Map<String, String>> rows = runSelect(choicequery);
        return choiceFromMappedResults(rows.get(0));
    }
    public JSONObject getJson(String choiceId) {
        return null;
    }
    public List<JSONObject> getJsonList(String pollId) throws ResourceNotFoundException, JSONException {
        String choicequery = "SELECT " + columnsChoice + " from " + CHOICE_FID
                + " WHERE 'pollId' = '" + pollId + "'";
        List<Map<String, String>> rows = runSelect(choicequery);
        List<JSONObject> choices = new ArrayList<JSONObject>();
        for (Map<String, String> choiceRow : rows) {
            JSONObject choice = JsonAdapter.choiceFromMappedResults(choiceRow);
            choices.add(choice);
        }
        return choices;
    }
    public String insert(Choice choice) {
        return null;
    }
    public List<String> insertList(List<Choice> choices) {
        return null;
    }
    public List<String> insertList(List<Choice> choices, String pollId) {
        String insertSql = choicesInsertSql(choices, pollId);
        return runInsert(insertSql);
    }
    public List<Choice> getList(String pollId) {
        return null;
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

    /**
     * Builds a choice from the map of strings returned by {@link FusionTablesManager#runSelect(String)}
     * 
     * @param m map of column values from a fusiontable row
     * @return a Choice representation of the results
     */
    private Choice choiceFromMappedResults(Map<String,String> m) {
        //"ROWID,viewIndex,openGraphUrl,choice,details,pollId,openGraphImageUrl,active";
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
        if (m.containsKey("active")) {
            choice.setActive(m.get("active").equals("true"));
        }
        return choice;
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
    private void validate(Choice choice) {
        if (choice.getChoice() == null || choice.getChoice().isEmpty()) {
            throw new IllegalArgumentException("Choices need a choice in order to be stored. Failed to store" +
                    " Choice object: " + choice);
        }
    }


}
