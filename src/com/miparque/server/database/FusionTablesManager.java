package com.miparque.server.database;

import com.google.gdata.client.ClientLoginAccountType;
import com.google.gdata.client.GoogleService;
import com.google.gdata.client.Service.GDataRequest;
import com.google.gdata.client.Service.GDataRequest.RequestType;

import com.google.gdata.util.AuthenticationException;
import com.google.gdata.util.ContentType;
import com.google.gdata.util.ServiceException;
import com.miparque.server.dao.Notification;
import com.miparque.server.dao.Idea;
import com.miparque.server.dao.NotificationAccountList;
import com.miparque.server.ResourceNotFoundException;

import java.io.IOException;
import java.io.OutputStreamWriter;
import java.net.URL;
import java.net.URLEncoder;
import java.util.HashMap;
import java.util.Map;
import java.util.Scanner;
import java.util.logging.Logger;
import java.util.regex.MatchResult;
import java.util.regex.Pattern;
import java.util.List;
import java.util.ArrayList;
import java.io.InputStreamReader;
import java.io.BufferedReader;

public class FusionTablesManager {
    public static Logger log = Logger.getLogger(FusionTablesManager.class.getName());
  private static final Pattern CSV_VALUE_PATTERN =
	      Pattern.compile("([^,\\r\\n\"]*|\"(([^\"]*\"\")*[^\"]*)\")(,|\\r?\\n)");
  private static final String email="XXXXXX";
  private static final String password="XXXXXX";
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

  

  /**
   * Runs an insert command and returns the rowids if any were found in the response
   * 
   * @param updateQuery sql insert statement that is valid for fusiontables
   * @return list of rowids returned from the FusionTable service
   * @throws IOException
   * @throws ServiceException
   */
  public List<String> runInsert(String updateQuery) throws IOException,ServiceException {
      log.info(updateQuery);
      URL url = new URL(SERVICE_URL);
      GDataRequest request = service.getRequestFactory().getRequest(RequestType.INSERT, url,
              new ContentType("application/x-www-form-urlencoded"));
      OutputStreamWriter writer = new OutputStreamWriter(request.getRequestStream());
      writer.append("sql=" + URLEncoder.encode(updateQuery, "UTF-8"));
      writer.flush();
      request.execute();

      List<String> rowids = new ArrayList<String>();
      Scanner scanner = new Scanner(request.getResponseStream(),"UTF-8");
      scanner.useDelimiter(System.getProperty("line.separator"));
      while (scanner.hasNext()) {
          String token = scanner.next();
          if (token.matches("\\d+")) {
              rowids.add(token);
          }
      }
      return rowids;
  }

//  public void runInsert(String updateQuery) throws IOException,ServiceException {
//	    URL url = new URL(SERVICE_URL);
//	    GDataRequest request = service.getRequestFactory().getRequest(
//	        RequestType.INSERT, url,
//	        new ContentType("application/x-www-form-urlencoded"));
//	    OutputStreamWriter writer =
//	        new OutputStreamWriter(request.getRequestStream());
//	    writer.append("sql=" + URLEncoder.encode(updateQuery, "UTF-8"));
//	    writer.flush();
//
//	    request.execute();
//
//	  }
  
  public void runUpdate(String updateQuery) throws IOException,ServiceException {
      log.info(updateQuery);
      URL url = new URL(SERVICE_URL);
      GDataRequest request = service.getRequestFactory().getRequest(RequestType.UPDATE, url,
              new ContentType("application/x-www-form-urlencoded"));
      OutputStreamWriter writer = new OutputStreamWriter(request.getRequestStream());
      writer.append("sql=" + URLEncoder.encode(updateQuery, "UTF-8"));
      writer.flush();
      request.execute();
  }
  

  /**
   * Runs select request
   * 
   * @param selectQuery sql select statement that is valid for fusiontables
   * @return list of maps lists of strings of each column
   * @throws IOException
   * @throws ServiceException
   */
  public List<Map<String,String>> runSelect(String selectQuery) throws IOException, ServiceException {
    log.info(selectQuery);
    //URL url = new URL(SERVICE_URL + "?hdrs=false&sql=" + URLEncoder.encode(selectQuery, "UTF-8"));
    URL url = new URL(SERVICE_URL + "?sql=" + URLEncoder.encode(selectQuery, "UTF-8"));
    GDataRequest request = service.getRequestFactory().getRequest(RequestType.QUERY, url, ContentType.TEXT_PLAIN);
    request.execute();
    // stringify, mappify, return
    StringBuilder sb = new StringBuilder();
    BufferedReader reader = new BufferedReader(new InputStreamReader(request.getResponseStream()));
    while (true) {
        String line = reader.readLine();
        if (line == null) {
            break;
        } else {
            sb.append(line);
            sb.append("\n");
        }
    }
    return parseResponse(sb.toString());
  }
    /**
     * see https://github.com/ddewaele/FusionTablesJ2SE
     * see src/main/java/com/ecs/fusiontables/sample/CsvParser.java
     * Parses the response coming back from the API call (CSV format),
     * and converts it into a list of maps. (intermediary format).
     */
    private List<Map<String, String>> parseResponse(String response) {
        Scanner scanner = new Scanner(response);
        boolean foundHeader = false;
        List<String> keys = new ArrayList<String>();
        List<Map<String, String>> entries = new ArrayList<Map<String, String>>();
        Map<String, String> lineItem = new HashMap<String, String>();

        int i = 0;
        while (scanner.hasNextLine()) {
            i++;
            scanner.findWithinHorizon(CSV_VALUE_PATTERN, 0);
            MatchResult match = scanner.match();
            String quotedString = match.group(2);
            String decoded = quotedString == null ? match.group(1)
                    : quotedString.replaceAll("\"\"", "\"");
            if (!foundHeader) {
                keys.add(decoded);
            } else {
                lineItem.put(keys.get(i - 1), decoded);
            }
            if (!match.group(4).equals(",")) {
                i = 0;
                if (lineItem.size() != 0) {
                    entries.add(lineItem);
                }
                lineItem = new HashMap<String, String>();
                foundHeader = true;
            }
        }
        return entries;
    }

  
  public String runSelectOneField(String selectQuery, String parm) throws IOException,ServiceException {
	String rst = "";  
	URL url = new URL(SERVICE_URL + "?sql=" + URLEncoder.encode(selectQuery, "UTF-8"));
	GDataRequest request = service.getRequestFactory().getRequest(
	        RequestType.QUERY, url, ContentType.TEXT_PLAIN);
	
	request.execute();
	
	Scanner scanner = new Scanner(request.getResponseStream(),"UTF-8");
	
	while (scanner.hasNextLine()) {
	    scanner.findWithinHorizon(CSV_VALUE_PATTERN, 0);
	    MatchResult match = scanner.match();
	    String quotedString = match.group(2);
	    String decoded = quotedString == null ? match.group(1)
	        : quotedString.replaceAll("\"\"", "\"");
	    System.out.print("|" + decoded);
	    rst = rst +", " +decoded;
	    if (!match.group(4).equals(",")) {
	      System.out.println("|");
	    }
	  }
	
	rst = rst.replace(parm, "");
  	rst = rst.replace(",", "");
  	rst = rst.replace(" ", "");
  	
	return rst;
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

  
  public HashMap runSelectIdea(String selectQuery) throws IOException,
  ServiceException {
	URL url = new URL(SERVICE_URL + "?sql=" + URLEncoder.encode(selectQuery, "UTF-8"));
		
	GDataRequest request = service.getRequestFactory().getRequest(
	        RequestType.QUERY, url, ContentType.TEXT_PLAIN);
	
	request.execute();

	Scanner scanner = new Scanner(request.getResponseStream(),"UTF-8");
	int index = 0;
	Idea idea = new Idea();
	HashMap dataset = new HashMap();
	boolean reset = false;
	int entry = 0;
	
	//id,title,description,status,facebookId,created
	while (scanner.hasNextLine()) {
	    scanner.findWithinHorizon(CSV_VALUE_PATTERN, 0);
	    MatchResult match = scanner.match();
	    String quotedString = match.group(2);
	    String decoded = quotedString == null ? match.group(1) : quotedString.replaceAll("\"\"", "\"");
	    if(decoded.equalsIgnoreCase("id") || decoded.equalsIgnoreCase("title")|| decoded.equalsIgnoreCase("description")|| decoded.equalsIgnoreCase("status")|| decoded.equalsIgnoreCase("facebookId") || decoded.equalsIgnoreCase("created")|| decoded.equalsIgnoreCase("imgURL")){
	    	idea = null;}
	    else{
	    	if(index == 0){
	    		if(reset){
	    			idea = new Idea();}
	    			idea.setId(Integer.parseInt(decoded));
	    	}
	    	if(index == 1){
	    		idea.setTitle(decoded);
	    	}
	    	if(index == 2){
	    		idea.setDescription(decoded);
	    	}
	    	if(index == 3){
	    		idea.setStatus(decoded);
	    	}
	    	if(index == 4){
	    		idea.setFacebookID(decoded);
	    	}
	    	if(index == 5){
	    		idea.setDateCreated(decoded);
	    	}
	    	if(index == 6){
	    		idea.setImgURL(decoded);
	    	}
	    }
	   
	    if (!match.group(4).equals(",")) {
	    	index = 0;
	    	reset = true;
	    	if(idea != null){
	    		dataset.put(new Integer(entry), idea);
	    		entry = entry + 1;
	    	}
	    }
	    else{
	    	index = index + 1;
	    }
	}
	return dataset;
  }
	  

  public HashMap runSelectNotificationList(String selectQuery) throws IOException,
  ServiceException {
	URL url = new URL(SERVICE_URL + "?sql=" + URLEncoder.encode(selectQuery, "UTF-8"));
		
	GDataRequest request = service.getRequestFactory().getRequest(
	        RequestType.QUERY, url, ContentType.TEXT_PLAIN);
	
	request.execute();

	Scanner scanner = new Scanner(request.getResponseStream(),"UTF-8");
	int index = 0;
	NotificationAccountList  nc = new NotificationAccountList();
	HashMap dataset = new HashMap();
	boolean reset = false;
	int entry = 0;
	//facebookId, oauthToken, name, email, language, method, phone 
	while (scanner.hasNextLine()) {
	    scanner.findWithinHorizon(CSV_VALUE_PATTERN, 0);
	    MatchResult match = scanner.match();
	    String quotedString = match.group(2);
	    String decoded = quotedString == null ? match.group(1) : quotedString.replaceAll("\"\"", "\"");
	    if(decoded.equalsIgnoreCase("facebookId") || decoded.equalsIgnoreCase("oauthToken")|| decoded.equalsIgnoreCase("name")|| decoded.equalsIgnoreCase("email")|| decoded.equalsIgnoreCase("language")|| decoded.equalsIgnoreCase("method") || decoded.equalsIgnoreCase("phone")){
	    	nc = null;}
	    else{
	    	if(index == 0){
	    		if(reset){
	    			nc = new NotificationAccountList();}
	    		nc.setFacebookId(decoded);
	    	}
	    	if(index == 1){
	    		nc.setOauthToken(decoded);
	    	}
	    	if(index == 2){
	    		nc.setName(decoded);
	    	}
	    	if(index == 3){
	    		nc.setEmail(decoded);
	    	}
	    	if(index == 4){
	    		nc.setLanguage(decoded);
	    	}
	    	if(index == 5){
	    		nc.setMethod(decoded);
	    	}
	    	if(index == 6){
	    		nc.setPhone(decoded);
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