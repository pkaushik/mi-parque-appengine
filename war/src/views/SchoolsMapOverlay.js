define([
//  '../../data/gis/school_grounds_little_village',
  '../../data/gis/private_schools_little_village',
  '../../data/gis/public_schools_little_village'
], function(/*school_grounds,*/ private_schools, public_schools) {
  return Backbone.View.extend({
//	school_grounds: null,
	
	public_schools: null,
	
	private_schools: null,
	
	dotter: null,
	
	legendDotter: null,
	
	initialize: function() {
	  if (typeof google === 'undefined') return this;
	  
	  this.dotter = new Dotter(4);
	  this.legendDotter = new Dotter(7);
	  
	  this.el.find(".dot2716C4").append("<img src=\"" + this.legendDotter.getDot("#2716C4") + "\"/>");
	  this.el.find(".dot5193C9").append("<img src=\"" + this.legendDotter.getDot("#5193C9") + "\"/>");
	  
//	  this.school_grounds = new GeoJSON(school_grounds, {
//		strokeColor: "#531BE0",
//		strokeWeight: 1,
//		strokeOpacity: 0.75,
//		fillOpacity: 1,
//		fillColor: "#531BE0" 
//	  });
	  
	  this.public_schools = new GeoJSON(public_schools, {
		icon: this.dotter.getDot('#2716C4')
	  });
	  
	  this.private_schools = new GeoJSON(private_schools, {
		icon: this.dotter.getDot('#5193C9')
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
      //this.renderFeatureCollection(this.school_grounds, this.options.map);
      this.renderFeatureCollection(this.private_schools, this.options.map);
      this.renderFeatureCollection(this.public_schools, this.options.map);
      
      return this;
    }
  });
});