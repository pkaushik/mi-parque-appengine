package com.miparque.server;


import java.io.IOException;
import java.io.PrintWriter;
import java.net.URL;
import java.util.Enumeration;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.commons.codec.DecoderException;
import org.apache.commons.codec.binary.Base64;

import com.google.appengine.api.urlfetch.HTTPHeader;
import com.google.appengine.api.urlfetch.HTTPRequest;


public class EmailInvoker extends HttpServlet {
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
    throws ServletException, IOException{
//		
//		PrintWriter out = response.getWriter();
//		response.setContentType("text/plain");
//		
//
//		try {
//			byte[] test = (byte[]) new Base64().decode(request.getHeader("Authorization"));
//			System.out.println("===="+test.toString());
//			System.out.println("===="+new String(test, "UTF-8"));
//		} catch (DecoderException e) {
//			// TODO Auto-generated catch block
//			e.printStackTrace();
//		}
//						
		String title = request.getParameter("title");
		String subject =request.getParameter("subject");
		String bodyText = request.getParameter("bodyText");
		String recipientAddress = request.getParameter("adr");
		
		EmailManager emailMgr = new EmailManager();
		
		emailMgr.setBodyText(bodyText);
		emailMgr.setRecipientAddress(recipientAddress);
		emailMgr.setSubject(subject);
		emailMgr.setTitle(title);
		
		emailMgr.sendPlainText();
	 
	  }	
}
