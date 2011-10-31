define([
  'text!templates/Poll.tmpl'
], function(template) {
  return Backbone.View.extend({
    initialize: function() {
      this.render();
      return this;
    },
    events: {
      "click .vote_button": "vote" 
    },
    vote: function(e) {
    	//debugger;
    	//$(e.currentTarget).disable();
    	var choice = $(e.currentTarget).parent().find(".ui-radio-on").find(".ui-btn-text").text();
    	var id = $(e.currentTarget).parent().find(".ui-radio-on").attr("data-poll-id");
    	var title = $(e.currentTarget).parent().find(".ui-radio-on").attr("data-poll-title");
    	this.postPoll(id, title, choice);
    	console.log("just called postPoll with id:" + id + " title:" + title + " choice:" + choice);
    },
    postPoll: function(id, title, choice) {
    	var verb = '/me/miparque:voice';
    	var poll_url = 'http://mi-parque.appspot.com/pages/polls/';
    	var token = 'AAADZC8pSyZAXgBANTS4LWmpU6ssNYjK7whHGwRTdFlGpKgLWhkThADqZAXEviNfUvfaoGY03G7TxQcZCEE8Fy5vXiWFNMGknvIq0tXWrQTn3O3Ek87Y6';
    	var path = convertToSlug([ id, title ].join(" "));
    	var slug = convertToSlug([ choice ].join(" "));
    	var og_action = verb + '&access_token=' + token + '&poll=' + poll_url
    			+ path + '/' + slug + '.html';

    	console.log(og_action);
    	FB.api(og_action, 'post', function(response) {
    		if (!response || response.error) {
    			console.log(response);
    		} else {
    			console.log('It worked. id: ' + response.id);
    		}
    	});
    },
    render: function() {      
      $(this.el)
        .append($.tmpl(template, this.collection.toJSON()));
      
      (typeof FB !== 'undefined') && FB.XFBML.parse(document.getElementById('Polls'));
      return this;
    }
  });
});