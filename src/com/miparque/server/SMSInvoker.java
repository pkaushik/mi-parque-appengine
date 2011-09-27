package com.miparque.server;


import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;


public class SMSInvoker extends HttpServlet {
	private static final long serialVersionUID = 1L;

    public void doGet(HttpServletRequest request, HttpServletResponse response)
    throws IOException, ServletException {
    	processRequest(request, response);
	}
	
	public void doPost(HttpServletRequest request, HttpServletResponse response)
	    throws IOException, ServletException {
		processRequest(request, response);
	}
	
	public void processRequest(HttpServletRequest request, HttpServletResponse response)
      throws ServletException, IOException {
		
		String msg = request.getParameter("msg");
		String number =request.getParameter("num");
		
		if(msg!= null && number != null){
			if(!msg.isEmpty() && !number.isEmpty()){
				SMSManager sms = new SMSManager();
				sms.setMessage(msg);
				sms.setSMSNumber(number);
				
				sms.sendSMSToUser();
			}
		}
	 
	 }	
}
