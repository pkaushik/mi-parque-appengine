package com.miparque.server;


import java.io.IOException;
import java.io.InputStream;
import java.net.URL;
import java.text.SimpleDateFormat;
import java.util.Date;


import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;


import org.apache.commons.fileupload.FileItemIterator;
import org.apache.commons.fileupload.FileItemStream;
import org.apache.commons.fileupload.FileUploadException;
import org.apache.commons.fileupload.servlet.ServletFileUpload;
import org.apache.commons.fileupload.util.Streams;
import org.apache.commons.io.IOUtils;

import com.google.appengine.api.images.Image;
import com.google.appengine.api.images.ImagesService;
import com.google.appengine.api.images.ImagesServiceFactory;
import com.google.appengine.api.images.Transform;
import com.google.gdata.client.photos.PicasawebService;
import com.google.gdata.data.MediaContent;
import com.google.gdata.data.PlainTextConstruct;
import com.google.gdata.data.media.MediaByteArraySource;
import com.google.gdata.data.media.MediaSource;
import com.google.gdata.data.photos.PhotoEntry;
import com.google.gdata.util.ServiceException;

import com.miparque.server.dao.Idea;
import com.miparque.server.database.DataAct;


public class IdeaUpdate extends HttpServlet{
	private static final long serialVersionUID = 1L;

	private String valueInputValue(String value){
		  if(value == null){
			  value = "' '";
		  }
		  else{
			  value = "'" + value + "'";
		  }
		  
		  return value;
	}
	
    public void doGet(HttpServletRequest request, HttpServletResponse response)
    throws IOException, ServletException {
    	processRequest(request, response);
    //	testProcessRequest(request, response);
	}
	
	public void doPost(HttpServletRequest request, HttpServletResponse response)
	    throws IOException, ServletException {
		processRequest(request, response);
	//	testProcessRequest(request, response);
	}

	public void processRequest(HttpServletRequest req, HttpServletResponse resp)
      throws ServletException, IOException {
	  	ServletFileUpload upload = new ServletFileUpload();
	  	String fieldName= null;
		String fileName= null;
		String contentType = null;
		String photoURL = "";
		byte[] contentBytes = null;
		FileItemIterator iter;
		String sTitle = "";
		String sDesc = "";
		String sID = "";
		String email = "";
	  	
		try {
			iter = upload.getItemIterator(req);
			while (iter.hasNext()){
				FileItemStream imageItm = iter.next();
				InputStream imgStream = imageItm.openStream();
				
				if (!imageItm.isFormField()){
					fieldName = imageItm.getFieldName();
					fileName = imageItm.getName();
					contentType = imageItm.getContentType();
					try {
						contentBytes = IOUtils.toByteArray(imgStream);
					} finally {
						IOUtils.closeQuietly(imgStream);
					}
				}
				else{
					fieldName = imageItm.getFieldName();
					System.out.println("Form field " + fieldName );
					if(fieldName.equalsIgnoreCase("title")){
						sTitle =  Streams.asString((InputStream) imgStream) ;
					}
					
					if(fieldName.equalsIgnoreCase("description")){
						sDesc =  Streams.asString((InputStream) imgStream) ;
					}
					
					if(fieldName.equalsIgnoreCase("facebookID")){
						sID =  Streams.asString((InputStream) imgStream) ;
					}
					if(fieldName.equalsIgnoreCase("email")){
						email =  Streams.asString((InputStream) imgStream) ;
					}
				}
			}				

		    
			if (contentBytes != null && contentType != null && contentType.contains("image")) {
				
	            ImagesService imagesService = ImagesServiceFactory.getImagesService();
				Image oldImage = ImagesServiceFactory.makeImage(contentBytes);

								
				int width = oldImage.getWidth();
				int height = oldImage.getHeight();

				int MAZ_SIZE = 1200;
				
				if(width > MAZ_SIZE || height > MAZ_SIZE){
					width = (int) (width*0.5);
					height= (int) (height*0.5);
				}
				
				Image image;
				Transform resize = ImagesServiceFactory.makeResize(width, height);
				if(contentType.equalsIgnoreCase("image/png")){
					image = imagesService.applyTransform(resize, oldImage, ImagesService.OutputEncoding.PNG);
				}
				else{
					image = imagesService.applyTransform(resize, oldImage, ImagesService.OutputEncoding.JPEG);
				}
				
				
				PicasawebService myService = new PicasawebService("miparque");
				try {
				    myService.setUserCredentials("liliann.v.lucas@gmail.com", "iop!2taa");
				    String albumid = "5676070869911132433";
				    //https://picasaweb.google.com/data/feed/api/user/117217143893414369297/albumid/5676070869911132433
				    URL albumPostUrl = new URL("http://picasaweb.google.com/data/feed/api/user/117217143893414369297/albumid/"+albumid);
				
				    PhotoEntry myPhoto = new PhotoEntry();
				    myPhoto.setTitle(new PlainTextConstruct(fileName));
			 
			        MediaSource myMedia = new MediaByteArraySource(image.getImageData(), "image/jpeg");
			        myPhoto.setMediaSource(myMedia);
			 
			        PhotoEntry returnedPhoto = myService.insert(albumPostUrl, myPhoto);            
			        MediaContent mc = (MediaContent) returnedPhoto.getContent();
			        
			        photoURL = mc.getUri();
			        
				
				} catch (Exception e) {
					e.printStackTrace();
				} 			    
	           				
			}
			
			if(!sTitle.isEmpty() && !sDesc.isEmpty()){
				Idea idea = new Idea();	
				idea.setTitle(sTitle);
				idea.setDescription(sDesc);
				idea.setImgURL(photoURL);
				idea.setStatus("0");
				idea.setFacebookID(sID);
				idea.setDateCreated(getInsertCurrentDateTime());
				
				DataAct da = new DataAct();
				da.insertNewIdea(idea);
				
				EmailManager em = new EmailManager();
				em.setRecipientAddress(email);
				em.setSubject("Your Idea has been received.");
				em.setTitle("Your Idea has been received.");
				em.setBodyText("<b>Thank you for submitting your idea!<br>Your idea, "+ sTitle +", has been received sucessfully.<br>Administrator will review your idea for the approval.<br><br>Regards,<br>Mi-Parque Admin</b>");
				em.sendRichText();				
			}			

		} catch (FileUploadException e) {
			e.printStackTrace();
			
		} catch (Exception e) {
			e.printStackTrace();
			
		}
//		String emails = "email:" + email;
//		resp.setContentType("text/plain");
//		resp.getOutputStream().write(emails.getBytes()); 
		resp.sendRedirect("http://mi-parque.appspot.com/");
	}
	
	
	public void testProcessRequest(HttpServletRequest req, HttpServletResponse resp)
    throws ServletException, IOException {
		
//		String sTitlee = (req.getParameter("title"));
//		String description = (req.getParameter("description"));
//		String sID = (req.getParameter("facebookID"));
//		
//		String returnValue = "got : " + sTitlee + ", " + description + ", " +sID;
//		Idea idea = new Idea();	
//		idea.setTitle(sTitlee);
//		idea.setDescription(description);
//		idea.setImgURL("https://picasaweb.google.com/117217143893414369297/Miparque#5676070870252255314");
//		idea.setStatus("0");
//		idea.setFacebookID(sID);
//		idea.setDateCreated(getInsertCurrentDateTime());
//		
//		DataAct da = new DataAct();
//		try {
//			da.insertNewIdea(idea);
//		} catch (ServiceException e) {
//			// TODO Auto-generated catch block
//			e.printStackTrace();
//		}
//		
//		resp.setContentType("text/plain");
//		resp.getOutputStream().write(returnValue.getBytes()); 
		
//		String sTitle = "title";
//		String email = "jikimlucas@yahoo.com";
//		EmailManager em = new EmailManager();
//		em.setRecipientAddress(email);
//		em.setSubject("Your Idea has been received.");
//		em.setTitle("Your Idea has been received.");
//		em.setBodyText("<b><br>Thank you for submitting your idea!<br>Your idea "+ sTitle +" has been received sucessfully.<br>Administrator will review your idea for the approval.<br><br>Regards,<br>Mi-Parque Admin</b>");
//		em.sendRichText();
	}

	public String getInsertCurrentDateTime(){
		Date date = new Date();
		
		String DATE_FORMAT = "MM/dd/yy HH:mm";
		SimpleDateFormat sdf = new SimpleDateFormat(DATE_FORMAT);
		
		return sdf.format(date);
	}
}
