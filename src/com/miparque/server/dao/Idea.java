package com.miparque.server.dao;


public class Idea {
	private int id;
	private String title;
	private String imgURL;
	private String description;
	private String status;
	private String facebookID;
	private String dateCreated;

	public Idea() {
		// TODO Auto-generated constructor stub
	}


	public void setId(int id) {
		this.id = id;
	}


	public int getId() {
		return id;
	}


	public void setTitle(String title) {
		this.title = title;
	}


	public String getTitle() {
		return title;
	}


	public void setImgURL(String imgURL) {
		this.imgURL = imgURL;
	}


	public String getImgURL() {
		return imgURL;
	}


	public void setDescription(String description) {
		this.description = description;
	}


	public String getDescription() {
		return description;
	}


	public void setStatus(String status) {
		this.status = status;
	}


	public String getStatus() {
		return status;
	}


	public void setFacebookID(String facebookID) {
		this.facebookID = facebookID;
	}


	public String getFacebookID() {
		return facebookID;
	}


	public void setDateCreated(String dateCreated) {
		this.dateCreated = dateCreated;
	}


	public String getDateCreated() {
		return dateCreated;
	}


	public String toString() {
        return String.format("id: %s, title: %s, description: %s, status:  %s, facebookID:  %s, createDate:  %s", id, title, description, status, facebookID, dateCreated);
    }
}
