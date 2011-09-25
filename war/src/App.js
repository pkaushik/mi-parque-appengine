
define([
  'models/Map',
  'views/IdeaCollection'
], function(Map, IdeaCollection) {
  return {
    map: "",
    
    doIdeas: function(ideas) {
      var ideas = new Backbone.Collection(ideas);
      new IdeaCollection({ el: $('#Ideas'), collection: ideas });
    },

    start: function(ideas) {
      this.map = new Map({}, { mapId: 'map' });
      
      this.doIdeas(ideas);
      
      
      
      // new Router({
      // 
      // });
      
      //Backbone.history.start();
    }
  };
});
