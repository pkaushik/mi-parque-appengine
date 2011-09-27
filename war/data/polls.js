define(function(){
	return [
	  {
	    "id": "1",
	    "title": "Park Name",
	    "description": "What should we name the park? Based on name submissions we are now voting on the top 3!",
	    "multiple": false,
	    "first": true,
	    "choices": [{"index": "0", "choice": "Parque de Ellen Ochoa"}, {"index": "1", "choice": "Parque de Ana Castillo"}, {"index": "2", "choice": "Parque de Frida Kahlo"}]
	  }, 
	  {
	    "id": "2",
	    "title": "El Grito Parade Theme",
	    "description": "What should be the theme for this year's El Grito parade?",
	    "multiple": true,
	    "choices": [{"index": "0", "choice":"Mi familia"},{"index": "1", "choice":"Viva la Raza"},{"index": "2", "choice":"la communidad"}]
	  }, 
	  {
	    "id": "3",
	    "title": "Reopen Museum?",
	    "description": "Should the Museum of Mexican Culture and History be reopened?",
	    "multiple": false,
	    "choices": [{"index": "0", "choice":"Yes"},{"index": "1", "choice":"No"}]
	  },
	  {
	    "id": "4",
	    "title": "Arts and Crafts Festival?",
	    "description": "Should there be an annual Arts and Crafts Festival in the park?",
	    "multiple": false,
	    "choices": [{"index": "0", "choice":"Yes"},{"index": "1", "choice":"No"}]
	  }
	]
});