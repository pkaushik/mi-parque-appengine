package com.miparque.restlet;

import java.net.URLEncoder;

import org.json.JSONException;
import org.json.JSONObject;
import org.restlet.Request;
import org.restlet.Response;
import org.restlet.data.CharacterSet;
import org.restlet.data.Status;
import org.restlet.ext.json.JsonRepresentation;
import org.restlet.service.StatusService;

import com.miparque.server.ResourceNotFoundException;

public class AppStatusService extends StatusService {

    public Status getStatus(Throwable throwable, Request request, Response response) {
        if (throwable instanceof ResourceNotFoundException) {
            return new Status(Status.CLIENT_ERROR_NOT_FOUND, throwable);
        }
        if (throwable instanceof IllegalArgumentException) {
            return new Status(Status.CLIENT_ERROR_BAD_REQUEST, throwable);
        }
        if (throwable instanceof JSONException) {
            return new Status(Status.CLIENT_ERROR_BAD_REQUEST, throwable);
        }
        return new Status(Status.SERVER_ERROR_INTERNAL, throwable);
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
}
