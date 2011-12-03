package com.miparque.server;


import java.io.IOException;

import java.io.PrintWriter;
import java.util.HashMap;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import com.miparque.server.dao.Idea;
import com.miparque.server.database.DataAct;


public class IdeaDetailGet extends HttpServlet{
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
		try {
			String id = request.getParameter("id");
			String filter = "1";
			
			if(!id.isEmpty() && id != null){
				HashMap ideas = da.getIdeas(filter);
				Idea selectedIdea = findIdea(id, ideas);
				
				response.setContentType("text/html");
			    PrintWriter out = response.getWriter();
			    out.println(buildHTML(selectedIdea));
			}
			else{
				response.sendRedirect("http://mi-parque.appspot.com/");
			}
		     
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
	
	
	public String buildHTML(Idea selectedIdea){
		StringBuffer sb = new StringBuffer();

	    sb = sb.append("<!DOCTYPE HTML>\n");
		sb = sb.append("<HTML xmlns=\"http://www.w3.org/1999/xhtml\"  xmlns:fb=\"http://www.facebook.com/2008/fbml\" xmlns:og=\"http://opengraph.org/schema/\">\n"); 
		sb = sb.append("<HEAD><TITLE>"+ selectedIdea.getTitle() +"</TITLE>");
		sb = sb.append("<link rel=\"shortcut icon\" href=\"http://mi-parque.appspot.com/images/favicon.ico\" />\n");
		sb = sb.append("<meta property=\"og:title\" content=\""+selectedIdea.getTitle()+"\" />\n");
		sb = sb.append("<meta property=\"og:site_name\" content=\"Mi Parque - Little Village\" />\n");
		sb = sb.append("<meta property=\"fb:app_id\" content=\"281417341887864\">\n");
		sb = sb.append("<meta property=\"og:url\" content=\"http://mi-parque.appspot.com/idea/idea/detail?id="+selectedIdea.getId()+"\">\n");
		sb = sb.append("<meta property=\"og:description\" content=\""+selectedIdea.getDescription()+"\">\n");
		sb = sb.append("<meta property=\"og:image\" content=\"http://mi-parque.appspot.com/images/logo_bottom.png\">\n");
		sb = sb.append("<link rel=\"stylesheet\" href=\"http://mi-parque.appspot.com/lib/jquery/jquery.mobile/jquery.mobile.min.css\" />\n");
		sb = sb.append("<link rel=\"stylesheet\" href=\"http://mi-parque.appspot.com/css/main.css\" />\n");
		sb = sb.append("</HEAD>\n");
		sb = sb.append("<BODY>\n");
		sb = sb.append("<div id=\"fb-root\"></div>\n");
		sb = sb.append("<script>(function(d, s, id) {\n");
		sb = sb.append("var js, fjs = d.getElementsByTagName(s)[0];\n");
		sb = sb.append("if (d.getElementById(id)) {return;}\n");
		sb = sb.append("js = d.createElement(s); js.id = id;\n");	
		sb = sb.append("js.src = \"http://connect.facebook.net/es_MX/all.js#xfbml=1\";\n");		  
		sb = sb.append("fjs.parentNode.insertBefore(js, fjs);\n");		  
		sb = sb.append("}(document, 'script', 'facebook-jssdk'));</script>\n");		  
		sb = sb.append("<div data-role=\"page\" class=\"type-interior\">\n");
		sb = sb.append("<div data-role=\"header\" data-theme=\"f\">\n");
		sb = sb.append("<h1 class=\"title\">");
		sb = sb.append(selectedIdea.getTitle());
		sb = sb.append("</h1>\n");
		sb = sb.append("<a href=\"http://mi-parque.appspot.com/index.html\" data-ajax=\"false\" data-icon=\"home\" ");
		sb = sb.append("data-iconpos=\"notext\" data-direction=\"reverse\" class=\"ui-btn-right\">Home</a>");
		sb = sb.append("</div>\n");
		sb = sb.append("<div data-role=\"content\" data-theme=\"d\">\n");
		sb = sb.append("<img src=\"http://mi-parque.appspot.com/images/logo_bottom.png\" />\n");
		sb = sb.append("<hr>\n");
		
		if(selectedIdea.getImgURL().length() > 5){
			//sb = sb.append("<div id=\"horizontalContainer\" style=\"width:100%;\">");

			
			//sb = sb.append("<div id=\"horizontalDiv1\" style=\"float:left;width:300px;\">");
			sb = sb.append("<img src=\""+selectedIdea.getImgURL()+"\" width=\"200\" height=\"200\"/>\n");
			//sb = sb.append("</div>");
			
			//sb = sb.append("<div id=\"horizontalDiv2\" style=\"float:left;margin-left:305px;margin-right:10px;\">");
			sb = sb.append("<p class=\"description\">");
			sb = sb.append(selectedIdea.getDescription());
			sb = sb.append("</p>\n");
			//sb = sb.append("</div>");
			
			//sb = sb.append("</div>");
			

		}
		else{
			sb = sb.append("<p class=\"description\">");
			sb = sb.append(selectedIdea.getDescription());
			sb = sb.append("</p>\n");
		}
		
		sb = sb.append("<fb:comments href=\"http://mi-parque.appspot.com/idea/ideaGetDetail?id="+selectedIdea.getId()+"\"");
		sb = sb.append(" num_posts=\"4\"></fb:comments>\n");
		sb = sb.append("</div>\n");
		sb = sb.append("<div data-role=\"footer\" class=\"footer-docs\" data-theme=\"c\">\n");
		sb = sb.append("<p>&copy; Open Youth Networks</p>\n");
		sb = sb.append("<img src=\"http://mi-parque.appspot.com/images/logo_bottom.png\" style=\"float: right\" />\n");
		sb = sb.append("</div></div>\n");
		sb = sb.append("<script src=\"http://mi-parque.appspot.com/lib/jquery/jquery.min.js\"></script>\n");
		sb = sb.append("<script src=\"http://mi-parque.appspot.com/lib/jquery/jquery.mobile/jquery.mobile.min.js\"></script>\n");
		sb = sb.append( "</BODY></HTML>\n");

			
		return sb.toString();
	}
	
	 public Idea findIdea(String id, HashMap messages) throws IOException {
		 Idea aIdea = null;
	     for(int i = 0; i < messages.size(); i++){
	    	 //writeMessage(writer, (Idea)messages.get(new Integer(i)));
	    	 Idea tempIdea = (Idea)messages.get(new Integer(i));
	    	 String in = "" + tempIdea.getId();
	    	 if(in.contains(id)){
	    		 aIdea = tempIdea;
	    		 break;
	    	 }
	     }

	     return aIdea;
	   }

}
