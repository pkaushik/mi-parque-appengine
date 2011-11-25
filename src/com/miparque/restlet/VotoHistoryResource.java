package com.miparque.restlet;

import java.text.SimpleDateFormat;
import java.util.Date;

import org.json.JSONException;
import org.json.JSONObject;
import org.restlet.data.CharacterSet;
import org.restlet.ext.json.JsonRepresentation;
import org.restlet.representation.Representation;
import org.restlet.resource.Post;
import org.restlet.resource.ServerResource;

import com.miparque.server.ResourceNotFoundException;
import com.miparque.server.dao.Choice;
import com.miparque.server.dao.Poll;
import com.miparque.server.dao.VotoHistory;
import com.miparque.server.database.ChoiceFtDao;
import com.miparque.server.database.PollFtDao;
import com.miparque.server.database.VotoHistoryFtDao;

public class VotoHistoryResource extends ServerResource {
    private VotoHistoryFtDao vhDao = new VotoHistoryFtDao();
    private PollFtDao pollDao = new PollFtDao();
    private ChoiceFtDao choiceDao = new ChoiceFtDao();

    /**
     * POST /historia/voto/{userId}/{pollId}/{choiceId}
     * 
     * example
     * {code curl -v -X POST -H 'content-length:0'  "http://localhost:8888/api/historia/voto/123/203/5"}
     * @throws ResourceNotFoundException
     * @throws JSONException
     */
    @Post
    public Representation acceptVoto() throws ResourceNotFoundException, JSONException {
        String userId = (String) getRequest().getAttributes().get("userId");
        String pollId = (String) getRequest().getAttributes().get("pollId");
        String choiceId = (String) getRequest().getAttributes().get("choiceId");
        System.out.println("poll " + pollId + " choice " + choiceId + " user " + userId);

        // TODO does the user exist?

        // does this poll exist
        Poll poll = pollDao.get(pollId);
        //if (!poll.isActive()) {
        //    setStatus(Status.CLIENT_ERROR_BAD_REQUEST);
        //}

        // TODO Does this PollType allow for multiple selections?
        // TODO did the user vote in this poll before?

        // does the choice exist?
        Choice choice = choiceDao.get(choiceId);
        // verify that this choice is in this poll
        if (!pollId.equals(choice.getPollId())) {
            throw new IllegalArgumentException("This choice does not belong to this poll: "
                    + "Choice [" + choice + "] "
                    + "Poll [" + poll + "]");
        }

        // https://groups.google.com/group/fusion-tables-users-group/msg/7c41c7f6ea5f485f?dmode=source&output=gplain&noredirect
        // fusiontables ignore time right now
        Long timeStamp = java.lang.System.currentTimeMillis();
        Date date = new Date();
        SimpleDateFormat df = new SimpleDateFormat("yyyy.MM.dd");
        String timeOfVote = df.format(date);

        VotoHistory vh = new VotoHistory();
        vh.setChoiceId(choiceId);
        vh.setPollId(pollId);
        vh.setUserId(userId);
        vh.setTimeStamp(timeStamp);
        vh.setTimeOfVote(timeOfVote);

        String rowid = vhDao.insert(vh);
        JSONObject json = new JSONObject();
        json.putOpt("rowid", rowid);
        JsonRepresentation jr = new JsonRepresentation(json);
        jr.setCharacterSet(CharacterSet.UTF_8);
        return jr;
    }
}
