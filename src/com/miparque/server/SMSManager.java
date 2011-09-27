package com.miparque.server;

import java.io.IOException;
import com.techventus.server.voice.Voice;

public class SMSManager {
	private final String adminAccount="MiparqueLV@gmail.com";
	private final String adminPassword="apps4change!";
	private String smsNumber;
	private String message;
	
	public SMSManager(){
		
	}
	
	public SMSManager(String smsNumber, String message){
		this.smsNumber = smsNumber;
		this.message = message;
	}
	
	public void setSMSNumber(String smsNumber){
		this.smsNumber = smsNumber;
	}
	
	public void setMessage(String message){
		this.message = message;
	}
	
	
	public void sendSMSToUser(){
		try {
			Voice voice = new Voice(adminAccount,adminPassword);
			voice.sendSMS(this.smsNumber, this.message);
			
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
	
}
