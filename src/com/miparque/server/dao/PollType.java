package com.miparque.server.dao;

/**
 * Designates the type of voting that a Poll will use.
 * <ul>
 * <li>PLURALITY is for polls where the voter may only pick one choice
 * <li>APPROVAL is for polls where the voter may pick more than one choice
 * <li>RATING is for polls where the voter scores each option
 * </ul>
 *
 * @author codersquid
 */
public enum PollType {
    PLURALITY(1),
    APPROVAL(2),
    RATING(3);
    private int id; // the value that gets persisted in the database
    PollType(int index) {
        this.id = index; 
    }
    public int getId() {
        return id;
    }
    public PollType find(int i) {
        switch(i) {
            case 2:
                return APPROVAL;
            case 3:
                return RATING;
            case 1:
            default:
                // not sure if I should have a default, maybe it should just blow up
                return PLURALITY;
        }
    }
}
