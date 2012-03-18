define([
  '../../data/gis/site_remediation_little_village',
  '../../data/gis/brownfields'
], function(site, brownfields) {
  return Backbone.View.extend({
	initialize: function() {
	  if (typeof google === 'undefined') return this;
	  
	  this.render();
	  return this;
	},
	
	renderFeatureCollection: function(collection, map) {
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
      _(site.data).each(function(arr){ 
  		  var marker = new google.maps.Marker({
  			position: new google.maps.LatLng(arr[10], arr[11]),
  			icon: 'images/aviso_community_small.png',
  	        flat: true,
  	        clickable: false,
  	        map: that.options.map
  		  });
  	  });
      _(brownfields.data).each(function(arr){ 
  		  var marker = new google.maps.Marker({
  			position: new google.maps.LatLng(arr[0], arr[1]),
  			icon: 'images/brownfield.png',
  	        flat: true,
  	        clickable: false,
  	        map: that.options.map
  		  });
  	  });
      return this;
    }
  });
});