package com.miparque.restlet;

import org.restlet.Request;
import org.restlet.Response;
import org.restlet.data.Status;
import org.restlet.service.StatusService;

import com.miparque.server.ResourceNotFoundException;

public class AppStatusService extends StatusService {

    public Status getStatus(Throwable throwable, Request request, Response response) {
        if (throwable instanceof ResourceNotFoundException) {
            return Status.CLIENT_ERROR_NOT_FOUND;
        }
        return Status.SERVER_ERROR_INTERNAL;
    }
}
