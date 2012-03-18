package com.miparque.server.database;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import org.json.JSONException;
import org.json.JSONObject;

import com.miparque.restlet.JsonAdapter;
import com.miparque.server.ResourceNotFoundException;
import com.miparque.server.dao.VotoHistory;

public class VotoHistoryFtDao extends AbstractFtDao<VotoHistory,String> {
    private static final String FID = "2218422";
    private static final String columns = "ROWID,userId,pollId,choiceId,timeOfVote,timeStamp";
    protected String getFusionTableId() {
        return FID;
    }
    protected String getColumns() {
        return columns;
    }

    public JSONObject getJson(String key) throws ResourceNotFoundException, JSONException {
        List<Map<String,String>> rows = getMappedResults(key);
        return JsonAdapter.jsonFromMap(rows.get(0));
    }

    /**
     * @param userId
     *     user whose history we want
     * @return
     *     json representation of the user's voto history
     */
    public List<JSONObject> getUserHistoryJsonList(String userId) throws ResourceNotFoundException, JSONException {
        String query = "SELECT " + getColumns() + " FROM " + getFusionTableId() + " WHERE 'userId' = '"
                + userId + "'";
        List<Map<String,String>> rows = runSelect(query);

        List<JSONObject> history = new ArrayList<JSONObject>();
        for (Map<String,String> row : rows) {
            JSONObject json = JsonAdapter.jsonFromMap(row);
            history.add(json);
        }
        return history;
    }
    /**
     * @param userId
     *     user whose history we want for the selected poll
     * @param pollId
     *     the poll which vote history we want to fetch
     * @return
     *     json representation of the user's voto history for the specified poll in reverse chronology
     */
    public List<JSONObject> getUserPollHistoryJsonList(String userId, String pollId) throws ResourceNotFoundException, JSONException {
        String query = "SELECT " + getColumns() + " FROM " + getFusionTableId() + " WHERE 'userId' = '"
                + userId + "'" + " AND 'pollId' = " + "'" + pollId + "'"
                + " ORDER BY 'timeStamp' DESC";
        List<Map<String,String>> rows = runSelect(query);

        List<JSONObject> history = new ArrayList<JSONObject>();
        for (Map<String,String> row : rows) {
            JSONObject json = JsonAdapter.jsonFromMap(row);
            history.add(json);
        }
        return history;
    }
    protected String getInsertSql(VotoHistory vh) {
        StringBuffer sb = new StringBuffer("insert into ")
                .append(getFusionTableId())
                .append(" (choiceId,userId,timeOfVote,pollId,timeStamp) ")
                .append(" values (")
                .append(nullSafeString(vh.getChoiceId()))
                .append(",")
                .append(nullSafeString(vh.getUserId()))
                .append(",")
                .append(nullSafeString(vh.getTimeOfVote()))
                .append(",")
                .append(nullSafeString(vh.getPollId()))
                .append(",")
                .append(nullSafeNumber(vh.getTimeStamp()))
                .append(" )");
        return sb.toString();
    }

    public List<VotoHistory> getList(String key)
            throws ResourceNotFoundException {
        // TODO Auto-generated method stub
        return null;
    }
    public List<JSONObject> getJsonList(String key)
            throws ResourceNotFoundException, JSONException {
        // TODO Auto-generated method stub
        return null;
    }
    protected void validateForInsert(VotoHistory entity) {
        // TODO Auto-generated method stub
    }
    protected VotoHistory mergeFromMap(Map<String, String> rowMap) {
        VotoHistory vh = new VotoHistory();
        vh.setChoiceId(rowMap.get("choiceId"));
        vh.setId(rowMap.get("rowid"));
        vh.setPollId(rowMap.get("pollId"));
        vh.setTimeOfVote(rowMap.get("timeOfVote"));
        Long timeStamp = Long.valueOf(rowMap.get("timeStamp"));
        vh.setTimeStamp(timeStamp);
        return vh;
    }

}
