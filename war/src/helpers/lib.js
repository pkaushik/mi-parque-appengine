 

// true if the app is running in an iPad  
var iPad = navigator.userAgent.match(/iPad/i) != null;

// Create a prototype method in Polygon to return its bounds
if (typeof google !== "undefined") {
  if (!google.maps.Polygon.prototype.getBounds) {
    google.maps.Polygon.prototype.getBounds = function(latLng) {
      var bounds = new google.maps.LatLngBounds();
      var paths = this.getPaths();
      var path;
  
      for (var p = 0; p < paths.getLength(); p++) {
        path = paths.getAt(p);
        for (var i = 0; i < path.getLength(); i++) {
          bounds.extend(path.getAt(i));
        }
      }
      return bounds;
    }
  }
}

// If a schema property is defined on a model, use JSON-schema validation by default.
Backbone.Model.prototype.validate = function(attributes) {
  if (!this.schema || !this.schema.properties)
      return;
      
  // Do a custom check for required properties, (e.g. do not allow an empty string to validate against a required property.)
  for (var key in attributes) {
    if (this.schema.properties[key]) {
      var property = this.schema.properties[key];
      var value = attributes[key];
      if (!value && property.required) {
        console.log('Validation failed: ' + (property.title || key) + ' is required. ID: ' + attributes.id);
        return (property.title || key) + ' is required.';
      }
    }
  }
}

   