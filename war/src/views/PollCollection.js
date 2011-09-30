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
    	var choice = $(e.currentTarget).parent().find(".ui-radio-on").find(".ui-btn-text").text();
    	var id = $(e.currentTarget).parent().find(".ui-radio-on").attr("data-poll-id");
    	var title = $(e.currentTarget).parent().find(".ui-radio-on").attr("data-poll-title");
    	postPoll(id, title, choice);
    	console.log("just called postPoll with id:" + id + " title:" + title + " choice:" + choice);
    },
    render: function() {      
      $(this.el)
        .append($.tmpl(template, this.collection.toJSON()));
      
      FB.XFBML.parse(document.getElementById('Polls'));
    }
  });
});