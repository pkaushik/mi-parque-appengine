define([
  '../../data/gis/boulevards_little_village',
  '../../data/gis/campus_parks_little_village',
  '../../data/gis/habitat_little_village',
  '../../data/gis/mall_plaza_little_village',
  '../../data/gis/neighborspace_gardens_little_village',
  '../../data/gis/riverwalk_little_village',
  '../../data/gis/mi_parque'
], function(boulevards, campus_parks, habitat, mall_plaza, neighborspace, riverwalk, miparque) {
  return Backbone.View.extend({
	googleOptions: {
		strokeColor: "#285702",
		strokeWeight: 1,
		strokeOpacity: 0.75,
		fillOpacity: 1,
		fillColor: "#285702" 
	},
	  
	boulevards: new GeoJSON(boulevards, {
		strokeColor: "#285702",
		strokeWeight: 1,
		strokeOpacity: 0.75,
		fillOpacity: 1,
		fillColor: "#285702" 
	}),

	campus_parks: new GeoJSON(campus_parks, {
		strokeColor: "#285702",
		strokeWeight: 1,
		strokeOpacity: 0.75,
		fillOpacity: 1,
		fillColor: "#285702" 
	}),
	
	mall_plaza: new GeoJSON(mall_plaza, {
		strokeColor: "#285702",
		strokeWeight: 1,
		strokeOpacity: 0.75,
		fillOpacity: 1,
		fillColor: "#285702" 
	}),
	
//	neighborspace: new GeoJSON(neighborspace, {
//		strokeColor: "#285702",
//		strokeWeight: 1,
//		strokeOpacity: 0.75,
//		fillOpacity: 1,
//		fillColor: "#285702" 
//	}),
	
	miparque: new GeoJSON(miparque, {
		strokeColor: "#56A00E",
		strokeWeight: 1,
		strokeOpacity: 0.75,
		fillOpacity: 1,
		fillColor: "#56A00E" 
	}),
	
//	riverwalk: new GeoJSON(riverwalk, {
//		strokeColor: "#285702",
//		strokeWeight: 3,
//		strokeOpacity: 0.75
//	}),
	
	initialize: function() {
	  this.render();
	  return this;
	},
	
	renderFeatureCollection: function(collection, map) {
	  if (collection.length) {
	    _(collection).each(function(feature){
    	  if (feature.length) {
    		_(feature).each(function(f){
    			f.setMap(map)
    		}); 
    	  } else {
    		 feature.setMap(map); 
    	  }
	    });  
	  } else {
		collection.setMap(map);
	  }
	},
	
    render: function() { 
      this.renderFeatureCollection(this.boulevards[0], this.options.map);
      this.renderFeatureCollection(this.campus_parks, this.options.map);
      this.renderFeatureCollection(this.mall_plaza, this.options.map);
      //this.renderFeatureCollection(this.neighborspace, this.options.map);
      //this.renderFeatureCollection(this.riverwalk, this.options.map);
      this.renderFeatureCollection(this.miparque, this.options.map);
    }
  });
});