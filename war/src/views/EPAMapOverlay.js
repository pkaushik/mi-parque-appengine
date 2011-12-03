define([
  '../../data/gis/epa'
], function(epa) {
  return Backbone.View.extend({
	epa: null,
	
	initialize: function() {
	  if (typeof google === 'undefined') return this;
	  
	  this.epa = new GeoJSON(epa, {
		strokeColor: "#343434",
		strokeWeight: 1,
		strokeOpacity: 0.75,
		fillOpacity: 1,
		fillColor: "#343434" 
	  });
	  
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
      this.renderFeatureCollection(this.epa, this.options.map);
      return this;
    }
  });
});