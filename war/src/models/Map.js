define(function() {
  
  var map;  //a reference to the main map object  
  
  var initzoom = 8;
  var initlat = 41.849105;
  var initlon = -87.712269;

  return Backbone.Model.extend({
    
    initialize: function(attributes, options) {
      var lat = this.get("lat") || initlat;
      var lon = this.get("lon") || initlon;
      var zoom = this.get("zoom") || initzoom;
      
      var center = this.createPoint({lon: lon, lat: lat});
    
      this.el = document.getElementById(options.mapId);
        
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
        
      map = new google.maps.Map(this.el, {
        zoom: zoom,
        center: center,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        mapTypeControl: false,
        streetViewControl: false,
        overviewMapControl: false,
        panControl: false,
        zoomControl: true
      });
        
      map.mapTypes.set('desat', mapType);
      map.setMapTypeId('desat');
      
      this.set({
          map: map
      }, {silent: true});
      
      $('#mapa').live('pageshow', function(event){
        google.maps.event.trigger(map, 'resize');
      });
      
    },
  
    resetMap: function(zoom, center) {
      if (zoom) 
        this.setZoomLevel(zoom); 
      else 
        this.getZoomLevel(initzoom);
          
      if (center)
        this.setCenter(center);
      else
        this.setCenter(this.createPoint({lon: initlon, lat: initlat}));
    },
      
    getMap: function(){
      return map;
    },
    
    createPoint: function(coordinates) { //coordinates: {lon, lat} or {x,y}
      if (coordinates.lon && coordinates.lat) {
        return new google.maps.LatLng(coordinates.lat, coordinates.lon)
      }
      
      if (coordinates.x && coordinates.y) {
        return new google.maps.Point(x, y);
      }
      return null;
    },
        
    getZoomLevel : function() {
      return map.getZoom();
    },
    
    setZoomLevel : function(level) {
      return map.setZoom(level);
    },
    
    setCenter : function(point) {
      return map.setCenter(point);
    },
    
    //having 2 separate calls for esri does not work quite well (zoom at wrong location and no info bubble). I guess because of the zoom animation...
    centerAndZoom : function(point, level) {
      map.setZoom(level);
      return map.setCenter(point);
    },
    
    setExtent : function(bounds) {
      return map.fitBounds(bounds);
    }
 
  });
});