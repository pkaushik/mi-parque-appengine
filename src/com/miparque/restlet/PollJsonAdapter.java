package com.miparque.restlet;

import java.util.ArrayList;
import java.util.List;

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
}
