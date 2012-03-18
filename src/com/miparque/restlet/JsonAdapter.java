package com.miparque.restlet;

import java.util.Map;
import java.util.Map.Entry;

import org.json.JSONException;
import org.json.JSONObject;

import com.miparque.server.dao.Choice;
import com.miparque.server.dao.Poll;
import com.miparque.server.dao.PollType;
import com.miparque.server.database.FusionTablesManager;

/**
 * Adapts between fusiontable mapped results and json.
 * 
 * @author codersquid
 */
public class JsonAdapter {

    public static JSONObject jsonFromMap(Map<String,String> m) throws JSONException {
        JSONObject json = new JSONObject();
        for (Entry<String,String> e : m.entrySet()) {
            json.put(e.getKey(), e.getValue());
        }
        return json;
    }
    /**
     * Builds a poll from the map of strings returned by {@link FusionTablesManager#runSelect(String)}
     * 
     * @param m map of column values from a fusiontable row
     * @return a Poll representation of the results
     * @throws JSONException 
     */
    public static JSONObject pollFromMappedResults(Map<String,String> m) throws JSONException {
        JSONObject json = new JSONObject();

        if (m.containsKey("rowid")) {
            json.putOpt("id", m.get("rowid"));
        }
        if (m.containsKey("description")) {
            json.put("description",m.get("description"));
        }
        if (m.containsKey("title")) {
            json.put("title", m.get("title"));
        }
        if (m.containsKey("openGraphUrl")) {
            json.put("og_url", m.get("openGraphUrl"));
        }
        if (m.containsKey("pollType")) {
            PollType type = PollType.valueOf(m.get("pollType"));
            json.put("multiple", type.equals(PollType.APPROVAL));
        }
        if (m.containsKey("active")) {
            json.put("active", m.get("active").equals("true"));
        }
        if (m.containsKey("openGraphImageUrl")) {
            json.putOpt("og_image_url",m.get("openGraphImageUrl")); 
        }
        json.putOpt("og_type", Poll.getOpenGraphType());
        
        return json;
    }
    /**
     * Builds a choice from the map of strings returned by {@link FusionTablesManager#runSelect(String)}
     * 
     * @param m map of column values from a fusiontable row
     * @return a Choice representation of the results
     * @throws JSONException 
     */
    public static JSONObject choiceFromMappedResults(Map<String,String> m) throws JSONException {
        //"ROWID,viewIndex,openGraphUrl,choice,details,pollId,openGraphImageUrl";
        JSONObject json = new JSONObject();
        if (m.containsKey("rowid")) {
            json.putOpt("id",m.get("rowid")); 
        }
        if (m.containsKey("viewIndex")) {
            json.put("index", m.get("viewIndex"));
        }
        if (m.containsKey("openGraphUrl")) {
            json.put("og_url", m.get("openGraphUrl"));
        }
        if (m.containsKey("choice")) {
            json.put("choice",m.get("choice")); 
        }
        if (m.containsKey("details")) {
            json.put("detail",m.get("details")); 
        }
        if (m.containsKey("openGraphImageUrl")) {
            json.putOpt("og_image_url", m.get("openGraphImageUrl"));
        }
        json.put("og_type", Choice.getOpenGraphType());
        return json;
    } 

}
