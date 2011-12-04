define([
  '../../data/gis/fire_stations_little_village',
//  '../../data/gis/police_stations_little_village'
], function(fire/*, police*/) {
  return Backbone.View.extend({
	
//	police: null,
	
	initialize: function() {
//	  this.police = new GeoJSON(police, {
//		icon: "images/police.png"
//	  });
	  
	  if (typeof google === 'undefined') return this;
	  this.render();
	  return this;
	},
	
	renderFeatureCollection: function(collection, map) {
		console.log(collection)
	  if (collection.length) {
	    _(collection).each(function(feature) {
    	  if (feature.length) {
    		_(feature).each(function(f) {
    			f.setMap(map);
    		}); 
    	  } else {
    		 feature.setMap(map); 
    	  }
	    });  
	  } else {
		collection.setMap(map);
	  }
	  return this;
	},
	
    render: function() { 
      var that = this;
      
//      this.renderFeatureCollection(this.police, this.options.map);
      
      _(fire.data).each(function(arr){ 
  		  var marker = new google.maps.Marker({
  			position: new google.maps.LatLng(arr[14][1], arr[14][2]),
  			icon: 'images/fire_station.png',
  	        flat: true,
  	        clickable: false,
  	        map: that.options.map
  		  });
  	  });
      
      return this;
    }
  });
});