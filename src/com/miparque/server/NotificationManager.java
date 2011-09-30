package com.miparque.server;


import java.io.IOException;
import java.io.OutputStream;
import java.io.OutputStreamWriter;
import java.io.PrintWriter;
import java.util.HashMap;


import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gdata.util.ServiceException;
import com.google.gson.stream.JsonWriter;
import com.miparque.server.dao.Notification;
import com.miparque.server.database.DataAct;;

public class NotificationManager extends HttpServlet {
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
		
		PrintWriter print = response.getWriter();
		response.setContentType("application/json");
		response.setCharacterEncoding("UTF-8");
		//print.print("start");
		DataAct da = new DataAct();
		try {
			HashMap messages = da.getNotification();
		    JsonWriter writer = new JsonWriter(print);
			   
		     writer.setHtmlSafe(true);
		     writer.setIndent("    ");
		     writeMessagesArray(writer, messages);
		    // print.print(writer.toString());
		   //  response.getWriter().write(writer.toString());
		     
		     writer.close();
		   //  System.out.println(print.toString());
		     
		     
		} catch (ServiceException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	 
	 }	
	
	public void writeJsonStream(OutputStream out, HashMap messages) throws IOException {
	     JsonWriter writer = new JsonWriter(new OutputStreamWriter(out, "UTF-8"));
	   
	     writer.setHtmlSafe(true);
	     writer.setIndent("    ");
	     writeMessagesArray(writer, messages);
	     writer.toString();
	     writer.close();
	   }

	   public void writeMessagesArray(JsonWriter writer, HashMap messages) throws IOException {
	     writer.beginArray();
	     
	     for(int i = 0; i < messages.size(); i++){
	    	 writeMessage(writer, (Notification)messages.get(new Integer(i)));
	     }

	     writer.endArray();
	   }

	   public void writeMessage(JsonWriter writer, Notification message) throws IOException {
	     writer.beginObject();
	     writer.name("id").value(message.getId());
	     writer.name("title").value(message.getTitle());
	     writer.name("type").value(message.getType());
	     writer.name("lat").value(message.getLat());
	     writer.name("lon").value(message.getLon());
	     writer.name("description").value(message.getDescription());
	     writer.endObject();
	   }

}
