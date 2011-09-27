
define([
  'models/Map',
  'views/IdeaCollection',
  'views/PollCollection'
], function(Map, IdeaCollection, PollCollection) {
  return {
    map: "",
    
    doMap: function() {
      this.map = new Map({}, { mapId: 'map' });
      
    },
    
    doIdeas: function(ideas) {
      var ideas = new Backbone.Collection(ideas);
      new IdeaCollection({ el: $('#Ideas'), collection: ideas });
    },
    
    doPolls: function(polls) {
      var polls = new Backbone.Collection(polls);
      new PollCollection({ el: $('#Polls'), collection: polls });
    },

    start: function(ideas, polls) {
    	
      this.doMap();
      this.doIdeas(ideas);
      this.doPolls(polls);
      
      
      // new Router({
      // 
      // });
      
      //Backbone.history.start();
    }
  };
});
