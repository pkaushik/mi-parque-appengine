package com.miparque.restlet;

import java.net.URLEncoder;

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

import com.miparque.server.ResourceNotFoundException;
import com.miparque.server.RestApplication;
import com.miparque.server.dao.Poll;
import com.miparque.server.database.PollFtDao;

/**
 * Resource representation of Polls/Voto. Attached to the router in {@link RestApplication} 
 * <li>
 * <ul>POST /voto
 * <ul>GET /voto/{id}
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
     * <pre>
     * {
     *  "id":"203",
     *  "og_image_url":"",
     *  "title":"More Park Names",
     *  "description":"What should we name the park? Based on name submissions we are now voting on the top 3!",
     *  "choices":[
     *    {
     *      "id":"5",
     *      "og_image_url":"",
     *      "detail":"labor organizer, farm worker and environmental justice advocate",
     *      "index":"0",
     *      "choice":"Parque Marentes",
     *      "og_type":"poll",
     *      "og_url":"parque-marentes"
     *   },
     *  ],
     *  "active":false,
     *  "og_type":"unassigned",
     *  "multiple":false,
     *  "og_url":"more-park-names"
     * }
     * </pre>
     * 
     * @throws JSONException 
     * @throws ResourceNotFoundException 
     */
    @Get("json")
    public Representation represent() throws ResourceNotFoundException, JSONException {
        getResponse().getCacheDirectives().add(CacheDirective.noCache());

        String id = (String) getRequest().getAttributes().get("id");
        JSONObject poll = pollDao.getPoll(id);

        JsonRepresentation jr = new JsonRepresentation(poll);
        jr.setCharacterSet(CharacterSet.UTF_8);

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
     * @throws JSONException 
     * 
     */
    @Post
    public Representation acceptRepresentation(JsonRepresentation entity) throws JSONException {
        if (! entity.getMediaType().isCompatible(MediaType.APPLICATION_JSON)) {
            setStatus(Status.CLIENT_ERROR_UNSUPPORTED_MEDIA_TYPE);
            return new JsonRepresentation(new JSONObject());
        }

        Poll poll = new Poll();
        try {
            // allow required elements to blow up when they are not found
            JSONObject json = entity.getJsonObject();
            poll = PollJsonAdapter.fromJson(json);
        } catch (JSONException e) {
            e.printStackTrace();
            setStatus(Status.CLIENT_ERROR_BAD_REQUEST);
            return jsonifyException(e);
        }

        String rowid = "";
        try {
            rowid = pollDao.createPoll(poll);
        } catch (Exception e) {
            // catch already exists and return 4xx
            // catch some service exception and return 500
            e.printStackTrace();
            setStatus(Status.SERVER_ERROR_INTERNAL);
            return jsonifyException(e);
        }

        // everything works
        setStatus(Status.SUCCESS_CREATED);
        JSONObject json = new JSONObject();
        json.putOpt("rowid", rowid);
        JsonRepresentation jr = new JsonRepresentation(json);
        jr.setCharacterSet(CharacterSet.UTF_8);
        return jr;
    }

    private JsonRepresentation jsonifyException(Exception e) {
        JSONObject json = new JSONObject();
        try {
            StringBuffer sb = new StringBuffer(e.getMessage());
            sb.append("\n");
            for (StackTraceElement ste : e.getStackTrace()) {
                sb.append(ste.toString());
                sb.append("\n");
            }
            String msg = URLEncoder.encode(sb.toString(), "UTF-8");
            json.put("error", msg);
        } catch (Exception e1) {
            // TODO Auto-generated catch block
            e1.printStackTrace();
        }
        JsonRepresentation errorJson = new JsonRepresentation(json);
        errorJson.setCharacterSet(CharacterSet.UTF_8);
        return errorJson;
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
