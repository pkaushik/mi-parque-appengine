define(function(){
	return [
	  {
	    "id": "1",
	    "title": "Park Name",
	    "description": "What should we name the park? Based on name submissions we are now voting on the top 3!",
	    "multiple": false,
	    "first": true,
	    "choices": [
	       {"index": "0", "choice": "Parque Marentes", "detail": "labor organizer, farm worker and environmental justice advocate"}, 
	       {"index": "1", "choice": "Parque Cisneros", "detail": "Chicago born Chicana writer and author of the House on Mango Street"}, 
	       {"index": "2", "choice": "Parque Castillo", "detail": "Mexican-American Chicana novelist, poet, short story writer, and essayist"},
	       {"index": "3", "choice": "Parque Sarate", "detail": "Director of Little Village Community Development Corporation"}
	     ]
	  },
	  {
	    "id": "2",
	    "title": "Cage Free Chicken Coops?",
	    "description": "City Farm has set up cage free chicken coops at their urban farm. Do you think people in Little Village should be allowed to have cage free chicken coops in their backyards?",
	    "multiple": true,
	    "choices": [{"index": "0", "choice":"Mi familia"},{"index": "1", "choice":"Viva la Raza"},{"index": "2", "choice":"la communidad"}]
	  }, 
	  {
	    "id": "3",
	    "title": "Help Reopen Cafe Catedral?",
	    "description": "Cafe Catedral recently had to close because of the bad economy. Do you think the community and alderman should work together to get it re-opened?",
	    "multiple": false,
	    "choices": [{"index": "0", "choice":"Yes"},{"index": "1", "choice":"No"}]
	  }, 
	  {
	    "id": "4",
	    "title": "Asthma Van",
		"description": "If you child has asthma or breathing problems, how often does your child needed to be treated by the asthma van at school?",
		"multiple": false,
		"choices": [{"index": "0", "choice": "Once a week or more"}, {"index": "1", "choice": "Once a month or more"}, {"index": "2", "choice": "Once every few months"}, {"index": "3", "choice": "Once or twice a year"}]
      },
	  {
	    "id": "5",
	    "title": "Plots for Elementary Schools?",
	    "description": "Do you think that our neighborhood elementary schools should have plots in the new community garden in Mi Parque?",
	    "multiple": false,
	    "choices": [{"index": "0", "choice":"Yes"},{"index": "1", "choice":"No"}]
	  }
	]
});