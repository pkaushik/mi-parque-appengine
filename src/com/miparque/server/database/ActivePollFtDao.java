package com.miparque.server.database;

import java.util.List;
import java.util.Map;

import org.json.JSONException;
import org.json.JSONObject;

import com.miparque.server.ResourceNotFoundException;
import com.miparque.server.dao.ActivePoll;

public class ActivePollFtDao extends AbstractFtDao<ActivePoll, String> {
    private final static String COLUMNS = "ROWID,title,description,multiple,first,ogurl,ogimage_url," +
            "index0,choice0,details0,cogurl0,cogimage_url0,index1,choice1,details1,cogurl1,cogimage_url1,index2,choice2," +
            "details2,cogurl2,cogimage_url2,index3,choice3,details3,cogurl3,cogimage_url3,index4,choice4,details4,cogurl4," +
            "cogimage_url4";
    private final static String FID = "2318278";

    public List<JSONObject> getJsonList(String key)
            throws ResourceNotFoundException, JSONException {
        // TODO Auto-generated method stub
        return null;
    }

    public JSONObject getJson(String key) throws ResourceNotFoundException,
            JSONException {
        // TODO Auto-generated method stub
        return null;
    }

    protected void validateForInsert(ActivePoll entity) {
        // TODO Auto-generated method stub
        
    }

    protected String getFusionTableId() {
        return FID;
    }

    protected String getColumns() {
        return COLUMNS;
    }

    protected String getInsertSql(ActivePoll entity) {
        String first = entity.isFirst() ? "true" : "false";
        String multiple = entity.isMultiple() ? "true" : "false";
        StringBuffer sb = new StringBuffer("insert into ")
                .append(FID)
                .append(" (")
                .append("title,description,multiple,first,ogurl,ogimage_url,index0,choice0,details0,")
                .append("cogurl0,cogimage_url0,index1,choice1,details1,cogurl1,cogimage_url1,index2,choice2,")
                .append("details2,cogurl2,cogimage_url2,index3,choice3,details3,cogurl3,cogimage_url3,index4,choice4,")
                .append("details4,cogurl4,cogimage_url4")
                .append(") values (")
                .append(nullSafeString(entity.getTitle()))
                .append(",")
                .append(nullSafeString(entity.getDescription()))
                .append(",")
                .append(nullSafeString(multiple))
                .append(",")
                .append(nullSafeString(first))
                .append(",")
                .append(nullSafeString(entity.getOgurl()))
                .append(",")
                .append(nullSafeString(entity.getOgimage_url()));
        for (int i = 0; i < 5; i++) {
            sb.append(",")
                .append(nullSafeString(entity.getIndex(i)))
                .append(",")
                .append(nullSafeString(entity.getChoice(i)))
                .append(",")
                .append(nullSafeString(entity.getDetail(i)))
                .append(",")
                .append(nullSafeString(entity.getCogurl(i)))
                .append(",")
                .append(nullSafeString(entity.getCogImageUrl(i)));
        }
        sb.append(" )");
        return sb.toString();
    }

    protected ActivePoll mergeFromMap(Map<String, String> m) {
        ActivePoll ap = new ActivePoll();
        if (m.containsKey("title")) { ap.setTitle(m.get("title")); }
        if (m.containsKey("description")) { ap.setDescription(m.get("description")); }
        if (m.containsKey("multiple")) {
            ap.setMultiple("true".equals(m.get("multiple")));
        }
        if (m.containsKey("first")) {
            ap.setFirst("true".equals(m.get("first")));
        }
        if (m.containsKey("ogurl")) { ap.setOgurl(m.get("ogurl")); }
        if (m.containsKey("ogimage_url")) { ap.setOgimage_url(m.get("ogimage_url")); }
        if (m.containsKey("index0")) { ap.setIndex(m.get("index0"), 0); }
        if (m.containsKey("choice0")) { ap.setChoice(m.get("choice0"), 0); }
        if (m.containsKey("details0")) { ap.setDetail(m.get("details0"), 0); }
        if (m.containsKey("cogurl0")) { ap.setCogurl(m.get("cogurl0"), 0); }
        if (m.containsKey("cogimage_url0")) { ap.setCogimageUrl(m.get("cogimage_url0"), 0); }
        if (m.containsKey("index1")) { ap.setIndex(m.get("index1"), 1); }
        if (m.containsKey("choice1")) { ap.setChoice(m.get("choice1"), 1); }
        if (m.containsKey("details1")) { ap.setDetail(m.get("details1"), 1); }
        if (m.containsKey("cogurl1")) { ap.setCogurl(m.get("cogurl1"), 1); }
        if (m.containsKey("cogimage_url1")) { ap.setCogimageUrl(m.get("cogimage_url1"), 1); }
        if (m.containsKey("index2")) { ap.setIndex(m.get("index2"), 2); }
        if (m.containsKey("choice2")) { ap.setChoice(m.get("choice2"), 2); }
        if (m.containsKey("details2")) { ap.setDetail(m.get("details2"), 2); }
        if (m.containsKey("cogurl2")) { ap.setCogurl(m.get("cogurl2"), 2); }
        if (m.containsKey("cogimage_url2")) { ap.setCogimageUrl(m.get("cogimage_url2"), 2); }
        if (m.containsKey("index3")) { ap.setIndex(m.get("index3"),3); }
        if (m.containsKey("choice3")) { ap.setChoice(m.get("choice3"), 3); }
        if (m.containsKey("details3")) { ap.setDetail(m.get("details3"), 3); }
        if (m.containsKey("cogurl3")) { ap.setCogurl(m.get("cogurl3"), 3); }
        if (m.containsKey("cogimage_url3")) { ap.setCogimageUrl(m.get("cogimage_url3"), 3); }
        if (m.containsKey("index4")) { ap.setIndex(m.get("index4"), 4); }
        if (m.containsKey("choice4")) { ap.setChoice(m.get("choice4"), 4); }
        if (m.containsKey("details4")) { ap.setDetail(m.get("details4"), 4); }
        if (m.containsKey("cogurl4")) { ap.setCogurl(m.get("cogurl4"), 4); }
        if (m.containsKey("cogimage_url4")) { ap.setCogimageUrl(m.get("cogimage_url4"), 4); }
        return ap;
    }

}
