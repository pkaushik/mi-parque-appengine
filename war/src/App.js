
define([
  'models/Map',
  'views/IdeaCollection',
  'views/PollCollection',
  'views/AvisoCollection'
], function(Map, IdeaCollection, PollCollection, AvisoCollection) {
  return {
    map: "",
    
    doMap: function() {
      this.map = new Map({}, { mapId: 'map' });
      
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
console.log(aviso)    	
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
