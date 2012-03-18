package com.miparque.server.dao;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import org.json.JSONException;
import org.json.JSONObject;

/**
 * an active record mirroring the denormalized fusiontable activepoll that is storing a poll with its active choices
 * only up to 5 choices are allowed.
 * 
 * @author codersquid
 */
public class ActivePoll implements Serializable {
    private static final long serialVersionUID = 1L;

    String title;
    String description;
    Boolean multiple = Boolean.FALSE;
    Boolean first = Boolean.FALSE;
    String ogurl;
    String ogimage_url;

    String[] indexs = new String[] { null, null, null, null, null};
    String[] choices = new String[] { null, null, null, null, null};
    String[] details = new String[] { null, null, null, null, null};
    String[] cogurls = new String[] { null, null, null, null, null};
    String[] cogimageurls = new String[] { null, null, null, null, null};

    String pollid;
    String[] choiceids =  new String[] { null, null, null, null, null};
    public String getPollId() {
        return pollid;
    }
    public void setPollId(String pollid) {
        this.pollid = pollid;
    }
    public String getChoiceId(int i) {
        validate(i);
        return choiceids[i];
    }
    public void setChoiceId(String id, int i) {
        validate(i);
        choiceids[i] = id;
    }
    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Boolean isMultiple() {
        return multiple;
    }

    public void setMultiple(Boolean multiple) {
        this.multiple = multiple;
    }

    public Boolean isFirst() {
        return first;
    }

    public void setFirst(Boolean first) {
        this.first = first;
    }

    public String getOgurl() {
        return ogurl;
    }

    public void setOgurl(String ogurl) {
        this.ogurl = ogurl;
    }

    public String getOgimage_url() {
        return ogimage_url;
    }

    public void setOgimage_url(String ogimage_url) {
        this.ogimage_url = ogimage_url;
    }
    private void validate(int i) {
        if (i < 0 || i > 4) {
            throw new IllegalArgumentException("can't have negative or more than 5 choices: " + i);
        }
    }
    public String getIndex(int i) {
        validate(i);
        return indexs[i];
    }
    public void setIndex(String index, int i) {
        validate(i);
        indexs[i] = index;
    }
    public String getChoice(int i) {
        validate(i);
        return choices[i];
    }
    public void setChoice(String choice, int i) {
        validate(i);
        choices[i] = choice;
    }
    public String getDetail(int i) {
        validate(i);
        return details[i];
    }
    public void setDetail(String detail, int i) {
        validate(i);
        details[i] = detail;
    }

    public String getCogurl(int i) {
        validate(i);
        return cogurls[i];
    }

    public void setCogurl(String cogurl, int i) {
        validate(i);
        cogurls[i] = cogurl;
    }

    public String getCogImageUrl(int i) {
        validate(i);
        return cogimageurls[i];
    }
    public void setCogimageUrl(String cogimageurl, int i) {
        validate(i);
        cogimageurls[i] = cogimageurl;
    }

    public String toString() {
        return "ActivePoll ["
                + "title=" + title
                + ", pollid=" + pollid
                + ", description=" + description
                + ", multiple=" + multiple
                + ", first=" + first
                + ", ogurl=" + ogurl
                + ", ogimage_url=" + ogimage_url
                + ", indexs=" + Arrays.toString(indexs)
                + ", choiceids=" + Arrays.toString(choices)
                + ", choices=" + Arrays.toString(choices)
                + ", details=" + Arrays.toString(details)
                + ", cogurls=" + Arrays.toString(cogurls)
                + ", cogimageurls=" + Arrays.toString(cogimageurls)
                + "]";
    }

    public JSONObject toJson() throws JSONException {
        JSONObject pjson = new JSONObject();
        pjson.put("title", title);
        pjson.put("id", pollid);
        pjson.put("description", description);
        pjson.put("multiple", multiple);
        pjson.put("first", first);
        pjson.put("ogurl", ogurl);
        pjson.put("ogimage_url", ogimage_url);

        List<JSONObject> choices = new ArrayList<JSONObject>();
        for (int i = 0; i < 5; i++) {
            if (getIndex(i) == null || getIndex(i).isEmpty()) {
                continue; // assume if an index is not null then the rest are populated
            }
            JSONObject c = new JSONObject();
            c.put("index", getIndex(i));
            c.put("choice", getChoice(i));
            c.put("choiceid", getChoiceId(i));
            c.putOpt("detail", getDetail(i));
            c.putOpt("cogurl", getCogurl(i));
            c.putOpt("cogimage_url", getCogImageUrl(i));
            choices.add(c);
        }
        pjson.put("choices", choices);
        return pjson;
    }
    public void mergeChoice(Choice c, int i) {
        setChoice(c.getChoice(), i);
        setDetail(c.getDetail(), i);
        setIndex(c.getId(), i); // TODO do we want this mod 5 the choice id so we get 0 through 4?
        setChoiceId(c.getId(), i);
        setCogurl(c.getOpenGraphUrl(), i);
        setCogimageUrl(c.getOpenGraphImageUrl(), i);
    }
    public void mergePoll(Poll p) {
        this.description = p.getDescription();
        this.pollid = p.getId();
        this.title = p.getTitle();
        this.ogurl = p.getOpenGraphUrl();
        this.ogimage_url = p.getOpenGraphImageUrl();
        this.multiple = p.getType().equals(PollType.APPROVAL);
    }
}
