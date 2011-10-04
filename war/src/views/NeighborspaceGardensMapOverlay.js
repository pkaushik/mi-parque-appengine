define([
  '../../data/gis/neighborspace_gardens'
], function(neighborspace) {
  return Backbone.View.extend({
    rendered: false,
  
	neighborspace: new GeoJSON(neighborspace, {
	    icon: "images/quadrifoglio.png"
	}),
	
	initialize: function() {
	  this.render();
	  return this;
	},
	
    render: function() { 
      this.doFeatureCollection(this.neighborspace, this.options.map);
      this.rendered = true;
      return this;
    },
    
    remove: function() {
      this.doFeatureCollection(this.neighborspace, null);
  	  this.rendered = false;
  	  return this;
    },
      
    toggle: function() {
      if (this.rendered) {
      	this.remove();
      }	else {
      	this.render();
      }
    },
    
    // obj can be null to remove
	doFeatureCollection: function(collection, obj) {
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