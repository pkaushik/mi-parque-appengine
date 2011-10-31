package com.miparque.restlet;

import org.json.JSONArray;
import org.json.JSONException;
import org.restlet.data.CacheDirective;
import org.restlet.data.CharacterSet;
import org.restlet.data.MediaType;
import org.restlet.data.Status;
import org.restlet.ext.json.JsonRepresentation;
import org.restlet.representation.Representation;
import org.restlet.resource.Get;
import org.restlet.resource.Post;
import org.restlet.resource.ServerResource;

import org.json.JSONObject;


public class IdeaListResource extends ServerResource {
		
	@Get("json")
	public Representation represent() {   
		// query all ideas and stuff into json array
		JSONArray json = new JSONArray();	
			
		JsonRepresentation jr = new JsonRepresentation(json);
	    jr.setCharacterSet(CharacterSet.UTF_8);
	    // set cache expiry header to not cache API calls
		getResponse().getCacheDirectives().add(CacheDirective.noCache());
	    return jr;
	}
	
	@Post("json")
	public Representation acceptRepresentation(JsonRepresentation entity) {
		if (!entity.getMediaType().isCompatible(MediaType.APPLICATION_JSON)) {
			setStatus(Status.CLIENT_ERROR_UNSUPPORTED_MEDIA_TYPE);
			return null;
		}
		
		try {
			JSONObject json = entity.getJsonObject();
			
			// create new idea with new id if all fields are valid
			// persist
			// query
			
			JsonRepresentation jr = new JsonRepresentation(json);
		    jr.setCharacterSet(CharacterSet.UTF_8);
		    // set cache expiry header to not cache API calls
			getResponse().getCacheDirectives().add(CacheDirective.noCache());
		    return jr;
			
		} catch (JSONException e) {
			setStatus(Status.CLIENT_ERROR_BAD_REQUEST);
			return null;
		}
	}
}
