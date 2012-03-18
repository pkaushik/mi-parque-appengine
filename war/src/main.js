// Some preliminary global setup

function setDefaultTransition() {
	var winwidth = $(window).width(), trans = "slide";

	if (winwidth >= 1000) {
		trans = "none";
	} else if (winwidth >= 650) {
		trans = "fade";
	}

	$.mobile.defaultPageTransition = trans;
}

function scrollToBottom() {
	$.mobile.silentScroll($(document).height());
}

function postPoll(id, title, choice) {
	var verb = '/me/miparque:voice';
	var poll_url = 'http://mi-parque.appspot.com/pages/polls/';
	var token = 'AAADZC8pSyZAXgBANTS4LWmpU6ssNYjK7whHGwRTdFlGpKgLWhkThADqZAXEviNfUvfaoGY03G7TxQcZCEE8Fy5vXiWFNMGknvIq0tXWrQTn3O3Ek87Y6';
	var path = convertToSlug([ id, title ].join(" "));
	var slug = convertToSlug([ choice ].join(" "));
	var og_action = verb + '&access_token=' + token + '&poll=' + poll_url
			+ path + '/' + slug + '.html';

	console.log(og_action);
	FB.api(og_action, 'post', function(response) {
		if (!response || response.error) {
			console.log(response);
		} else {
			console.log('It worked. id: ' + response.id);
		}
	});
}


$('#idea').live('pagecreate', function(event) {
	$('#idea').trigger('create');
});

$('#aviso').live('pagecreate', function(event) {
	$('#aviso').trigger('create');
});

$('#voto').live('pagecreate', function(event) {
	$('#voto').trigger('create');
});


$(function() {
	setDefaultTransition();
	$(window).bind("throttledresize", setDefaultTransition);

	$("#listideas").click(function(){
		$("#AddIdea").hide();
		$("#Ideas").show();
	});
	$("#addidea").click(function(){
		$("#Ideas").hide();
		$("#AddIdea").show();
	});


	$('#listideas').trigger('click');
});


require({
	urlArgs : "bust=" + (new Date()).getTime() // for cache busting when running off file system
}, [ 'App', '../data/polls', '../data/aviso' ], function(App,polls, aviso) {


    var ideas;
	$.get('/idea/get?statusFilter=1', function(data)
	{
		App.start(data, polls, aviso);
	});



	$.mobile.activePage.trigger('create');
});

