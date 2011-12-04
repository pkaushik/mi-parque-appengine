define([
  '../../data/gis/health_human_services_little_village',
  '../../data/gis/hospitals_little_village'
], function(hhs, hospitals) {
  return Backbone.View.extend({
	
	hospitals: null,
	
	initialize: function() {
	  if (typeof google === 'undefined') return this;
	  
	  this.hospitals = new GeoJSON(hospitals, {
		icon: "images/aviso_asthma_small.png"
	  });
		  
	  var that = this;
	  _(hhs.data).each(function(arr){ 
		  var marker = new google.maps.Marker({
			position: new google.maps.LatLng(arr[19][1], arr[19][2]),
			icon: 'images/hhs.png',
	        flat: true,
	        clickable: false,
	        map: that.options.map
		  });
	  });
	  
	  this.renderFeatureCollection(this.hospitals, this.options.map);
	  
	  return this;
	},
	
	// obj can be null to remove
	renderFeatureCollection: function(collection, obj) {
	  if (collection.length) {
	    _(collection).each(function(feature) {
    	  if (feature.length) {
    		_(feature).each(function(f) {
    			f.setMap(obj);
    		}); 
    	  } else {
    		 feature.setMap(obj); 
    	  }
	    });  
	  } else {
		collection.setMap(obj);
	  }
	  return this;
	}
  });
});