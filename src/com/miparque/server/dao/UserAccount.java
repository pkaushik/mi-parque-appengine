package com.miparque.server.dao;

public class UserAccount {
	private String facebookId;
	private String oauthToken;
	private String name;
	private String email;
	private String language;
	private String method;
	private String phone;
	private String location;
	private String created;
	private String send1;
	private String send2;
	private String send3;
	
	public UserAccount() {
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
	public void setLocation(String location) {
		this.location = location;
	}
	public String getLocation() {
		return location;
	}
	public void setCreated(String created) {
		this.created = created;
	}
	public String getCreated() {
		return created;
	}
	public void setSend1(String send1) {
		this.send1 = send1;
	}
	public String getSend1() {
		return send1;
	}
	public void setSend2(String send2) {
		this.send2 = send2;
	}
	public String getSend2() {
		return send2;
	}
	public void setSend3(String send3) {
		this.send3 = send3;
	}
	public String getSend3() {
		return send3;
	}

}
