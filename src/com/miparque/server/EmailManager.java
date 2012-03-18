package com.miparque.server;

import java.io.UnsupportedEncodingException;
import java.util.Properties;

import javax.mail.Message;
import javax.mail.MessagingException;
import javax.mail.Multipart;
import javax.mail.Session;
import javax.mail.Transport;
import javax.mail.internet.AddressException;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeBodyPart;
import javax.mail.internet.MimeMessage;
import javax.mail.internet.MimeMultipart;

public class EmailManager {

	private String title="";
	private String subject="";
	private String bodyText;
	private String senderAddress="pallavi.kaushik@gmail.com";
	private String recipientAddress;
	public EmailManager(){
		
	}
	
	public void setTitle(String title){
		this.title = title;
	}
	
	public void setSubject(String subject){
		this.subject = subject;
	}
	
	public void setRecipientAddress(String recipientAddress){
		this.recipientAddress = recipientAddress;
	}
	
	public void setBodyText(String bodyText){
		this.bodyText = bodyText;
	}
	
	public void sendRichText() throws UnsupportedEncodingException{
		String msgBody = "";
		
		Properties props = new Properties();
        Session session = Session.getDefaultInstance(props, null);
        
	    try {
	        Message msg = new MimeMessage(session);
	        msg.setFrom(new InternetAddress(this.senderAddress, "mi-parque Admin"));
	        msg.addRecipient(Message.RecipientType.TO,
	                         new InternetAddress(this.recipientAddress, "User Notification"));
	        msg.setSubject(this.subject);
	        msg.setText(msgBody);

	        Multipart mp = new MimeMultipart();
	
	        MimeBodyPart htmlPart = new MimeBodyPart();
	        htmlPart.setContent(this.bodyText, "text/html");
	        mp.addBodyPart(htmlPart);
	
	        msg.setContent(mp);
	        Transport.send(msg);
	
	    } catch (AddressException e) {
	    	e.printStackTrace();
	    	
	    } catch (MessagingException e) {
	    	e.printStackTrace();
	    	
	    }

	}
	
	public void sendPlainText() throws UnsupportedEncodingException{
		Properties props = new Properties();
        Session session = Session.getDefaultInstance(props, null);
        
        try {
            Message msg = new MimeMessage(session);
            msg.setFrom(new InternetAddress(this.senderAddress, "mi-parque"));
            msg.addRecipient(Message.RecipientType.TO,
                             new InternetAddress(this.recipientAddress, "User Notification"));
            msg.setSubject(this.subject);
            msg.setText(this.bodyText);
            Transport.send(msg);
    
        } catch (AddressException e) {
        	e.printStackTrace();
        } catch (MessagingException e) {
        	e.printStackTrace();
        }

	}
		
}
