package com.miparque.server.database;
import com.google.gdata.client.ClientLoginAccountType;
import com.google.gdata.client.GoogleService;
import com.google.gdata.client.Service.GDataRequest;
import com.google.gdata.client.Service.GDataRequest.RequestType;

import com.google.gdata.util.AuthenticationException;
import com.google.gdata.util.ContentType;
import com.google.gdata.util.ServiceException;

import java.io.IOException;
import java.io.OutputStreamWriter;
import java.net.URL;
import java.net.URLEncoder;
import java.util.HashMap;
import java.util.Map;
import java.util.Scanner;
import java.util.regex.MatchResult;
import java.util.regex.Pattern;


public class FusionTablesManager {

  private static final String email="MiparqueLV@gmail.com";
  private static final String password="apps4change!";
  private static final String SERVICE_URL =
      "https://www.google.com/fusiontables/api/query";

  private GoogleService service;

  public FusionTablesManager(GoogleService service) {
	    this.service = service;
  }

  public FusionTablesManager()
      throws AuthenticationException {
    service = new GoogleService("fusiontables", "fusiontables.ApiExample");
    service.setUserCredentials(email, password, ClientLoginAccountType.GOOGLE);
  }

  
  public FusionTablesManager(String authToken) throws AuthenticationException {
    service = new GoogleService("fusiontables", "fusiontables.ApiExample");
    service.setUserToken(authToken);
  }


  public void runInsert(String updateQuery) throws IOException,ServiceException {
    URL url = new URL(SERVICE_URL);
    GDataRequest request = service.getRequestFactory().getRequest(
        RequestType.INSERT, url,
        new ContentType("application/x-www-form-urlencoded"));
    OutputStreamWriter writer =
        new OutputStreamWriter(request.getRequestStream());
    writer.append("sql=" + URLEncoder.encode(updateQuery, "UTF-8"));
    writer.flush();

    request.execute();

  }


	  

}