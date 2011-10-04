define([
  '../../data/gis/campus_parks',
  '../../data/gis/habitat',
  '../../data/gis/riverwalk',
  '../../data/gis/mi_parque'
], function(campus_parks, habitat, riverwalk, miparque) {
  return Backbone.View.extend({
	campus_parks: new GeoJSON(campus_parks, {
		strokeColor: "#285702",
		strokeWeight: 1,
		strokeOpacity: 0.75,
		fillOpacity: 1,
		fillColor: "#285702" 
	}),
	
	habitat: new GeoJSON(habitat, {
		strokeColor: "#285702",
		strokeWeight: 1,
		strokeOpacity: 0.75,
		fillOpacity: 1,
		fillColor: "#285702" 
	}),
	
	miparque: new GeoJSON(miparque, {
		strokeColor: "#56A00E",
		strokeWeight: 1,
		strokeOpacity: 0.75,
		fillOpacity: 1,
		fillColor: "#56A00E" 
	}),
	
	riverwalk: new GeoJSON(riverwalk, {
		strokeColor: "#285702",
		strokeWeight: 3,
		strokeOpacity: 0.75
	}),
	
	initialize: function() {
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