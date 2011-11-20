package com.miparque.restlet;

import java.util.List;

import org.json.JSONException;
import org.json.JSONObject;
import org.restlet.data.CacheDirective;
import org.restlet.data.CharacterSet;
import org.restlet.data.Status;
import org.restlet.ext.json.JsonRepresentation;
import org.restlet.representation.Representation;
import org.restlet.resource.Get;
import org.restlet.resource.ServerResource;

import com.miparque.server.ResourceNotFoundException;
import com.miparque.server.database.PollFtDao;

public class PollListResource extends ServerResource {
    // pretend like we have data injection or whatever and we get different impls based on our backing data store
    private PollFtDao pollDao = new PollFtDao();

    @Get("json")
    public Representation represent() throws ResourceNotFoundException, JSONException {
        getResponse().getCacheDirectives().add(CacheDirective.noCache());

        List<JSONObject> polls = pollDao.getAllJson();
        JSONObject json = new JSONObject();
        json.put("votos", polls);

        JsonRepresentation jr = new JsonRepresentation(json);
        jr.setCharacterSet(CharacterSet.UTF_8);

        setStatus(Status.SUCCESS_OK);
        return jr;
    }
}
