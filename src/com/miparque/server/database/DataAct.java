package com.miparque.server.database;

import java.io.IOException;

import com.google.gdata.util.AuthenticationException;
import com.google.gdata.util.ServiceException;
import com.miparque.server.dao.UserAccount;

public class DataAct {
	private static final String ACCTOUNT = "1645675";
	
	public DataAct() {
		// TODO Auto-generated constructor stub
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
