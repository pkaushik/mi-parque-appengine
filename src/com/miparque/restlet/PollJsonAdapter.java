package com.miparque.restlet;

import java.util.ArrayList;
import java.util.List;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import com.miparque.server.dao.Choice;
import com.miparque.server.dao.Poll;
import com.miparque.server.dao.PollType;

public class PollJsonAdapter {

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
