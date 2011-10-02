define([
  '../../data/gis/traffic_counts_little_village'
], function(traffic_raw) {
  return Backbone.View.extend({
	
	initialize: function() {
	  //var headers = _(traffic_raw.meta.view.columns).map(function(obj){ return obj.fieldName; });
	  var that = this;
	  _(traffic_raw.data).each(function(arr){ 
		  var marker = new google.maps.Marker({
			position: new google.maps.LatLng(arr[14], arr[15])
		  });
		  var message = {
		    title: arr[9],
		    fields: {
		    	"Total Passing Vehicle Volume": arr[12]
		    }
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
			for (var j in message.fields) {
				content += j + ": " + message.fields[j] + "<br />";
			}
			content += "</div>";
			that.infowindow.setContent(content);
			that.infowindow.position = event.latLng;
			that.infowindow.open(that.options.map);
		});
	}
  });
});