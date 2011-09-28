define([
  '../../data/gis/boulevards_little_village',
  '../../data/gis/campus_parks_little_village',
  '../../data/gis/habitat_little_village',
  '../../data/gis/mall_plaza_little_village',
  '../../data/gis/neighborspace_gardens_little_village',
  '../../data/gis/riverwalk_little_village'
], function(boulevards, campus_parks, habitat, mall_plaza, neighborspace, riverwalk) {
  return Backbone.View.extend({
	  
	boulevards: new GeoJSON(boulevards),
		
	campus_parks: new GeoJSON(campus_parks),
	
	mall_plaza: new GeoJSON(mall_plaza),
	
	neighborspace: new GeoJSON(neighborspace),
	
	riverwalk: new GeoJSON(riverwalk),
	
	initialize: function() {
	  this.render();
	  return this;
	},
	
    render: function() { 


    }
  });
});