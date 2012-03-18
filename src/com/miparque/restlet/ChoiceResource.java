package com.miparque.restlet;

import org.json.JSONException;
import org.json.JSONObject;
import org.restlet.data.CharacterSet;
import org.restlet.data.Status;
import org.restlet.ext.json.JsonRepresentation;
import org.restlet.representation.Representation;
import org.restlet.resource.Get;
import org.restlet.resource.ServerResource;

import com.miparque.server.ResourceNotFoundException;
import com.miparque.server.dao.Choice;
import com.miparque.server.database.ChoiceFtDao;
import com.miparque.server.database.PollFtDao;

public class ChoiceResource extends ServerResource {
    // pretend like we have data injection or whatever and we get different impls based on our backing data store
    // and if we ever get to the point where we do any sort of testing it would be nice to be able to mock interfaces
    // so we'll make these impls of interfaces, yep. unless we don't need to.
    private PollFtDao pollDao = new PollFtDao();
    private ChoiceFtDao choiceDao = new ChoiceFtDao();

    /**
     * Return a json representation of a poll with the choice element set to the choice specified by the og url
     *
     * Example:
     * {code curl http://1767.mi-parque.appspot.com/api/choice/1203-person-a}
     * 
     * <pre>
     * {
     *  "id": "1203",
     *  "og_image_url": "",
     *  "title": "Keynotes",
     *  "choice": {
     *    "id": "1204",
     *    "og_image_url": "",
     *    "detail": "A detail",
     *    "index": "0",
     *    "choice": "Person A",
     *    "active": true,
     *    "og_url": "1203-person-a",
     *    "og_type": "poll"
     *  },
     *  "description": "Who should we invite to give a keynote?",
     *  "active": true,
     *  "og_type": "unassigned",
     *  "multiple": false,
     *  "og_url": "keynotes"
     *  }
     *  </pre>
     * 
     * @param ogUrl
     *     the open graph url for the choice
     * 
     * @return
     * @throws ResourceNotFoundException
     * @throws JSONException
     */
    @Get("json")
    public Representation getChoice() throws ResourceNotFoundException, JSONException {
        String ogUrl = (String) getRequest().getAttributes().get("ogUrl");

        Choice choice = choiceDao.getByOpenGraphUrl(ogUrl);
        JSONObject choiceJson = choice.toJson();
        JSONObject poll = pollDao.getJson(choice.getPollId());
        poll.put("choice", choiceJson);

        JsonRepresentation jr = new JsonRepresentation(poll);
        jr.setCharacterSet(CharacterSet.UTF_8);

        setStatus(Status.SUCCESS_OK);
        return jr;
    }

}
