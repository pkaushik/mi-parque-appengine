define([
  '../../data/gis/campus_parks',
  '../../data/gis/habitat',
  '../../data/gis/neighborspace_gardens',
  '../../data/gis/riverwalk',
  '../../data/gis/mi_parque'
], function(campus_parks, habitat, neighborspace, riverwalk, miparque) {
  return Backbone.View.extend({
	googleOptions: {
		strokeColor: "#285702",
		strokeWeight: 1,
		strokeOpacity: 0.75,
		fillOpacity: 1,
		fillColor: "#285702" 
	},

	campus_parks: new GeoJSON(campus_parks, {
		strokeColor: "#285702",
		strokeWeight: 1,
		strokeOpacity: 0.75,
		fillOpacity: 1,
		fillColor: "#285702" 
	}),
	
//	bike_routes: new GeoJSON(bike_routes, {
//		strokeColor: "#BA2046",
//		strokeWeight: 3,
//		strokeOpacity: 0.75,
//		fillOpacity: 1,
//		fillColor: "#BA2046" 
//	}),
//	
//	school_grounds: new GeoJSON(school_grounds, {
//		strokeColor: "#BA2046",
//		strokeWeight: 1,
//		strokeOpacity: 0.75,
//		fillOpacity: 1,
//		fillColor: "#BA2046" 
//	}),
	
	habitat: new GeoJSON(habitat, {
		strokeColor: "#285702",
		strokeWeight: 1,
		strokeOpacity: 0.75,
		fillOpacity: 1,
		fillColor: "#285702" 
	}),
	
	neighborspace: new GeoJSON(neighborspace, {
	    icon: "images/quadrifoglio.png"
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

      this.renderFeatureCollection(this.neighborspace, this.options.map);
      
//      this.renderFeatureCollection(this.school_grounds, this.options.map); // meh
//      this.renderFeatureCollection(this.bike_routes, this.options.map); // meh
      
      return this;
    }
  });
});