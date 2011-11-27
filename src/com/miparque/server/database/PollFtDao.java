package com.miparque.server.database;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import org.json.JSONException;
import org.json.JSONObject;

import com.miparque.restlet.JsonAdapter;
import com.miparque.server.ResourceNotFoundException;
import com.miparque.server.dao.Poll;
import com.miparque.server.dao.PollType;

/**
 * FusionTable based data access implemention for a Poll.
 * 
 * I guess we could have checked exceptions to give back to the caller if we need to
 * 
 * @author codersquid
 */
public class PollFtDao extends AbstractFtDao<Poll,String> {
    private static final String FID = "2149092";
    private static final String columns = "ROWID,description,title,openGraphUrl,pollType,active,openGraphImageUrl";
    protected String getFusionTableId() {
        return FID;
    }
    protected String getColumns() {
        return columns;
    }

    /**
     * @param rowid rowid for a Poll
     * @return the Poll in json form
     * @throws ResourceNotFoundException 
     * @throws JSONException 
     */
    public JSONObject getJson(String rowid) throws ResourceNotFoundException, JSONException {
        List<Map<String,String>> pollrows = getMappedResults(rowid);
        Map<String,String> pollMap = pollrows.get(0); // TODO want to throw an exception for more than one result?
        JSONObject pollJson = JsonAdapter.pollFromMappedResults(pollMap); 
        return pollJson;
    }

    public List<JSONObject> getAllJson() throws ResourceNotFoundException, JSONException {
        List<Map<String, String>> pollrows = getAllMappedResults();
        List<JSONObject> polls = new ArrayList<JSONObject>();
        for (Map<String,String> m : pollrows) {
            JSONObject j = JsonAdapter.pollFromMappedResults(m);
            polls.add(j);
        }
        return polls;
    }

    public List<JSONObject> getJsonList(String key) throws ResourceNotFoundException, JSONException {
        // TODO Auto-generated method stub
        throw new RuntimeException("not implemented yet");
    }

    /**
     * Validates a poll for storing
     * @param poll
     */
    protected void validateForInsert(Poll poll) {
        if (poll.getTitle() == null || poll.getTitle().isEmpty()) {
            throw new IllegalArgumentException("Polls need a title in order to be stored. Failed to store" +
                    " Poll object: " + poll);
        }
    }

    /**
     * Builds a poll from the map of strings returned by {@link FusionTablesManager#runSelect(String)}
     * 
     * @param m map of column values from a fusiontable row
     * @return a Poll representation of the results
     */
    protected Poll mergeFromMap(Map<String,String> m) {
        Poll poll = new Poll();
        if (m.containsKey("rowid")) {
            poll.setId(m.get("rowid"));
        }
        if (m.containsKey("description")) {
            poll.setDescription(m.get("description"));
        }
        if (m.containsKey("title")) {
            poll.setTitle(m.get("title"));
        }
        if (m.containsKey("openGraphUrl")) {
            poll.setOpenGraphUrl(m.get("openGraphUrl"));
        }
        if (m.containsKey("pollType")) {
            poll.setType(PollType.valueOf(m.get("pollType")));
        }
        if (m.containsKey("active")) {
            poll.setActive(m.get("active").equals("true"));
        }
        if (m.containsKey("openGraphImageUrl")) {
            poll.setOpenGraphImageUrl(m.get("openGraphImageUrl"));
        }
        return poll;
    }
    private String generateOpenGraphUrl(Poll poll) {
        return slugify(poll.getTitle());
    }

    /**
     * Generates insert statement for requested poll
     * @param poll a validate poll
     * @return sql insert statement valid for fusiontables
     */
    protected String getInsertSql(Poll poll) {
        String active = poll.isActive() ? "true" : "false";
        poll.setOpenGraphUrl(generateOpenGraphUrl(poll));
        StringBuffer sb = new StringBuffer("insert into ")
                .append(FID)
                .append(" (description,title,openGraphUrl,pollType,active,openGraphImageUrl)")
                .append(" values (")
                .append(nullSafeString(poll.getDescription()))
                .append(",")
                .append(nullSafeString(poll.getTitle()))
                .append(",")
                .append(nullSafeString(poll.getOpenGraphUrl()))
                .append(",")
                .append(nullSafeString(poll.getType().name()))
                .append(",")
                .append(nullSafeString(active))
                .append(",")
                .append(nullSafeString(poll.getOpenGraphImageUrl()))
                .append(" )");
        return sb.toString();
    }

}
