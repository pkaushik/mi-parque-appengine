package com.miparque.server;

import org.restlet.Application;
import org.restlet.Restlet;
import org.restlet.routing.Router;

import com.miparque.restlet.AppStatusService;
import com.miparque.restlet.IdeaListResource;
import com.miparque.restlet.IdeaResource;
import com.miparque.restlet.PollListResource;
import com.miparque.restlet.PollResource;
import com.miparque.restlet.VotoHistoryListResource;
import com.miparque.restlet.VotoHistoryResource;


public class RestApplication extends Application {
	
	@Override
	public synchronized Restlet createInboundRoot() {
	    Router apiRouter = new Router(getContext());
        
        // URI to read summary info about all ideas (GET) and to create a new idea (POST)
        apiRouter.attach("/ideas", IdeaListResource.class);
	    
	    // URI to read information about a specific idea (GET) and modify a specific idea (PUT)
        apiRouter.attach("/ideas/{id}", IdeaResource.class);

        // URI to get information about a specific poll (GET)
        apiRouter.attach("/voto/{id}", PollResource.class);
        // URI to add a new poll (POST)
        apiRouter.attach("/voto", PollResource.class);
        // URI to get information about all polls (GET)
        apiRouter.attach("/votos", PollListResource.class);

        // URI for recording the choice of a user in a poll
        apiRouter.attach("/historia/voto/{pollId}/{choiceId}/{userId}", VotoHistoryResource.class);
        // URI for getting the history of all votes of a user
        apiRouter.attach("/historia/votos/{userId}", VotoHistoryListResource.class);

        setStatusService(new AppStatusService());

        return apiRouter;
	}
}
