package com.miparque.server.dao;

import java.io.Serializable;

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
 * 
 * fusiontable uses Strings for row ids
 * 
 * @author codersquid
 */
public class Choice implements Serializable {
    private static final long serialVersionUID = 1L;

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
                + "]";
    }

    
}
