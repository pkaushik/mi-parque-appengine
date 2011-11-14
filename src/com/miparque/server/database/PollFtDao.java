package com.miparque.server.database;

import static com.miparque.server.database.FusionTableUtil.nullSafeString;

import java.text.Normalizer;
import java.text.Normalizer.Form;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import java.util.Map;

import com.google.appengine.repackaged.com.google.common.base.Strings;
import com.miparque.server.dao.Choice;
import com.miparque.server.dao.Poll;
import com.miparque.server.dao.PollType;

/**
 * FusionTable based data access implemention for a Poll.
 * 
 * I guess we could have checked exceptions to give back to the caller if we need to
 * 
 * @author codersquid
 */
public class PollFtDao {
    private static final String POLL_FID = "2149092";
    private static final String CHOICE_FID = "2149094";
    private static final String columnsPoll = "ROWID,description,title,openGraphUrl,pollType,active,openGraphImageUrl";
    private static final String columnsChoice = "ROWID,viewIndex,openGraphUrl,choice,details,pollId,openGraphImageUrl";
    //2148972,UserChoiceHistory

    /**
     * TODO: stubbed with mock data.
     * @param rowid rowid for a Poll
     * @return the Poll associated with the rowid
     */
    public Poll getById(String rowid) {
        Poll poll = mockPoll(rowid);

        FusionTablesManager fm;
        String pollquery = "SELECT " + columnsPoll + " from " + POLL_FID + " WHERE ROWID = '" + rowid + "'" ;
        String choicequery = "SELECT " + columnsChoice + " from " + CHOICE_FID + " WHERE 'pollId' = '" + rowid + "'" ;

        try {
            fm = new FusionTablesManager();
            List<Map<String, String>> pollrows = fm.runSelect(pollquery);
            System.out.println(pollrows);
        } catch (Exception e) {
            throw new RuntimeException("Unable to find poll for query: " + pollquery, e);
        }

        try {
            List<Map<String,String>> choicerows = fm.runSelect(choicequery);
            System.out.println(choicerows);
        } catch (Exception e) {
            throw new RuntimeException("Unable to find choices for query: " + choicequery, e);
        }

        return poll;
    }

    /**
     * TODO: Stub
     */
    public void update(Poll entity) {
    }


    /**
     * Persist a Poll and its Choices to fusiontables.
     * 
     * @param poll poll entity to be persisted
     * @return rowid of the new row
     * @throws RuntimeExceptions if any of the objects do not pass validation, or there are service problems.
     */
    public String create(Poll poll) {
        validate(poll);
        String pollInsert = pollInsertSql(poll);

        List<String> rowids = new ArrayList<String>();
        rowids = runInsert(pollInsert, poll);
        String pollid = rowids.get(0);

        String choicesInsert = choicesInsertSql(poll.getChoices(), pollid);
        runInsert(choicesInsert, poll.getChoices());
        return pollid;
    }

    /**
     * Delegates to FusionTableManager.runInsert and does validation
     * @param insert sql insert command
     * @return list of new rowids
     * @throws RuntimeExceptions if any of the objects do not pass validation, or there are service problems.
     */
    private List<String> runInsert(String insert, Object thang) {
        List<String> rowids = new ArrayList<String>();
        try {
            FusionTablesManager fm = new FusionTablesManager();
            rowids = fm.runInsert(insert);
        } catch (Exception e) {
            throw new RuntimeException("Unable to persist. insert: [" + insert + "]", e);
        }
        if (rowids == null || rowids.isEmpty()) {
            throw new RuntimeException("There was a problem persisting this object. We did not find any ROWIDS in the "
                    + " response. insert: [" + insert + "]");
        }
        return rowids;
    }

    /**
     * Validates a poll for storing
     * @param poll
     */
    private void validate(Poll poll) {
        if (poll.getTitle() == null || poll.getTitle().isEmpty()) {
            throw new IllegalArgumentException("Polls need a title in order to be stored. Failed to store" +
                    " Poll object: " + poll);
        }
    }
    private void validate(Choice choice) {
        if (choice.getChoice() == null || choice.getChoice().isEmpty()) {
            throw new IllegalArgumentException("Choices need a choice in order to be stored. Failed to store" +
                    " Choice object: " + choice);
        }
    }

    /**
     * Generates insert statement for requested poll
     * @param poll a validate poll
     * @return sql insert statement valid for fusiontables
     */
    private String pollInsertSql(Poll poll) {
        String active = poll.isActive() ? "true" : "false";
        poll.setOpenGraphUrl(slugify(poll.getTitle()));
        StringBuffer sb = new StringBuffer("insert into ")
                .append(POLL_FID)
                .append(" (description,title,openGraphUrl,pollType,active,openGraphImageUrl)")
                .append(" values (")
                .append(nullSafeString(poll.getDescription()))
                .append(",")
                .append(nullSafeString(poll.getTitle()))
                .append(",")
                .append(nullSafeString(poll.getOpenGraphUrl()))
                .append(",")
                .append(nullSafeString(poll.getType().name()))
                .append(",")
                .append(nullSafeString(active))
                .append(",")
                .append(nullSafeString(poll.getOpenGraphImageUrl()))
                .append(" )");
        return sb.toString();
    }
    private String choicesInsertSql(List<Choice> choices, String pollId) {
        Iterator<Choice> iter = choices.iterator();
        StringBuffer sb = new StringBuffer();
        while (iter.hasNext()) {
            Choice choice = iter.next();
            validate(choice);
            sb.append(choiceInsertSql(choice, pollId));
            if (iter.hasNext()) {
                sb.append(";");
            }
        }
        return sb.toString();
    }
    
    private String choiceInsertSql(Choice choice, String pollId) {
        choice.setOpenGraphUrl(slugify(choice.getChoice()));
        choice.setPollId(pollId);
        StringBuffer sb = new StringBuffer("insert into ")
                .append(CHOICE_FID)
                .append(" (viewIndex,openGraphUrl,choice,details,pollId,openGraphImageUrl)")
                .append(" values (")
                .append(nullSafeString(choice.getViewIndex()))
                .append(",")
                .append(nullSafeString(choice.getOpenGraphUrl()))
                .append(",")
                .append(nullSafeString(choice.getChoice()))
                .append(",")
                .append(nullSafeString(choice.getDetail()))
                .append(",")
                .append(nullSafeString(choice.getPollId()))
                .append(",")
                .append(nullSafeString(choice.getOpenGraphImageUrl()))
                .append(" )");
        return sb.toString();
    }
    // TODO this section will get refactored out

    /**
     * see http://pinboard.in/u:sky/t:java/t:unicode/
     * @param value
     * @return a slugified version of the title that can serve as a url
     */
    private String slugify(String value) {
        if (value == null || value.isEmpty()) {
            return "404";
        }
        return Normalizer.normalize(value, Form.NFD)
                .replaceAll("\\p{InCombiningDiacriticalMarks}+", "")
                .replaceAll("\\p{Punct}+", "")
                .replaceAll("\\p{Space}+", "-")
                .toLowerCase();
    }

    private Poll mockPoll(String rowid) {
        Poll poll = new Poll();
         poll.setId(rowid);
         poll.setOpenGraphUrl("perma/link/to/poll/favorite-colour");
         poll.setTitle("what is your favorite colour");
         poll.setDescription("Select your favorite colour");
         poll.setType(PollType.PLURALITY);
         Choice blue = new Choice();
         blue.setChoice("Blue");
         blue.setDetail("Blue tastes like chairs");
         blue.setOpenGraphUrl("perma/link/to/blue");
         blue.setViewIndex("0");
         Choice red = new Choice();
         red.setChoice("Red");
         red.setDetail("Ice is not red.");
         red.setOpenGraphUrl("perma/link/to/red");
         red.setViewIndex("1");
         poll.addChoice(blue);
         poll.addChoice(red);
         return poll;
    }
}
