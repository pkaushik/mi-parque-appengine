define(function() {
  return Backbone.View.extend({
    initialize: function() {
      this.render();
      return this;
    },
    render: function() {    
      var that = this;
      console.log(this.collection.length)
      this.collection.each(function(model){    	
    	  var marker = new google.maps.Marker({
  			position: new google.maps.LatLng(model.get("lat"), model.get("lon")),
  			icon: "images/aviso_" + model.get("type") + "_small.png"
  		  });
    	  
  		  marker.setMap(that.options.map);
      });

      return this;
    }
  });
});