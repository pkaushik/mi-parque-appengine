package com.miparque.server.dao;

/**
 * A model of a choice in a Mi Voto Poll. Polls can have multiple choices.
 *
 * an example of a json choice element that the front end will see:
 * {"index": "3", "choice": "Parque Sarate", "detail": "Director of Little Village Community Development Corporation"}
 * 
 * TODO: perhaps we add media links
 * 
 * @author codersquid
 */
public class Choice {
    /** database id */
    private int id;
    /** URL friendly human readable string based on the choice content */
    private String slug;
    /** fkey to Poll */
    private int pollId;
    /** stores the index that is being used by the frontend when showing the choice. this is probably not
     * the best idea, but I'm continuing with the data structure as it is for now */
    private String viewIndex;
    /** Short description to serve as the "headline" of the choice */
    private String choice;
    /** Lengthier description about the choice */
    private String detail;

    public String getSlug() {
        return slug;
    }
    public void setSlug(String slug) {
        this.slug = slug;
    }
    public int getId() {
        return id;
    }
    public int getPollId() {
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
    public void setId(int id) {
        this.id = id;
    }
    public void setPollId(int pollId) {
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
        Choice other = (Choice) obj;
        if (id != other.id)
            return false;
        return true;
    }
    public String toString() {
        return "Choice [id=" + id
                + ", pollId=" + pollId
                + ", slug=" + slug
                + ", viewIndex=" + viewIndex
                + ", choice=" + choice
                + ", detail=" + detail
                + "]";
    }
    
}
