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
    protected static final String FID = "2149094";
    private static final String columns = "ROWID,viewIndex,openGraphUrl,choice,details,pollId,openGraphImageUrl,active";
    protected String getFusionTableId() {
        return FID;
    }
    protected String getColumns() {
        return columns;
    }
    public Choice get(String choiceId) throws ResourceNotFoundException {
        String choicequery = "SELECT " + columns + " from " + FID
                + " WHERE ROWID = '" + choiceId + "'";
        List<Map<String, String>> rows = runSelect(choicequery);
        return mergeFromMap(rows.get(0));
    }
    public JSONObject getJson(String choiceId) {
        return null;
    }
    public List<JSONObject> getJsonList(String pollId) throws ResourceNotFoundException, JSONException {
        String choicequery = "SELECT " + columns + " from " + FID
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
    public Choice getDetachedChoice(String pollId, String choiceId) throws ResourceNotFoundException {
        String choicequery = "SELECT " + columns + " from " + FID
                + " WHERE 'pollId' = '" + pollId + "'"
                + " AND ROWID = '" + choiceId + "'";
        List<Map<String, String>> rows = runSelect(choicequery);
        if (rows.size() > 1) {
            // the database is screwed up
            throw new RuntimeException("No unique choice. poll: " + pollId + " choice: " + choiceId
                    + " results: " + rows);
        }
        return mergeFromMap(rows.get(0));
    }


    private String generateOpenGraphUrl(Choice c) {
        String slug = c.getPollId() + "-" + slugify(c.getChoice());
        return slug;
    }
    /**
     * Builds a choice from the map of strings returned by {@link FusionTablesManager#runSelect(String)}
     * 
     * @param m map of column values from a fusiontable row
     * @return a Choice representation of the results
     */
    protected Choice mergeFromMap(Map<String,String> m) {
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
    protected String getInsertSql(Choice choice) {
        String ogUrl = generateOpenGraphUrl(choice);
        choice.setOpenGraphUrl(ogUrl);
        StringBuffer sb = new StringBuffer("insert into ")
                .append(FID)
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

    protected void validateForInsert(Choice choice) {
        if (choice.getChoice() == null || choice.getChoice().isEmpty()) {
            throw new IllegalArgumentException("Choices need a choice description in order to be stored. "
                    + "Failed to store Choice object: " + choice);
        }
    }


}
