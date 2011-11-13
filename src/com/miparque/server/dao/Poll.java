package com.miparque.server.dao;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

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
                + ", title=" + title
                + ", description=" + description
                + ", type=" + type
                + ", choices=" + choices
                + ", active=" + active
                + "]";
    }

}
