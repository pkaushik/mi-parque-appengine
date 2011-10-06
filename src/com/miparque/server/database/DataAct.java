package com.miparque.server.database;

import java.io.IOException;
import java.util.HashMap;

import com.google.gdata.util.AuthenticationException;
import com.google.gdata.util.ServiceException;
import com.miparque.server.dao.UserAccount;
import com.miparque.server.dao.Notification;
public class DataAct {
	private static final String ACCTOUNT = "1645675";
	private static final String NOTIFY = "1653736";
	public DataAct() {
		// TODO Auto-generated constructor stub
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
			sb.append(ACCTOUNT);
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
	
	private String reformatStringData(String value){
		if(value == null){
			return "";
		}
		if(value.isEmpty()){
			return "";
		}
		
		value = "'"+value+"'";
		
		return value;
	}
	
	
}
