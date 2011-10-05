define([
  'text!templates/Aviso.tmpl'
], function(template) {
  return Backbone.View.extend({
    initialize: function() {
      this.render();
      return this;
    },
    events: {
      "click li": "clicked"
    },
    render: function() {      
      $(this.el)
        .append($.tmpl(template, this.collection.toJSON()));
      return this;
    },
    clicked: function(e) {
      var id = $(e.currentTarget).attr("data-id");
      var model = this.collection.get(id).toJSON();
      
      $("#aviso-detail")
      	.find("#aviso-detail-title")
      	.text(model.title)
      	.end()
      	.find("#aviso-detail-description")
      	.text(model.description)
      	.end()
      	.find("#aviso-detail-image")
      	.attr("src", model.imgURL)
      	
      return this;
    }
  });
});