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
    private static final String VOTO_HISTORY_FID = "2218422";
    private static final String columnsHistory = "ROWID,userId,pollId,choiceId,timeOfVote,timeStamp";

    public JSONObject getJson(String key) throws ResourceNotFoundException, JSONException {
        // TODO Auto-generated method stub
        return null;
    }
    public List<String> insertList(List<VotoHistory> objs) {
        // TODO Auto-generated method stub
        return null;
    }
    public List<JSONObject> getJsonList(String userId) throws ResourceNotFoundException, JSONException {
        String query = "SELECT " + columnsHistory + " FROM " + VOTO_HISTORY_FID + " WHERE 'userId' = '"
                + userId + "'";
        List<Map<String,String>> rows = runSelect(query);
        
        List<JSONObject> history = new ArrayList<JSONObject>();
        for (Map<String,String> row : rows) {
            JSONObject json = JsonAdapter.jsonFromMap(row);
            history.add(json);
        }
        return history;
    }
    public String insert(VotoHistory vh) {
        StringBuffer sb = new StringBuffer("insert into ")
                .append(VOTO_HISTORY_FID)
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
        return runInsert(sb.toString()).get(0);
    }

    public List<VotoHistory> getList(String key)
            throws ResourceNotFoundException {
        // TODO Auto-generated method stub
        return null;
    }
    public VotoHistory get(String key) throws ResourceNotFoundException {
        // TODO Auto-generated method stub
        return null;
    }


}
