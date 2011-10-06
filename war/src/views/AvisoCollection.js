define([
  'text!templates/Aviso.tmpl',
  'text!templates/AvisoDetailPage.tmpl'
], function(template, pageTemplate) {
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
 
      $("#aviso-detail")
      	.empty()
      	.append($.tmpl(pageTemplate, this.collection.get(id).toJSON()));
      
      $.mobile.changePage("#aviso-detail");
      $('#aviso-detail').trigger('pagecreate');
      
      return this;
    }
  });
});