define([
  '../../data/gis/toxic_sites_LVEJO'
], function(placemarks) {
  return Backbone.View.extend({
	
	initialize: function() {
	  var that = this;
	  _(placemarks).each(function(item){ 
		  var marker = new google.maps.Marker({
			position: new google.maps.LatLng(item.lon, item.lat),
			icon: 'images/factory.png',
			//map: that.options.map
		  });
		  
		  var message = {
		    title: item.title
		  }
		  
		  marker.setMap(that.options.map);
		  that.setInfoWindow(marker, message);
	  });
	  return this;
	},
	
	infowindow: new google.maps.InfoWindow(),
	
	setInfoWindow: function(feature, message) {
		var that = this;
		google.maps.event.addListener(feature, "click", function(event) {
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