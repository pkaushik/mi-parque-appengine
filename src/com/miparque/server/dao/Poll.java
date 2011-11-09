package com.miparque.server.dao;

import java.util.ArrayList;
import java.util.List;

/**
 * A model of a Mi Voto poll
 * 
 * @author codersquid
 */
public class Poll {
    /** database id */
    private int id;
    /** descriptive but URL friendly slug. most likely based on title*/
    private String slug;
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

    public int getId() {
        return id;
    }
    public void setId(int id) {
        this.id = id;
    }
    public String getSlug() {
        return slug;
    }
    public void setSlug(String slug) {
        this.slug = slug;
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
        Poll other = (Poll) obj;
        if (id != other.id)
            return false;
        return true;
    }
    public String toString() {
        return "Poll [id=" + id
                + ", slug=" + slug
                + ", title=" + title
                + ", description=" + description
                + ", type=" + type
                + ", active=" + active
                + ", choices=" + choices
                + "]";
    }
}
