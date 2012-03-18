package com.miparque.server.database;

import java.io.IOException;
import java.util.HashMap;

import com.google.gdata.util.AuthenticationException;
import com.google.gdata.util.ServiceException;
import com.miparque.server.dao.Idea;
import com.miparque.server.dao.UserAccount;
import com.miparque.server.dao.Notification;
public class DataAct {
	private static final String ACCOUNT = "1645675";
	private static final String NOTIFY = "1653736";
	private static final String IDEA = "2081293";
	private static final String pGetMaxIdeaID = "SELECT MAXIMUM(id) From " + IDEA;
	private static final String pGetMaxAvisoID = "SELECT MAXIMUM(id) From " + NOTIFY;
	
	public DataAct() {
		// TODO Auto-generated constructor stub
	}

	public String getOneFieldValue(String tableName, String param) throws IOException, ServiceException{
		StringBuffer sb = new StringBuffer();
		sb = sb.append("select ");
		sb = sb.append(param);
		sb = sb.append(" From ");
		sb = sb.append(tableName);
		String returnValue = "";
		try {
			FusionTablesManager fm = new FusionTablesManager();
			returnValue = fm.runSelectOneField(sb.toString(), param);
		} catch (AuthenticationException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
		return returnValue;
	}
	
	public HashMap getNotification() throws IOException, ServiceException{
		HashMap hm = null;
		StringBuffer sb = new StringBuffer();
		sb = sb.append("select id,title,type,description,lat,lon,imgURL From ");
		sb = sb.append(NOTIFY );
		sb = sb.append(" ORDER BY id DESC LIMIT 10"  );
		try {
			FusionTablesManager fm = new FusionTablesManager();
			hm = fm.runSelectNotification(sb.toString());
		} catch (AuthenticationException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
		return hm;
	}
		
	
	public void insertNewUser(UserAccount acct) throws IOException, ServiceException{
		if(acct != null){
			StringBuffer sb = new StringBuffer();
			sb.append("insert into ");
			sb.append(ACCOUNT);
			sb.append("(facebookId, oauthToken,name,email,language,method,phone,location,created,send1,send2,send3)");
			sb.append(" values (");
			sb.append(reformatStringData(acct.getFacebookId()));
			sb.append(",");
			sb.append(reformatStringData(acct.getOauthToken()));
			sb.append(",");
			sb.append(reformatStringData(acct.getName()));
			sb.append(",");
			sb.append(reformatStringData(acct.getEmail()));
			sb.append(",");
			sb.append(reformatStringData(acct.getLanguage()));
			sb.append(",");
			sb.append(reformatStringData(acct.getMethod()));
			sb.append(",");
			sb.append(reformatStringData(acct.getPhone()));
			sb.append(",");
			sb.append(reformatStringData(acct.getLocation()));
			sb.append(",");
			sb.append(reformatStringData(acct.getCreated()));
			sb.append(",");
			sb.append(reformatStringData(acct.getSend1()));
			sb.append(",");
			sb.append(reformatStringData(acct.getSend2()));
			sb.append(",");
			sb.append(reformatStringData(acct.getSend3()));
			sb.append(" )");
			
			try {
				FusionTablesManager fm = new FusionTablesManager();
				fm.runInsert(sb.toString());
			} catch (AuthenticationException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		}
	}
	
	public void insertNewIdea(Idea idea) throws IOException, ServiceException{
		if(idea != null){
			try {
				FusionTablesManager fm = new FusionTablesManager();
				int id = Integer.parseInt(fm.runSelectOneField(pGetMaxIdeaID, "MAXIMUM(id)")) + 1;
				
				idea.setId(id);
				
				StringBuffer sb = new StringBuffer();
				sb.append("insert into ");
				sb.append(IDEA);
				sb.append("(id, title, imgURL, description, facebookId, status, created)");
				sb.append(" values (");
				sb.append(idea.getId());
				sb.append(",");
				sb.append(reformatStringData(idea.getTitle()));
				sb.append(",");
				sb.append(reformatStringData(idea.getImgURL()));
				sb.append(",");
				sb.append(reformatStringData(idea.getDescription()));
				sb.append(",");
				sb.append(reformatStringData(idea.getFacebookID()));
				sb.append(",");
				sb.append(reformatStringData(idea.getStatus()));
				sb.append(",");
				sb.append(reformatStringData(idea.getDateCreated()));
				sb.append(" )");
				fm.runInsert(sb.toString());
			} catch (AuthenticationException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		}		
	}
	
	public void insertNotification(Notification notify) throws IOException, ServiceException{
		//id, title, type, description, lat, lon, imURL,geo, address, iconURL, created, status
		if(notify != null){
			try {
				FusionTablesManager fm = new FusionTablesManager();
				int id = Integer.parseInt(fm.runSelectOneField(pGetMaxAvisoID, "MAXIMUM(id)")) + 1;
				
				notify.setId(id);
				
				StringBuffer sb = new StringBuffer();
				sb.append("insert into ");
				sb.append(IDEA);
				sb.append("(id, title, type, description, lat, lon, imURL,created, status)");
				sb.append(" values (");
				sb.append(notify.getId());
				sb.append(",");
				sb.append(reformatStringData(notify.getTitle()));
				sb.append(",");
				sb.append(reformatStringData(notify.getType()));
				sb.append(",");
				sb.append(reformatStringData(notify.getDescription()));
				sb.append(",");
				sb.append(notify.getLat());
				sb.append(",");
				sb.append(notify.getLon());
				sb.append(",");
				sb.append(reformatStringData(notify.getImgURL()));
				sb.append(",");
				sb.append(reformatStringData(notify.getDateCreated()));
				sb.append(",");
				sb.append(reformatStringData("0"));
				sb.append(" )");
				fm.runInsert(sb.toString());
			} catch (AuthenticationException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		}		
	}
	
	//IDEA SECTION
	public HashMap getIdeas(String statusFilter) throws IOException, ServiceException{
		HashMap hm = null;
		StringBuffer sb = new StringBuffer();
		
		if (statusFilter.equalsIgnoreCase("all"))	
		{
			sb = sb.append("select id,title,description,status,facebookId,created,imgURL From ");
			sb = sb.append(IDEA );
			sb = sb.append(" ORDER BY id DESC"  );
		}
		else
		{
			sb = sb.append("SELECT id,title,description,status,facebookId,created,imgURL From ");
			sb = sb.append(IDEA );
			sb = sb.append(" WHERE status = ");
			sb = sb.append(reformatStringData(statusFilter));
			sb = sb.append(" ORDER BY id DESC"  );			
		}
		
		try {
			FusionTablesManager fm = new FusionTablesManager();
			hm = fm.runSelectIdea(sb.toString());
		} catch (AuthenticationException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
		return hm;
	}
	
	public HashMap getNewsAndAlertList() throws IOException, ServiceException{
		HashMap hm = null;
		StringBuffer sb = new StringBuffer();
		
		sb = sb.append("select facebookId, oauthToken, name, email, language, method, phone FROM ");
		sb = sb.append( this.ACCOUNT );
		sb = sb.append(" Where send1 = 'true'");
		
		try {
			FusionTablesManager fm = new FusionTablesManager();
			hm = fm.runSelectNotificationList(sb.toString());
		} catch (AuthenticationException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
		return hm;
	}

	public HashMap getVolunteerOppList() throws IOException, ServiceException{
		HashMap hm = null;
		StringBuffer sb = new StringBuffer();
		
		sb = sb.append("select facebookId, oauthToken, name, email, language, method, phone FROM ");
		sb = sb.append( this.ACCOUNT );
		sb = sb.append(" Where send2 = 'true'");
		
		try {
			FusionTablesManager fm = new FusionTablesManager();
			hm = fm.runSelectNotificationList(sb.toString());
		} catch (AuthenticationException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
		return hm;
	}

	public HashMap getEnvironmentList() throws IOException, ServiceException{
		HashMap hm = null;
		StringBuffer sb = new StringBuffer();
		
		sb = sb.append("select facebookId, oauthToken, name, email, language, method, phone FROM ");
		sb = sb.append( this.ACCOUNT );
		sb = sb.append(" Where send3 = 'true'");
		
		try {
			FusionTablesManager fm = new FusionTablesManager();
			hm = fm.runSelectNotificationList(sb.toString());
		} catch (AuthenticationException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
		return hm;
	}
	
	private String reformatStringData(String value){
		if(value == null){
			return "''";
		}
		if(value.isEmpty()){
			return "''";
		}
		
		value = "'"+value+"'";
		
		return value;
	}
		
}
