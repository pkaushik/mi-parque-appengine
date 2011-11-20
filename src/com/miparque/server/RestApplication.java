package com.miparque.server;

import org.restlet.Application;
import org.restlet.Restlet;
import org.restlet.routing.Router;

import com.miparque.restlet.AppStatusService;
import com.miparque.restlet.IdeaListResource;
import com.miparque.restlet.IdeaResource;
import com.miparque.restlet.PollResource;
import com.miparque.restlet.UserChoiceResource;
import com.miparque.restlet.UserChoicesResource;


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

        // URI for making a Choice in a Poll
        apiRouter.attach("/userchoice/{pollId}/{choiceId}/{userId}", UserChoiceResource.class);
        // URI for getting all choices for a user
        apiRouter.attach("/userchoices/{userId}", UserChoicesResource.class);

        setStatusService(new AppStatusService());

        return apiRouter;
	}
}
