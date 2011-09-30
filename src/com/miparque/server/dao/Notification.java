package com.miparque.server.dao;

public class Notification {
	private int id;
	private String title;
	private String description;
	private String type;
	private String lat;
	private String lon;
	public Notification() {
		// TODO Auto-generated constructor stub
	}
	public void setId(int id) {
		this.id = id;
	}
	public int getId() {
		return id;
	}
	public void setTitle(String title) {
		title.replaceAll("\u0027", "\'");
		this.title = title;
	}
	public String getTitle() {
		title.replaceAll("\u0027", "\'");
		return title;
	}
	public void setDescription(String description) {
		description.replaceAll("\u0027", "\'");
		this.description = description;
	}
	public String getDescription() {
		description.replaceAll("\u0027", "\'");
		return description;
	}
	public void setType(String type) {
		this.type = type;
	}
	public String getType() {
		return type;
	}
	public void setLat(String lat) {
		this.lat = lat;
	}
	public String getLat() {
		return lat;
	}
	public void setLon(String lon) {
		this.lon = lon;
	}
	public String getLon() {
		return lon;
	}
	
	public String toString() {
        return String.format("id: %s, title: %s, type: %s, lat:  %s, lon:  %s, description:  %s", id, title, type,lat,lon,description);
    }

}
