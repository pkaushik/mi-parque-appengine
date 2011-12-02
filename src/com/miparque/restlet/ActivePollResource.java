package com.miparque.restlet;

import java.util.ArrayList;
import java.util.List;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;
import org.restlet.data.CharacterSet;
import org.restlet.data.Status;
import org.restlet.ext.json.JsonRepresentation;
import org.restlet.representation.Representation;
import org.restlet.resource.Get;
import org.restlet.resource.Post;
import org.restlet.resource.ServerResource;

import com.miparque.server.ResourceNotFoundException;
import com.miparque.server.dao.ActivePoll;
import com.miparque.server.dao.Choice;
import com.miparque.server.dao.Poll;
import com.miparque.server.database.ActivePollFtDao;
import com.miparque.server.database.ChoiceFtDao;
import com.miparque.server.database.PollFtDao;

public class ActivePollResource extends ServerResource {
    // pretend like we have data injection or whatever and we get different impls based on our backing data store
    // and if we ever get to the point where we do any sort of testing it would be nice to be able to mock interfaces
    // so we'll make these impls of interfaces, yep. unless we don't need to.
    private PollFtDao pollDao = new PollFtDao();
    private ChoiceFtDao choiceDao = new ChoiceFtDao();
    private ActivePollFtDao activeDao = new ActivePollFtDao();

    @Get("json")
    public Representation represent() throws ResourceNotFoundException, JSONException {
        List<ActivePoll> polls = activeDao.getAll();
        List<JSONObject> jsonList = new ArrayList<JSONObject>();
        for (ActivePoll poll : polls) {
            jsonList.add(poll.toJson());
        }
        JSONArray jarr = new JSONArray(jsonList);
        JsonRepresentation jr = new JsonRepresentation(jarr);
        jr.setCharacterSet(CharacterSet.UTF_8);
        setStatus(Status.SUCCESS_OK);
        return jr;
    }

    @Post()
    public void activate() throws ResourceNotFoundException {
        String pollId = (String) getRequest().getAttributes().get("pollId");

        // TODO is it already active?

        Poll poll = pollDao.get(pollId);
        if (!poll.isActive()) {
            throw new IllegalArgumentException("Poll is not active: " + pollId);
        }
        List<Choice> choices = choiceDao.getActive(pollId);
        if (choices.isEmpty()) {
            throw new IllegalArgumentException("Poll has no active choices: " + pollId);
        }
        if (choices.size() > 5) {
            System.out.println("Ignoring choices after the first 5");
            choices = choices.subList(0, 5);
        }

        ActivePoll activePoll = new ActivePoll();
        activePoll.mergePoll(poll);

        int i = 0;
        for (Choice c : choices) {
            activePoll.mergeChoice(c, i);
            i++;
        }
        activeDao.insert(activePoll);
        setStatus(Status.SUCCESS_CREATED);
    }
}
