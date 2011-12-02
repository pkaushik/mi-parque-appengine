package com.miparque.server;


import java.io.IOException;
import java.io.OutputStream;
import java.io.OutputStreamWriter;
import java.io.PrintWriter;
import java.io.UnsupportedEncodingException;
import java.util.HashMap;


import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gdata.util.ServiceException;
import com.google.gson.stream.JsonWriter;
import com.miparque.server.dao.Notification;
import com.miparque.server.dao.NotificationAccountList;
import com.miparque.server.database.DataAct;;

public class UserNotificationManager extends HttpServlet {
	private static final long serialVersionUID = 1L;

    public void doGet(HttpServletRequest request, HttpServletResponse response)
    throws IOException, ServletException {
    	processRequest(request, response);
	}
	
	public void doPost(HttpServletRequest request, HttpServletResponse response)
	    throws IOException, ServletException {
		processRequest(request, response);
	}

	@SuppressWarnings("unchecked")
	public void processRequest(HttpServletRequest request, HttpServletResponse response)
      throws ServletException, IOException {
		
		String actionValue = request.getParameter("ac");
		DataAct da = new DataAct();
		
		try {
			if(actionValue.equalsIgnoreCase("1")){
				HashMap hm = da.getNewsAndAlertList();
			}
			else if(actionValue.equalsIgnoreCase("2")){
				HashMap hm = da.getVolunteerOppList();
			}
			else if(actionValue.equalsIgnoreCase("3")){
				HashMap hm = da.getEnvironmentList();
			}
		     
		} catch (ServiceException e) {

			e.printStackTrace();
		}
	 
	 }
	
	 private void sendNotification(HashMap map){
		 int i = 0;
		 while(i < map.size()){
			 NotificationAccountList na = (NotificationAccountList)map.get(i);
			 if(na.getMethod().equalsIgnoreCase("F")){
				/// NOT SURE YET 
			 }
			 if(na.getMethod().equalsIgnoreCase("E")){
				 EmailManager em = new EmailManager();
				 em.setSubject("New notification");
				 em.setBodyText("New notification is ready to view. please visit mi-parque.com");
				 em.setRecipientAddress(na.getEmail());
				 try {
					em.sendRichText();
				} catch (UnsupportedEncodingException e) {
					// TODO Auto-generated catch block
					e.printStackTrace();
				}
			 }
			 if(na.getMethod().equalsIgnoreCase("T")){
				 SMSManager sms = new SMSManager();
				 sms.setMessage("New notification is ready to view");
				 sms.setSMSNumber(na.getPhone());
				 sms.sendSMSToUser();
			 }
		 }
	 }


}
