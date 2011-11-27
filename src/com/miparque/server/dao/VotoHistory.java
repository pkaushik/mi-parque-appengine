package com.miparque.server.dao;

import java.io.Serializable;
import java.util.Map;

import com.miparque.restlet.JsonAdapter;

/**
 * Record of a vote of a member. When a user votes, we add an entry to the history table
 * 
 * VotoHistory 2218422
 * column id,name,type
 * col0,userId,string
 * col4,pollId,string
 * col5,choiceId,string
 * col3,timeOfVote,datetime
 * col6,timeStamp,number
 * 
 * @author codersquid
 */
public class VotoHistory implements Serializable {
    private static final long serialVersionUID = 1L;
    private String id;
    private String userId;
    private String pollId;
    private String choiceId;

    //use a SimpleDateFormat("yyyy.MM.dd");
    private String timeOfVote; // = df.format(date)))
    // https://groups.google.com/group/fusion-tables-users-group/msg/7c41c7f6ea5f485f?dmode=source&output=gplain&noredirect
    private Long timeStamp; // = java.lang.System.currentTimeMillis();

    public String getId() {
        return id;
    }
    public void setId(String id) {
        this.id = id;
    }
    public String getUserId() {
        return userId;
    }
    public void setUserId(String userId) {
        this.userId = userId;
    }
    public String getPollId() {
        return pollId;
    }
    public void setPollId(String pollId) {
        this.pollId = pollId;
    }
    public String getChoiceId() {
        return choiceId;
    }
    public void setChoiceId(String choiceId) {
        this.choiceId = choiceId;
    }
    public String getTimeOfVote() {
        return timeOfVote;
    }
    public void setTimeOfVote(String timeOfVote) {
        this.timeOfVote = timeOfVote;
    }
    public Long getTimeStamp() {
        return this.timeStamp;
    }
    public void setTimeStamp(Long timeStamp) {
        this.timeStamp = timeStamp;
    }
    public int hashCode() {
        final int prime = 31;
        int result = 1;
        result = prime * result + ((id == null) ? 0 : id.hashCode());
        return result;
    }
    public boolean equals(Object obj) {
        if (this == obj)
            return true;
        if (obj == null)
            return false;
        if (getClass() != obj.getClass())
            return false;
        VotoHistory other = (VotoHistory) obj;
        if (id == null) {
            if (other.id != null)
                return false;
        } else if (!id.equals(other.id))
            return false;
        return true;
    }
    public String toString() {
        return "Ballot [id=" + id
                + ", userId=" + userId
                + ", pollId=" + pollId
                + ", choiceId=" + choiceId
                + ", timeOfVote=" + timeOfVote
                + "]";
    }

}
