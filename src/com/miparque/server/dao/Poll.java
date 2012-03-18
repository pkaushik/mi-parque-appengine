package com.miparque.server.dao;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

/**
 * A model of a Mi Voto poll
 *
 * fusiontable details
 * Poll 2149092
 * column id,name,type
 * col0,description,string
 * col1,title,string
 * col2,openGraphUrl,string
 * col3,pollType,string
 * col4,active,string
 * col5,openGraphImageUrl,string
 * 
 * @author codersquid
 */
public class Poll implements Serializable {
    private static final long serialVersionUID = 1L;
    private static final String og_type = "unassigned"; // TODO

    /** database id */
    private String id;
    /** friendly human readable OpenGraph URL */
    private String openGraphUrl;
    /** URL to open graph friendly image */
    private String openGraphImageUrl;
    /** Title of Poll. short headline */
    private String title;
    /** Extra verbiage to describe poll. how many characters? */
    private String description;
    /** Give this poll a type so that we know how the choices work. Can we pick only one? many? etc. */
    private PollType type;
    /** when our db code does a select on a poll and also picks out the related choices, it will populate these */
    private List<Choice> choices = new ArrayList<Choice>();
    /** determines if the poll is currently available for voting */
    private boolean active;

    public String getId() {
        return id;
    }
    public void setId(String id) {
        this.id = id;
    }
    public String getOpenGraphUrl() {
        return openGraphUrl;
    }
    public void setOpenGraphUrl(String ogUrl) {
        this.openGraphUrl = ogUrl;
    }
    public String getOpenGraphImageUrl() {
        return openGraphImageUrl;
    }
    public void setOpenGraphImageUrl(String ogImageUrl) {
        this.openGraphImageUrl = ogImageUrl;
    }
    public String getTitle() {
        return title;
    }
    public void setTitle(String title) {
        this.title = title;
    }
    public String getDescription() {
        return description;
    }
    public void setDescription(String description) {
        this.description = description;
    }
    public PollType getType() {
        return type;
    }
    public void setType(PollType type) {
        this.type = type;
    }
    public void addChoice(Choice choice) {
        this.choices.add(choice);
    }
    public void addAllChoices(List<Choice> choices) {
        this.choices.addAll(choices);
    }
    public List<Choice> getChoices() {
        return choices;
    }
    public boolean isActive() {
        return active;
    }
    public void setActive(boolean active) {
        this.active = active;
    }
    public static String getOpenGraphType() {
        return og_type;
    }
    public int hashCode() {
        final int prime = 31;
        int result = 1;
        result = prime * result
                + ((openGraphUrl == null) ? 0 : openGraphUrl.hashCode());
        return result;
    }
    public boolean equals(Object obj) {
        if (this == obj)
            return true;
        if (obj == null)
            return false;
        if (getClass() != obj.getClass())
            return false;
        Poll other = (Poll) obj;
        if (openGraphUrl == null) {
            if (other.openGraphUrl != null)
                return false;
        } else if (!openGraphUrl.equals(other.openGraphUrl))
            return false;
        return true;
    }
    public String toString() {
        return "Poll [id=" + id
                + ", openGraphUrl=" + openGraphUrl
                + ", openGraphImageUrl=" + openGraphImageUrl
                + ", openGraphType=" + og_type
                + ", title=" + title
                + ", description=" + description
                + ", type=" + type
                + ", choices=" + choices
                + ", active=" + active
                + "]";
    }
    /**
     * Adapts a Poll object in to its json representation
     * @param poll
     * @return a Poll transformed in to a json representation
     * @throws JSONException
     */
    public JSONObject toJson() throws JSONException {
        JSONObject json = new JSONObject();
        json.putOpt("id", getId());
        json.put("title", getTitle());
        json.put("description", getDescription());
        json.put("multiple", getType().equals(PollType.APPROVAL));
        json.putOpt("og_type", getOpenGraphType());
        json.put("og_url", getOpenGraphUrl());
        json.putOpt("og_image_url", getOpenGraphImageUrl());
        json.put("active", isActive());

        List<JSONObject> choiceJsonList = new ArrayList<JSONObject>();
        for (Choice choice : getChoices()) {
            choiceJsonList.add(choice.toJson());
        }
        json.put("choices", choiceJsonList);

        return json;
    }

    public static Poll mergeFrom(JSONObject json) throws JSONException {
        Poll poll = new Poll();
        poll.setActive(false); // needs to be moderated by hand
        poll.setTitle(json.getString("title"));
        poll.setDescription(json.getString("description"));
        PollType type = json.optBoolean("mulitple") ? PollType.APPROVAL : PollType.PLURALITY;
        poll.setType(type);
        JSONArray choices = json.getJSONArray("choices");
        for (int i = 0; i < choices.length(); i++) {
            Choice choice = Choice.mergeFrom(choices.getJSONObject(i));
            poll.addChoice(choice);
        }
        return poll;
    }
}
