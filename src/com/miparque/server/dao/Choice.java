package com.miparque.server.dao;

import java.io.Serializable;

import org.json.JSONException;
import org.json.JSONObject;

/**
 * A model of a choice in a Mi Voto Poll. Polls can have multiple choices.
 * 
 * fusiontable description of table
 * Choice 2149094
 * column id,name,type
 * col0,viewIndex,string
 * col1,openGraphUrl,string
 * col2,choice,string
 * col3,details,string
 * col4,pollId,string
 * col5,openGraphImageUrl,string
 * col6,active,string
 * 
 * fusiontable uses Strings for row ids
 * 
 * @author codersquid
 */
public class Choice implements Serializable {
    private static final long serialVersionUID = 1L;
    private static final String og_type = "poll";

    /** database id */
    private String id;

    /** URL friendly human readable string based on the choice content */
    private String openGraphUrl;

    /** fkey to Poll */
    private String pollId;

    /** stores the index that is being used by the frontend when showing the choice. */
    private String viewIndex;

    /** Short description to serve as the "headline" of the choice */
    private String choice;

    /** Lengthier description about the choice */
    private String detail;

    /** URL to open graph friendly image for this Choic */
    private String openGraphImageUrl;

    /** determines if the choice is currently available for voting */
    private boolean active;

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
    public String getId() {
        return id;
    }
    public String getPollId() {
        return pollId;
    }
    public String getViewIndex() {
        return viewIndex;
    }
    public String getChoice() {
        return choice;
    }
    public String getDetail() {
        return detail;
    }
    public void setId(String id) {
        this.id = id;
    }
    public void setPollId(String pollId) {
        this.pollId = pollId;
    }
    public void setViewIndex(String viewIndex) {
        this.viewIndex = viewIndex;
    }
    public void setChoice(String choice) {
        this.choice = choice;
    }
    public void setDetail(String detail) {
        this.detail = detail;
    }
    public static String getOpenGraphType() {
        return og_type;
    }
    public boolean isActive() {
        return active;
    }
    public void setActive(boolean active) {
        this.active = active;
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
        Choice other = (Choice) obj;
        if (openGraphUrl == null) {
            if (other.openGraphUrl != null)
                return false;
        } else if (!openGraphUrl.equals(other.openGraphUrl))
            return false;
        return true;
    }
    public String toString() {
        return "Choice [id=" + id
                + ", openGraphUrl=" + openGraphUrl
                + ", pollId=" + pollId
                + ", viewIndex=" + viewIndex
                + ", choice=" + choice
                + ", detail=" + detail
                + ", openGraphImageUrl=" + openGraphImageUrl
                + ", openGraphType=" + og_type
                + ", active=" + active
                + "]";
    }
    /**
     * Adapts a Choice object in to its json representation
     * @param choice
     * @return a Choice transformed in to a json representation
     * @throws JSONException
     */
    public JSONObject toJson() throws JSONException {
        JSONObject json = new JSONObject();
        json.put("index", getViewIndex());
        json.put("choice", getChoice());
        json.put("detail", getDetail());
        json.putOpt("id", getId());
        json.put("og_type", getOpenGraphType());
        json.put("og_url", getOpenGraphUrl());
        json.putOpt("og_image_url", getOpenGraphImageUrl());
        json.put("active", isActive());
        return json;
    }
    public static Choice mergeFrom(JSONObject json) throws JSONException {
        Choice choice = new Choice();
        choice.setChoice(json.getString("choice"));
        choice.setViewIndex(json.getString("index"));
        choice.setDetail(json.optString("detail"));
        //choice.setActive(json.optBoolean("active")); // manual moderation is required
        return choice;
    }
}
