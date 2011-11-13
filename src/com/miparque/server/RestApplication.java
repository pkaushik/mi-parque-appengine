package com.miparque.server;

import org.restlet.Application;
import org.restlet.Restlet;
import org.restlet.routing.Router;

import com.miparque.restlet.IdeaListResource;
import com.miparque.restlet.IdeaResource;
import com.miparque.restlet.PollResource;


public class RestApplication extends Application {
	
	@Override
	public synchronized Restlet createInboundRoot() {
	    Router apiRouter = new Router(getContext());
        
        // URI to read summary info about all ideas (GET) and to create a new idea (POST)
        apiRouter.attach("/ideas", IdeaListResource.class);
	    
	    // URI to read information about a specific idea (GET) and modify a specific idea (PUT)
        apiRouter.attach("/ideas/{id}", IdeaResource.class);

        // URIs for Mi Voto Polls
        apiRouter.attach("/voto/{id}", PollResource.class);
        apiRouter.attach("/voto", PollResource.class);

        return apiRouter;
	}
}
