package com.miparque.restlet;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.Map.Entry;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import com.miparque.server.dao.Choice;
import com.miparque.server.dao.Poll;
import com.miparque.server.dao.PollType;
import com.miparque.server.database.FusionTablesManager;

/**
 * Adapts between DAOs and intermediary forms such as fusiontable mapped results or json.
 * 
 * @author codersquid
 */
public class PollJsonAdapter {

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
    /**
     * Adapts a Poll object in to its json representation
     * @param poll
     * @return a Poll transformed in to a json representation
     * @throws JSONException
     */
    public static JSONObject toJson(Poll poll) throws JSONException {
        JSONObject json = new JSONObject();
        json.putOpt("id", poll.getId());
        json.put("title", poll.getTitle());
        json.put("description", poll.getDescription());
        json.put("multiple", poll.getType().equals(PollType.APPROVAL));
        json.putOpt("og_type", poll.getOpenGraphType());
        json.put("og_url", poll.getOpenGraphUrl());
        json.putOpt("og_image_url", poll.getOpenGraphImageUrl());

        List<JSONObject> choiceJsonList = new ArrayList<JSONObject>();
        for (Choice choice : poll.getChoices()) {
            choiceJsonList.add(toJson(choice));
        }
        json.put("choices", choiceJsonList);

        return json;
    }
    /**
     * Adapts a Choice object in to its json representation
     * @param choice
     * @return a Choice transformed in to a json representation
     * @throws JSONException
     */
    public static JSONObject toJson(Choice choice) throws JSONException {
        JSONObject json = new JSONObject();
        json.put("index", choice.getViewIndex());
        json.put("choice", choice.getChoice());
        json.put("detail", choice.getDetail());
        json.putOpt("id", choice.getId());
        json.put("og_type", choice.getOpenGraphType());
        json.put("og_url", choice.getOpenGraphUrl());
        json.putOpt("og_image_url", choice.getOpenGraphImageUrl());
        return json;
    }
    public static Poll fromJson(JSONObject json) throws JSONException {
        Poll poll = new Poll();
        poll.setActive(false); // needs to be moderated by hand
        poll.setTitle(json.getString("title"));
        poll.setDescription(json.getString("description"));
        PollType type = json.optBoolean("mulitple") ? PollType.APPROVAL : PollType.PLURALITY;
        poll.setType(type);
        JSONArray choices = json.getJSONArray("choices");
        for (int i = 0; i < choices.length(); i++) {
            JSONObject choiceJson = choices.getJSONObject(i);
            Choice choice = new Choice();
            choice.setChoice(choiceJson.getString("choice"));
            choice.setViewIndex(choiceJson.getString("index"));
            choice.setDetail(choiceJson.optString("detail"));
            poll.addChoice(choice);
        }
        return poll;
    }
}
