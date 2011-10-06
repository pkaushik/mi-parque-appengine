define([
  '../../data/gis/toxic_sites_LVEJO'
], function(placemarks) {
  return Backbone.View.extend({
	rendered: false,
	
	infowindow: null,
	
	initialize: function() {
	  if (typeof google === 'undefined') return this;
	  
	  this.infowindow = new google.maps.InfoWindow();
		
	  this.collection = new Backbone.Collection();
	  var that = this;
	  _(placemarks).each(function(item){ 
		  var marker = new google.maps.Marker({
			position: new google.maps.LatLng(item.lon, item.lat),
			icon: 'images/factory.png',
		  });
		  
		  var message = {
		    title: item.title
		  }
		  
		  that.setInfoWindow(marker, message);
		  that.collection.add({ marker: marker });
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
    },
	
	setInfoWindow: function(marker, message) {
		var that = this;
		google.maps.event.addListener(marker, "click", function(event) {
			var content = "<div id='infoBox'><strong>" + message.title + "</strong><br />";
			
			if (message.fields) {
				for (var j in message.fields) {
					content += j + ": " + message.fields[j] + "<br />";
				}
				content += "</div>";
			}
			that.infowindow.setContent(content);
			that.infowindow.position = event.latLng;
			that.infowindow.open(that.options.map);
		});
	}
  });
});