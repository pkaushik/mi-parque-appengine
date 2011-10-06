define([
  '../../data/gis/campus_parks',
  '../../data/gis/habitat',
  '../../data/gis/riverwalk',
  '../../data/gis/mi_parque'
], function(campus_parks, habitat, riverwalk, miparque) {
  return Backbone.View.extend({
	campus_parks: null,
	
	habitat: null,
	
	miparque: null,
	
	riverwalk: null,
	
	initialize: function() {
	  if (typeof google === 'undefined') return this;
	  
	  this.campus_parks = new GeoJSON(campus_parks, {
		strokeColor: "#285702",
		strokeWeight: 1,
		strokeOpacity: 0.75,
		fillOpacity: 1,
		fillColor: "#285702" 
	  });
		
	  this.habitat = new GeoJSON(habitat, {
		strokeColor: "#285702",
		strokeWeight: 1,
		strokeOpacity: 0.75,
		fillOpacity: 1,
		fillColor: "#285702" 
	  });
		
	  this.miparque = new GeoJSON(miparque, {
		strokeColor: "#56A00E",
		strokeWeight: 1,
		strokeOpacity: 0.75,
		fillOpacity: 1,
		fillColor: "#56A00E" 
	  });
		
	  this.riverwalk = new GeoJSON(riverwalk, {
		strokeColor: "#285702",
		strokeWeight: 3,
		strokeOpacity: 0.75
	  });
	  
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
      //this.renderFeatureCollection(this.boulevards[0], this.options.map); // rendering this using Google Maps Tile Styling
      //this.renderFeatureCollection(this.mall_plaza, this.options.map); // not green
    	
      this.renderFeatureCollection(this.habitat, this.options.map);
      this.renderFeatureCollection(this.campus_parks, this.options.map);
      this.renderFeatureCollection(this.riverwalk, this.options.map);
      this.renderFeatureCollection(this.miparque, this.options.map);
      
      return this;
    }
  });
});