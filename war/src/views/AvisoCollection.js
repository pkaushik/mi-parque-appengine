define([
  'text!templates/Aviso.tmpl'
], function(template) {
  return Backbone.View.extend({
    initialize: function() {
      this.render();
      return this;
    },
    render: function() {      
      $(this.el)
        .append($.tmpl(template, this.collection.toJSON()));
    }
  });
});