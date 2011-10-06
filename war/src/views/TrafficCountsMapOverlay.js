define([
  '../../data/gis/traffic_counts_little_village'
], function(traffic_raw) {
  return Backbone.View.extend({
	  
	dotter: null,
	
	legendDotter: null,
	
	initialize: function() {
	  if (typeof google === 'undefined') return this;
	  
	  this.dotter = new Dotter(4);
	  this.legeldDotter = new Dotter(8.5);
	  
	  this.el.find("#dot1").append("<img src=\"" + this.legendDotter.getDot("#FECC5C") + "\"/>");
	  this.el.find("#dot2").append("<img src=\"" + this.legendDotter.getDot("#FD8D3C") + "\"/>");
	  this.el.find("#dot3").append("<img src=\"" + this.legendDotter.getDot("#F03B20") + "\"/>");
		  
	  var that = this;
	  _(traffic_raw.data).each(function(arr){ 
		  var color, val = parseInt(arr[12]);
		  if (val < 5000) {
			color = "#FECC5C";
		  } else if (val >= 5000 && val < 15000) {
			color = "#FD8D3C";
		  } else {
			color = "#F03B20";
		  }
		  
		  var marker = new google.maps.Marker({
			position: new google.maps.LatLng(arr[14], arr[15]),
			icon: that.dotter.getDot(color),
	        flat: true,
	        clickable: false,
	        map: that.options.map
		  });
	  });
	  return this;
	}
  });
});