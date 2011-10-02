define(function() {
  return Backbone.View.extend({
    initialize: function() {
      this.render();
      return this;
    },
    render: function() {    
      var that = this;
      this.collection.each(function(model){    	
    	  var marker = new google.maps.Marker({
  			position: new google.maps.LatLng(parseFloat(model.get("lat")), parseFloat(model.get("lon"))),
  			icon: "images/aviso_" + model.get("type") + "_small.png"
  		  });
    	  
  		  marker.setMap(that.options.map);
      });

      return this;
    }
  });
});