define(function() {
  return Backbone.View.extend({
	rendered: false,
	
    initialize: function() {
      if (typeof google === 'undefined') return this;
    	
	  this.collection.each(function(model){    	
	  	var marker = new google.maps.Marker({
		  position: new google.maps.LatLng(parseFloat(model.get("lat")), parseFloat(model.get("lon"))),
		  icon: "images/aviso_" + model.get("type") + "_small.png",
		});
	  	model.set({ marker: marker });
	  });
      this.render();
      return this;
    },
    
    render: function() {  
      var that = this;
      this.collection.each(function(model){    	
    	  model.get("marker").setMap(that.options.map);
      });
      this.rendered = true;
      return this;
    },
    
    remove: function() {
	  var that = this;
	  this.collection.each(function(model){    	
	  	model.get("marker").setMap(null);
	  });
	  this.rendered = false;
	  return this;
    },
    
    toggle: function() {
      if (this.rendered) {
    	this.remove();
      }	else {
    	this.render();
      }
    }
  });
});