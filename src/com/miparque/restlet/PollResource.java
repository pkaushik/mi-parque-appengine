package com.miparque.restlet;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;
import org.restlet.data.CacheDirective;
import org.restlet.data.CharacterSet;
import org.restlet.data.MediaType;
import org.restlet.data.Status;
import org.restlet.ext.json.JsonRepresentation;
import org.restlet.representation.Representation;
import org.restlet.resource.Get;
import org.restlet.resource.Post;
import org.restlet.resource.ServerResource;

import com.miparque.server.RestApplication;
import com.miparque.server.dao.Choice;
import com.miparque.server.dao.Poll;
import com.miparque.server.dao.PollType;
import com.miparque.server.database.PollFtDao;

/**
 * Resource representation of Polls/Voto. Attached to the router in {@link RestApplication} 
 * <li>
 * <ul>/voto
 * <ul>/voto/{id}
 * </ul>
 * 
 * @author codersquid
 *
 */
public class PollResource extends ServerResource {
    // pretend like we have data injection or whatever and we get different impls based on our backing data store
    private PollFtDao pollDao = new PollFtDao();

    /**
     * GET /voto/{id} where {id} is the key in to the db for a Poll
     * 
     * {@code $ curl -v -X GET -H 'accept:application/json' "http://localhost:8888/api/voto/123"}
     * 
     * @return json representation of {@link Poll}
     */
    @Get("json")
    public Representation represent() {
        String id = (String) getRequest().getAttributes().get("id");
        // try
        // get poll ... logic here or pass id to data manager?
        // prob data manager... will also want logic to get choices. things could get lengthy. hate huge classes
        // catch not found, return 404
        // catch some service exception, 500
        Poll poll = pollDao.getById(id); // mock data

        // serialize to json and return
        JSONObject json = new JSONObject();
        try {
            json.put("id", poll.getId());
            json.put("title", poll.getTitle());
            json.put("description", poll.getDescription());
            json.put("multiple", poll.getType().equals(PollType.APPROVAL));
        } catch (JSONException e) {
            e.printStackTrace(); // what kind of real logging do we have?
            setStatus(Status.SERVER_ERROR_INTERNAL);
        }
        JsonRepresentation jr = new JsonRepresentation(json);
        jr.setCharacterSet(CharacterSet.UTF_8);
        // etc.

        // follow up with transport layer stuff
        getResponse().getCacheDirectives().add(CacheDirective.noCache());
        setStatus(Status.SUCCESS_OK);
        return jr;
    }

    /**
     * Adds a new poll. content is a json representation of a poll.
     * 
     * <pre>
     * {
     *  "title": "Park Name",
     *  "description": "What should we name the park? Based on name submissions we are now voting on the top 3!",
     *  "multiple": false,
     *  "first": true,
     *  "choices": [
     *     {"index": "0", "choice": "Parque Marentes", "detail": "labor organizer, farm worker and environmental justice advocate"}, 
     *     {"index": "1", "choice": "Parque Cisneros", "detail": "Chicago born Chicana writer and author of the House on Mango Street"}, 
     *     {"index": "2", "choice": "Parque Castillo", "detail": "Mexican-American Chicana novelist, poet, short story writer, and essayist"},
     *     {"index": "3", "choice": "Parque Sarate", "detail": "Director of Little Village Community Development Corporation"}
     *   ]
     * }
     * </pre>
     * 
     * Curl example. Let 'parkname.json' be the name of a file containing the above json data.
     *
     * {@code $ curl -v -X POST -d @parkname.json -H 'content-type:application/json' -H 'accept:application/json' "http://localhost:8888/api/voto"}
     * 
     * @param entity    Representation containing a json Poll
     * 
     */
    @Post
    public void acceptRepresentation(JsonRepresentation entity) {
        if (! entity.getMediaType().isCompatible(MediaType.APPLICATION_JSON)) {
            setStatus(Status.CLIENT_ERROR_UNSUPPORTED_MEDIA_TYPE);
            return;
        }

        Poll poll = new Poll();
        try {
            // allow required elements to blow up when they are not found
            JSONObject json = entity.getJsonObject();
            poll.setActive(false); // needs to be moderated by hand
            poll.setTitle(json.getString("title"));
            poll.setDescription(json.getString("description"));
            PollType type = json.optBoolean("mulitple") ? PollType.APPROVAL : PollType.PLURALITY;
            poll.setType(type);
            JSONArray choices = json.getJSONArray("choices");
            for (int i = 0; i < choices.length(); i++) {
                JSONObject choiceJson = choices.getJSONObject(i);
                Choice choice = new Choice();
                // choice setSlug not sure what to set as slug right now
                choice.setChoice(choiceJson.getString("choice"));
                choice.setViewIndex(choiceJson.getString("index"));
                choice.setDetail(choiceJson.optString("detail"));
                poll.addChoice(choice);
            }
        } catch (JSONException e) {
            e.printStackTrace();
            setStatus(Status.CLIENT_ERROR_BAD_REQUEST);
            return;
        }

        try {
            pollDao.create(poll);
        } catch (Exception e) {
            // catch already exists and return 4xx
            // catch some service exception and return 500
            e.printStackTrace();
            setStatus(Status.SERVER_ERROR_INTERNAL);
            return;
        }

        // everything works
        setStatus(Status.SUCCESS_CREATED);
    }

    /**
     * we could have a PUT for adding choices, but
     * then must have a unique way to identify a choice so that we maintain idempotency.
     * I guess this means that we would have to allow clients to first store a 
     * choice so as to get a unique rowid, then be able to pass it here so that we can
     * add it if it is not already added, or ignore it otherwise.
     * 
     * this is an annoying design, for that means we allow someone to create
     * unattached Choices, and it is probably less of a headache to not allow that.
     * so perhaps allowing people to create polls then add choices after the fact is
     * not acceptable. though if I were a user, I'd want to be able to do that.
     * hence, think about this.
     */
}
