package com.miparque.restlet;

import java.util.ArrayList;
import java.util.List;

import org.json.JSONException;
import org.json.JSONObject;
import org.restlet.data.CacheDirective;
import org.restlet.data.CharacterSet;
import org.restlet.ext.json.JsonRepresentation;
import org.restlet.representation.Representation;
import org.restlet.resource.Get;
import org.restlet.resource.ServerResource;

import com.miparque.server.ResourceNotFoundException;
import com.miparque.server.database.VotoHistoryFtDao;

public class VotoHistoryListResource extends ServerResource {
    // TODO do we want to return the poll and choice or just the row of history?
    //private PollFtDao pollDao = new PollFtDao();
    //private ChoiceFtDao choiceDao = new ChoiceFtDao();
    private VotoHistoryFtDao vhDao = new VotoHistoryFtDao();

    /**
     * Returns the history of a user's votes for a poll. The most recent vote is first. pollId is optional.
     * 
     * GET /historia/votos/{userId}
     * GET /historia/votos/{userId}/{pollId}
     * 
     * Example
     * {code curl -v -X GET -H 'accept:application/json' "http://localhost:8888/api/historia/votos/123"}
     * {code curl -v -X GET -H 'accept:application/json' "http://localhost:8888/api/historia/votos/123/801"}
     * 
     * @return list of user choice histories in reverse chronology
     * <pre>
     * {"history":[
     *   {"pollId":"801","timeStamp":"1322237594991","choiceId":"401","userId":"123", * "timeOfVote":"2011.11.25","rowid":"1201"},
     *   {"pollId":"801","timeStamp":"1322237578645","choiceId":"402","userId":"123","timeOfVote":"2011.11.25","rowid":"1001"}
     * ]}
     * </pre>
     * @throws ResourceNotFoundException
     * @throws JSONException
     * 
     * 
     * TODO: I don't know why, but when I submit a request to the service, a breakpoint in VotoHistoryFtDao is hit
     * twice, where I would only expect it to be hit once. It might be that I've hooked up this method to the
     * framework incorrectly? This needs to be looked in to.
     */
    @Get("json")
    public Representation representPollHistory() throws ResourceNotFoundException, JSONException {
        getResponse().getCacheDirectives().add(CacheDirective.noCache());
        String id = (String) getRequest().getAttributes().get("userId");
        String pollId = (String) getRequest().getAttributes().get("pollId");
        List<JSONObject> history = new ArrayList<JSONObject>();
        if (pollId == null) {
            history = vhDao.getUserHistoryJsonList(id);
        } else {
            history= vhDao.getUserPollHistoryJsonList(id, pollId);
        }
        JSONObject json = new JSONObject();
        json.put("history", history);
        JsonRepresentation jr = new JsonRepresentation(json);
        jr.setCharacterSet(CharacterSet.UTF_8);
        return jr;
    }

}
