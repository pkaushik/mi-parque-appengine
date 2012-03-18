package com.miparque.server;


import java.io.IOException;
import java.io.PrintWriter;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.StringTokenizer;


import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import org.apache.commons.codec.binary.Base64;

import com.google.appengine.repackaged.org.json.JSONException;
import com.google.appengine.repackaged.org.json.JSONObject;
import com.google.gdata.util.ServiceException;
import com.miparque.server.dao.UserAccount;
import com.miparque.server.database.DataAct;

public class UserRegistration extends HttpServlet {
	private static final long serialVersionUID = 1L;
	
    public void doGet(HttpServletRequest request, HttpServletResponse response)
    throws IOException, ServletException {
    	processRequest(request, response);
	}
	
	public void doPost(HttpServletRequest request, HttpServletResponse response)
	    throws IOException, ServletException {
		processRequest(request, response);
	}

	public void processRequest(HttpServletRequest req, HttpServletResponse resp)
    throws ServletException, IOException{
//		PrintWriter out = resp.getWriter();
//	    resp.setContentType("text/plain");
	    
		String signedReq = req.getParameter("signed_request");
		if(signedReq == null)
		{
		    System.out.println("ERROR: Unable to retrieve signed_request parameter");
		   
		}
		else{    
	        int count = 0;
	        String payload = null;
	        
	        //The parameter contains encoded signature and payload separated by Ô.Õ
	        StringTokenizer st = new StringTokenizer(signedReq, ".");    
	        
	        //Retrieve payload (Note: encoded signature is used for internal verification and it is optional)
	        while (st.hasMoreTokens())
	        {
	            if(count == 1)
	            {
	                payload = st.nextToken();
	                break;
	            }
	            else
	                st.nextToken();           

	            count++;
	        }

	        //Initialize Base64 decoder
	        Base64 dec = new Base64();
	 
	        //Replace special character in payload as indicated by FB
	        payload = payload.replace("-", "+").replace("_", "/").trim();
	        
	        //Decode payload
	        try 
	        {	
	        	byte[] decodedPayload = dec.decode(payload.getBytes());
	            payload = new String(decodedPayload, "UTF8");
//	            out.println("payload");
//	            out.println(payload);
	        } 
	        catch (IOException e) 
	        {
	            System.out.println("ERROR: Unable to perform Base64 Decode");
	        }

	        //JSON Decode - payload
	        try 
	        {
	        	UserAccount acct = new UserAccount();
	            JSONObject payloadObject = new JSONObject(payload);
	            String facebookId = "" + payloadObject.get("user_id"); //Retrieve user ID
	            String oauthToken = "" + payloadObject.get("oauth_token"); //Retrieve oauth token
       
	            acct.setFacebookId(facebookId);
	            acct.setOauthToken(oauthToken);
	            
	            String regData = "" + payloadObject.get("registration"); 
	            
	            JSONObject payloadObject2 = new JSONObject(regData);
	            String name = "" + payloadObject2.get("name");
	            String email = "" + payloadObject2.get("email");
	            String language = "" + payloadObject2.get("language");
	            String method = "" + payloadObject2.get("method");
	            String phone = "" + payloadObject2.get("phone");     
	            String loc = "" + payloadObject2.get("location");  
	            String send1 = "" + payloadObject2.get("send-1");  
	            String send2 = "" + payloadObject2.get("send-2");  
	            String send3 = "" + payloadObject2.get("send-3");  
	            
	            acct.setName(name);
	            acct.setEmail(email);
	            acct.setLanguage(language);
	            acct.setMethod(method);
	            acct.setPhone(phone);
	            acct.setSend1(send1);
	            acct.setSend2(send2);
	            acct.setSend3(send3);
	            
	            
	            JSONObject payloadObject3 = new JSONObject(loc);
	            String locD = "" + payloadObject3.get("name");

	            acct.setLocation(locD);
	            acct.setCreated(getCurrentDateTime());
	            
	            DataAct da = new DataAct();
	            da.insertNewUser(acct);
	        } 
	        catch (JSONException e) 
	        {
	        	e.printStackTrace();
	        	//out.println("JSON Decode - payload Error");
	        } 
	        catch (ServiceException e) {
				// TODO Auto-generated catch block
	        	// Tout.println("ServiceException Error");
				e.printStackTrace();
			}
	        catch (Exception e) {
				// TODO Auto-generated catch block
	        	// Tout.println("Exception Error");
				e.printStackTrace();
			}
	        
		}

		resp.sendRedirect("index.html");
		    
	}
	
	private String getCurrentDateTime(){
        String created = ""+ DateFormat.getDateTimeInstance(DateFormat.LONG, DateFormat.LONG).format(new Date());               
        return created;
	}
}
