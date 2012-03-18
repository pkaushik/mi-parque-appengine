package com.miparque.restlet;


import org.json.JSONException;
import org.json.JSONObject;
import org.restlet.data.CacheDirective;
import org.restlet.data.CharacterSet;
import org.restlet.data.MediaType;
import org.restlet.data.Status;
import org.restlet.ext.json.JsonRepresentation;
import org.restlet.representation.Representation;
import org.restlet.resource.Get;
import org.restlet.resource.Put;
import org.restlet.resource.ServerResource;


public class IdeaResource extends ServerResource {
	
	@Get("json")
	public Representation represent() { 
		try {
			String id = (String) getRequest().getAttributes().get("id");
			// fetch idea with id = id from Fusiontable here
			
			JSONObject json = new JSONObject();
			// stuff it into the JSON Object json here
			
			
			// set cache expiry header to not cache API calls
			getResponse().getCacheDirectives().add(CacheDirective.noCache());

			JsonRepresentation jr = new JsonRepresentation(json);
			jr.setCharacterSet(CharacterSet.UTF_8);
			return jr;
		} catch (NumberFormatException e) {
			setStatus(Status.CLIENT_ERROR_BAD_REQUEST);
		}
		return null;
	}
	
	@Put
	public Representation acceptRepresentation(JsonRepresentation entity) {
		if (entity.getMediaType().isCompatible(MediaType.APPLICATION_JSON)) {
			String id = (String) getRequest().getAttributes().get("id");
			// fetch idea with id = id from Fusiontable here
			
			try {
				JSONObject json = entity.getJsonObject();
				
				// extract attributes like so...
				String title = json.getString("title");
				String description = json.getString("description");
				
				// update and persist
				
				// query json again from db
				
				// set cache expiry header to not cache API calls
				getResponse().getCacheDirectives().add(CacheDirective.noCache());
				JsonRepresentation jr = new JsonRepresentation(json);
				jr.setCharacterSet(CharacterSet.UTF_8);
				return jr;
			
			} catch (NumberFormatException e) {
				setStatus(Status.CLIENT_ERROR_BAD_REQUEST);
			} catch (JSONException e) {
				setStatus(Status.CLIENT_ERROR_BAD_REQUEST);
			}
		} else {
			setStatus(Status.CLIENT_ERROR_UNSUPPORTED_MEDIA_TYPE);
		}
		return null;
	}
}
