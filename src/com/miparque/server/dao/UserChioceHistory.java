package com.miparque.server.dao;

import com.google.gdata.data.DateTime;

/**
 * Record of a vote of a member. When a user votes, we add an entry to the history table
 * 
 * @author codersquid
 */
public class UserChioceHistory {
    private int id;
    private String userId;
    private int pollId;
    private int choiceId;
    private DateTime timeOfVote;

    public int getId() {
        return id;
    }
    public void setId(int id) {
        this.id = id;
    }
    public String getUserId() {
        return userId;
    }
    public void setUserId(String userId) {
        this.userId = userId;
    }
    public int getPollId() {
        return pollId;
    }
    public void setPollId(int pollId) {
        this.pollId = pollId;
    }
    public int getChoiceId() {
        return choiceId;
    }
    public void setChoiceId(int choiceId) {
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
        result = prime * result + id;
        return result;
    }
    public boolean equals(Object obj) {
        if (this == obj)
            return true;
        if (obj == null)
            return false;
        if (getClass() != obj.getClass())
            return false;
        UserChioceHistory other = (UserChioceHistory) obj;
        if (id != other.id)
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
