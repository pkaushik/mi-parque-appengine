package com.miparque.server.dao;

public class Notification {
	private int id;
	private String title;
	private String description;
	private String type;
	private float lat;
	private float lon;
	private String imgURL;
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
	
		this.title = title;
	}
	public String getTitle() {
		
		return title;
	}
	public void setDescription(String description) {
		
		this.description = description;
	}
	public String getDescription() {
		
		return description;
	}
	public void setType(String type) {
		this.type = type;
	}
	public String getType() {
		return type;
	}
	public void setLat(String lat) {
		this.lat = Float.parseFloat(lat);
	}
	public float getLat() {
		return lat;
	}
	public void setLon(String lon) {
		this.lon = Float.parseFloat(lon);
	}
	public float getLon() {
		return lon;
	}
	
	public void setImgURL(String imgURL) {
		this.imgURL = imgURL;
	}
	public String getImgURL() {
		return imgURL;
	}

	public String toString() {
        return String.format("id: %s, title: %s, type: %s, lat:  %s, lon:  %s, description:  %s, imgURL:  %s", id, title, type,lat,lon,description,imgURL);
    }
}
