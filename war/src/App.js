
define([
  '../data/neighborhood_little_village',
  'views/Placemaking',
  'views/IdeaCollection',
  'views/PollCollection',
  'views/AvisoCollection'
], function(LittleVillageGeoJSON, Places, IdeaCollection, PollCollection, AvisoCollection) {
  return {
	initMap: function() {
      var mapType = new google.maps.StyledMapType(
      [
        {
          featureType: "road",
          elementType: "all",
          stylers: [
            { saturation: -100 }
          ]
        },{
          featureType: "water",
          elementType: "simplified",
          stylers: [
            { saturation: -100 }
          ]
        },{
          featureType: "poi",
          elementType: "all",
          stylers: [
            { saturation: -100 }
          ]
        },{
          featureType: "landscape",
          elementType: "all",
          stylers: [
            { saturation: -100 }
          ]
        },{
          featureType: "administrative",
          elementType: "labels",
          stylers: [
            { visibility: "off" }
          ]
        },{
          featureType: "poi",
          elementType: "labels",
          stylers: [
            { visibility: "off" }
          ]
        },{
          featureType: "water",
          elementType: "labels",
          stylers: [
            { visibility: "simplified" }
          ]
        },{
          featureType: "road",
          elementType: "labels",
          stylers: [
            { visibility: "simplified" }
          ]
        }
      ], {name: "Desaturated"});
	        
      var map = new google.maps.Map(document.getElementById('map'), {
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        mapTypeControl: false,
        streetViewControl: false,
        overviewMapControl: false,
        panControl: false,
        zoomControl: true
      });
	        
      map.mapTypes.set('desat', mapType);
      map.setMapTypeId('desat');
	  
      var LittleVillage = new GeoJSON(LittleVillageGeoJSON, {
    		strokeColor: "#5470AB",
    		strokeWeight: 2,
    		strokeOpacity: 1
    	})[0];
      
      LittleVillage.setMap(map);
      map.fitBounds(LittleVillage.getBounds());
	      
      $('#mapa').live('pageshow', function(event){
        google.maps.event.trigger(map, 'resize');
        map.fitBounds(LittleVillage.getBounds());
      });
      
      return map;
	},
    
    doMap: function() {
      var m = this.initMap();
      var p = new Places({ map: m });      
    },
    
    doIdeas: function(ideas) {
      var collection = new Backbone.Collection(ideas);
      new IdeaCollection({ el: $('#Ideas'), collection: collection });
    },
    
    doPolls: function(polls) {
      var collection = new Backbone.Collection(polls);
      new PollCollection({ el: $('#Polls'), collection: collection });
    },
    
    doAviso: function(aviso) {
      var collection = new Backbone.Collection(aviso);
      new AvisoCollection({ el: $('#Aviso'), collection: collection });
    },

    start: function(ideas, polls, aviso) {   	
      this.doMap();
      this.doIdeas(ideas);
      this.doPolls(polls);
      this.doAviso(aviso);
      
      
      // new Router({
      // 
      // });
      
      //Backbone.history.start();
    }
  };
});
