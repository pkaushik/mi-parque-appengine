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

import org.restlet.data.MediaType;
import org.restlet.resource.ServerResource;

import com.google.gdata.util.ServiceException;
import com.google.gson.stream.JsonWriter;
import com.miparque.server.dao.Idea;
import com.miparque.server.database.DataAct;


public class IdeaGet extends HttpServlet{
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
		DataAct da = new DataAct();
//		0 = submitted, required to be reviewed and to be approved
//		1 = approved
//		2 = rejected
//		3 = archived/inactive status
		try {
			PrintWriter print = response.getWriter();
			response.setContentType("application/json");
			response.setCharacterEncoding("UTF-8");
			String filter = request.getParameter("statusFilter");
			//filter = "1";
			if(filter == null){
				filter = "all";
			}
			
			HashMap ideas = da.getIdeas(filter);
		    JsonWriter writer = new JsonWriter(print);
			   
		     writer.setHtmlSafe(false);
		     writer.setIndent("    ");
		     writeMessagesArray(writer, ideas);
		     writer.close();		     
		     
		} catch (ServiceException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
	
	public void writeJsonStream(OutputStream out, HashMap messages) throws IOException {
	     JsonWriter writer = new JsonWriter(new OutputStreamWriter(out, "UTF-8"));
	   
	     writer.setHtmlSafe(false);
	     writer.setIndent("    ");
	     writeMessagesArray(writer, messages);
	     writer.toString();
	     writer.close();
	   }

	   public void writeMessagesArray(JsonWriter writer, HashMap messages) throws IOException {
	     writer.beginArray();
	     
	     for(int i = 0; i < messages.size(); i++){
	    	 writeMessage(writer, (Idea)messages.get(new Integer(i)));
	     }

	     writer.endArray();
	   }

	   public void writeMessage(JsonWriter writer, Idea message) throws IOException {
	     writer.beginObject();
	     writer.name("id").value(message.getId());
	     writer.name("title").value(message.getTitle());
	     writer.name("description").value(message.getDescription());
	     writer.name("imgURL").value(message.getImgURL());
	     writer.name("status").value(message.getStatus());
	     writer.name("facebookID").value(message.getFacebookID());
	     writer.name("dateCreated").value(message.getDateCreated());
	     
	     writer.endObject();
	   }

}
