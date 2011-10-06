package com.miparque.server.database;

import com.google.gdata.client.ClientLoginAccountType;
import com.google.gdata.client.GoogleService;
import com.google.gdata.client.Service.GDataRequest;
import com.google.gdata.client.Service.GDataRequest.RequestType;

import com.google.gdata.util.AuthenticationException;
import com.google.gdata.util.ContentType;
import com.google.gdata.util.ServiceException;
import com.miparque.server.dao.Notification;

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
  private static final Pattern CSV_VALUE_PATTERN =
	      Pattern.compile("([^,\\r\\n\"]*|\"(([^\"]*\"\")*[^\"]*)\")(,|\\r?\\n)");
  private static final String email="liliann.v.lucas@gmail.com";
  private static final String password="iop!2taa";
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

  public HashMap runSelectNotification(String selectQuery) throws IOException,
  ServiceException {
	//URL url = new URL(SERVICE_URL);
	
	URL url = new URL(SERVICE_URL + "?sql=" + URLEncoder.encode(selectQuery, "UTF-8"));
		
	GDataRequest request = service.getRequestFactory().getRequest(
	        RequestType.QUERY, url, ContentType.TEXT_PLAIN);
	
	request.execute();

	Scanner scanner = new Scanner(request.getResponseStream(),"UTF-8");
	int index = 0;
	Notification  nc = new Notification();
	HashMap dataset = new HashMap();
	boolean reset = false;
	int entry = 0;
	while (scanner.hasNextLine()) {
	    scanner.findWithinHorizon(CSV_VALUE_PATTERN, 0);
	    MatchResult match = scanner.match();
	    String quotedString = match.group(2);
	    String decoded = quotedString == null ? match.group(1) : quotedString.replaceAll("\"\"", "\"");
	    if(decoded.equalsIgnoreCase("id") || decoded.equalsIgnoreCase("title")|| decoded.equalsIgnoreCase("type")|| decoded.equalsIgnoreCase("description")|| decoded.equalsIgnoreCase("lat")|| decoded.equalsIgnoreCase("lon") || decoded.equalsIgnoreCase("imgURL")){
	    	nc = null;}
	    else{
	    	if(index == 0){
	    		if(reset){
	    			nc = new Notification();}
	    		nc.setId(Integer.parseInt(decoded));
	    	}
	    	if(index == 1){
	    		nc.setTitle(decoded);
	    	}
	    	if(index == 2){
	    		nc.setType(decoded);
	    	}
	    	if(index == 3){
	    		nc.setDescription(decoded);
	    	}
	    	if(index == 4){
	    		nc.setLat(decoded);
	    	}
	    	if(index == 5){
	    		nc.setLon(decoded);
	    	}
	    	if(index == 6){
	    		nc.setImgURL(decoded);
	    	}
	    }
	   
	    if (!match.group(4).equals(",")) {
	    	index = 0;
	    	reset = true;
	    	if(nc != null){
	    		dataset.put(new Integer(entry), nc);
	    		entry = entry + 1;
	    	}
	    }
	    else{
	    	index = index + 1;
	    }
	}
	return dataset;
  }

	  

}