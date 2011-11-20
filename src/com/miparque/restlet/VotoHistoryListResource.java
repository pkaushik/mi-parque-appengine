package com.miparque.restlet;

import java.util.List;

import org.json.JSONException;
import org.json.JSONObject;
import org.restlet.data.CacheDirective;
import org.restlet.data.CharacterSet;
import org.restlet.ext.json.JsonRepresentation;
import org.restlet.representation.Representation;
import org.restlet.resource.Get;
import org.restlet.resource.Post;
import org.restlet.resource.ServerResource;

import com.google.gdata.data.DateTime;
import com.miparque.server.ResourceNotFoundException;
import com.miparque.server.dao.Choice;
import com.miparque.server.dao.Poll;
import com.miparque.server.dao.VotoHistory;
import com.miparque.server.database.ChoiceFtDao;
import com.miparque.server.database.PollFtDao;
import com.miparque.server.database.VotoHistoryFtDao;

public class VotoHistoryListResource extends ServerResource {
    // TODO do we want to return the poll and choice or just the row of history?
    //private PollFtDao pollDao = new PollFtDao();
    //private ChoiceFtDao choiceDao = new ChoiceFtDao();
    private VotoHistoryFtDao vhDao = new VotoHistoryFtDao();

    /**
     * Example
     * {code curl -v -X GET  "http://localhost:8888/api/userchoices/123"}
     * @return list of user choice histories 
     * <pre>
     * {"history":[
     * {"pollId":"203","choiceId":"5","userId":"123","timeOfVote":"2011.11.20","rowid":"1"},
     * {"pollId":"203","choiceId":"5","userId":"123","timeOfVote":"2011.11.20","rowid":"201"}
     * ]}
     * </pre>
     * @throws ResourceNotFoundException
     * @throws JSONException
     */
    @Get("json")
    public Representation represent() throws ResourceNotFoundException, JSONException {
        getResponse().getCacheDirectives().add(CacheDirective.noCache());
        String id = (String) getRequest().getAttributes().get("userId");
        JSONObject json = new JSONObject();
        List<JSONObject> history = vhDao.getJsonList(id);
        json.put("history", history);
        JsonRepresentation jr = new JsonRepresentation(json);
        jr.setCharacterSet(CharacterSet.UTF_8);
        return jr;
    }

}
