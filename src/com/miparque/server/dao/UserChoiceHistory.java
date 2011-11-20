package com.miparque.server.dao;

import java.io.Serializable;

import com.google.gdata.data.DateTime;

/**
 * Record of a vote of a member. When a user votes, we add an entry to the history table
 *
 * UserChoiceHistory 2148972
 * column id,name,type
 * col0,choiceId,string
 * col1,userId,string
 * col2,timeOfVote,datetime
 * col3,pollId,string
 * 
 * @author codersquid
 */
public class UserChoiceHistory implements Serializable {
    private static final long serialVersionUID = 1L;
    private String id;
    private String userId;
    private String pollId;
    private String choiceId;
    // https://groups.google.com/group/fusion-tables-users-group/msg/7c41c7f6ea5f485f?dmode=source&output=gplain&noredirect
    private DateTime timeOfVote = DateTime.now();

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
    public DateTime getTimeOfVote() {
        return timeOfVote;
    }
    public void setTimeOfVote(DateTime timeOfVote) {
        this.timeOfVote = timeOfVote;
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
        UserChoiceHistory other = (UserChoiceHistory) obj;
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
