
define([
  '../data/gis/community_south_lawndale',
  'views/GreenMapOverlay',
  'views/NeighborspaceGardensMapOverlay',
  'views/TrafficCountsMapOverlay',
  'views/AvisoMapOverlay',
  'views/ToxicMapOverlay',
  'views/IdeaCollection',
  'views/PollCollection',
  'views/AvisoCollection'
], function(
  LittleVillageGeoJSON, 
  GreenMapOverlay, 
  NeighborspaceGardensMapOverlay,
  TrafficCountsMapOverlay, 
  AvisoMapOverlay,
  ToxicMapOverlay,
  IdeaCollection, 
  PollCollection, 
  AvisoCollection
) {
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
            { hue: "#225377" }
          ]
        },{
            featureType: "poi.park",
            stylers: [
              { hue: "#285702" },
              { saturation: 100 },
              { lightness: -75 }
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
            { visibility: "simplified" }
          ]
        },{
          featureType: "poi",
          elementType: "labels",
          stylers: [
            { visibility: "simplified" }
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
            { visibility: "on" }
          ]
        }
      ], {name: "Desaturated"});
	        
      var map = new google.maps.Map(document.getElementById('map'), {
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        zoom: 10,
        center: new google.maps.LatLng(-87.712334, 41.842339),
        mapTypeControl: false,
        streetViewControl: false,
        overviewMapControl: false,
        panControl: true,
        zoomControl: true,
        zoomControlOptions: {
          style: google.maps.ZoomControlStyle.LARGE,
          position: google.maps.ControlPosition.LEFT_BOTTOM
        }
      });
	        
      map.mapTypes.set('desat', mapType);
      map.setMapTypeId('desat');
	  
      var LittleVillage = new GeoJSON(LittleVillageGeoJSON, {
		strokeColor: "#333",
		strokeWeight: 3,
		strokeOpacity: 0.75,
		fillOpacity: 0
	  })[0];
      
      LittleVillage.setMap(map);
	      
      $('#mapa').live('pageshow', function(event){
        google.maps.event.trigger(map, 'resize');
        map.fitBounds(LittleVillage.getBounds());
      });
      
      return map;
	},
    

    start: function(ideas, polls, aviso) { 
    	var map = this.initMap();
    	var avisoCollection = new Backbone.Collection(aviso);
    	
    	// Fixed overlays
        new GreenMapOverlay({ el: $("#mapa"), map: map });
        new TrafficCountsMapOverlay({ el: $("#mapa"), map: map });
        
        // Toggle-able overlays
        new NeighborspaceGardensMapOverlay({ el: $("#mapa"), map: map });
        new ToxicMapOverlay({ el: $("#mapa"), map: map });
        new AvisoMapOverlay({ el: $("#mapa"), collection: avisoCollection, map: map });
        
        // Pages
        new IdeaCollection({ el: $('#Ideas'), collection: new Backbone.Collection(ideas) });
        new PollCollection({ el: $('#Polls'), collection: new Backbone.Collection(polls) });
        new AvisoCollection({ el: $('#Aviso'), collection: avisoCollection });
        
      
      // new Router({
      // 
      // });
      
      //Backbone.history.start();
    }
  };
});
