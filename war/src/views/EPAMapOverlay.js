define([
  '../../data/gis/site_remediation_little_village'
], function(site) {
  return Backbone.View.extend({
	
	initialize: function() {
	  if (typeof google === 'undefined') return this;
	  
//	  this.epa = new GeoJSON(epa, {
//		strokeColor: "#343434",
//		strokeWeight: 1,
//		strokeOpacity: 0.75,
//		fillOpacity: 1,
//		fillColor: "#343434" 
//	  });
	  
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
      //this.renderFeatureCollection(this.epa, this.options.map);
      _(site.data).each(function(arr){ 
  		  var marker = new google.maps.Marker({
  			position: new google.maps.LatLng(arr[10], arr[11]),
  			icon: 'images/aviso_community_small.png',
  	        flat: true,
  	        clickable: false,
  	        map: that.options.map
  		  });
  	  });
      return this;
    }
  });
});