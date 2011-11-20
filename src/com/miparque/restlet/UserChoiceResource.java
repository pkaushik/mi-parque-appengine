package com.miparque.restlet;

import org.json.JSONException;
import org.restlet.representation.Representation;
import org.restlet.resource.Get;
import org.restlet.resource.Post;
import org.restlet.resource.ServerResource;

import com.miparque.server.ResourceNotFoundException;
import com.miparque.server.dao.Choice;
import com.miparque.server.dao.Poll;
import com.miparque.server.database.PollFtDao;

public class UserChoiceResource extends ServerResource {
    private PollFtDao pollDao = new PollFtDao();

    /**
     * example
     * {code curl -v -X POST -H 'content-length:0'  "http://localhost:8888/api/choice/203/5/123"}
     * @throws ResourceNotFoundException
     * @throws JSONException
     */
    @Post
    public void acceptChoice() throws ResourceNotFoundException, JSONException {
        String pollId = (String) getRequest().getAttributes().get("pollId");
        String choiceId = (String) getRequest().getAttributes().get("choiceId");
        String userId = (String) getRequest().getAttributes().get("userId");
        System.out.println("poll " + pollId + " choice " + choiceId + " user " + userId);

        // TODO does the user exist?

        // does the choice in this poll exist?
        Choice choice = pollDao.getDetachedChoice(pollId, choiceId);

        Poll poll = pollDao.getDetachedPoll(pollId);
        //if (!poll.isActive()) {
        //    setStatus(Status.CLIENT_ERROR_BAD_REQUEST);
        //}

        // TODO Does this PollType allow for multiple selections?
        // TODO did the user vote in this poll before?

        pollDao.createUserChoiceHistory(pollId, choiceId, userId);
    }
}
