package com.miparque.server.dao;

public class NotificationAccountList {
	private String facebookId;
	private String oauthToken;
	private String name;
	private String email;
	private String language;
	private String method;
	private String phone;
	
	public NotificationAccountList() {
		// TODO Auto-generated constructor stub
	}
	public void setFacebookId(String facebookId) {
		this.facebookId = facebookId;
	}
	public String getFacebookId() {
		return facebookId;
	}
	public void setOauthToken(String oauthToken) {
		this.oauthToken = oauthToken;
	}
	public String getOauthToken() {
		return oauthToken;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getName() {
		return name;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getEmail() {
		return email;
	}
	public void setLanguage(String language) {
		this.language = language;
	}
	public String getLanguage() {
		return language;
	}
	public void setMethod(String method) {
		this.method = method;
	}
	public String getMethod() {
		return method;
	}
	public void setPhone(String phone) {
		this.phone = phone;
	}
	public String getPhone() {
		return phone;
	}

}
