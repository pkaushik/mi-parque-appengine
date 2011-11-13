package com.miparque.server.database;

import static com.miparque.server.database.FusionTableUtil.nullSafeString;

import java.io.IOException;
import java.text.Normalizer;
import java.text.Normalizer.Form;

import com.google.gdata.util.AuthenticationException;
import com.google.gdata.util.ServiceException;
import com.miparque.server.dao.Choice;
import com.miparque.server.dao.Poll;
import com.miparque.server.dao.PollType;

/**
 * FusionTable based data access implemention for a Poll.
 * 
 * @author codersquid
 */
public class PollFtDao implements DataInterface<Poll,String> {
    private static final String POLL_FID = "2149092";
    //2148972,UserChoiceHistory
    //2149094,Choice

    /**
     * TODO: stubbed with mock data.
     * @param rowid rowid for a Poll
     * @return the Poll associated with the rowid
     */
    public Poll getById(String rowid) {
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

    /**
     * TODO: Stub
     */
    public void update(Poll entity) {
    }


    /**
     * TODO: Stub. Don't have choices being entered yet.
     * TODO: exception behavior
     */
    public String create(Poll poll) {
        String active = poll.isActive() ? "true" : "false";
        validate(poll);
        StringBuffer sb = new StringBuffer("insert into ")
                .append(POLL_FID)
                .append(" (description,title,openGraphUrl,pollType,active,openGraphImageUrl)")
                .append(" values (")
                .append(nullSafeString(poll.getDescription()))
                .append(",")
                .append(nullSafeString(slugify(poll.getTitle())))
                .append(",")
                .append(nullSafeString(poll.getOpenGraphUrl()))
                .append(",")
                .append(nullSafeString(poll.getType().name()))
                .append(",")
                .append(nullSafeString(active))
                .append(",")
                .append(nullSafeString(poll.getOpenGraphImageUrl()))
                .append(" )");
        FusionTablesManager fm;
        try {
            fm = new FusionTablesManager();
            fm.runInsert(sb.toString());
        } catch (AuthenticationException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        } catch (IOException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        } catch (ServiceException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        }
        // once we have the rowid, add choices to associate with it
        return "123"; // TODO don't have the rowid
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

    // TODO this section will get refactored out

	/**
     * @param value    not null not empty string
     * @return a slugified version of the title that can serve as a url
     */
    private String slugify(String value) {
        return removeDiacriticalMarks(value).replaceAll("\\p{Space}+", "-").toLowerCase();
    }
    /**
     * see http://pinboard.in/u:sky/t:java/t:unicode/
     * @param string
     * @return
     */
    private static String removeDiacriticalMarks(String string) {
        return Normalizer.normalize(string, Form.NFD)
            .replaceAll("\\p{InCombiningDiacriticalMarks}+", "");
    }
}
