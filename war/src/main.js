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

FB.init({
	appId : '281417341887864',
	cookie : true,
	status : true,
	xfbml : true
});

FB.getLoginStatus(function(response) {
	// if we dont have a session, just hide the user info
	if (!response.session) {
		$("#welcome").hide('fast');
		// additionally, if status is not known, hide the login buttons with all social plugins
		if (response.status === "unknown") {
			$(".facebook-auto-login-button").addClass(
					"hide-auto-login-button");
		}
		return;
	}

	// hide the login button if the user is already connected to the app
	if (response.status === "connected") {
		$("#login-button").hide('fast');
	}

	$(".facebook-show-when-logged-in").show('fast');

	// if we have a session, query for the user's profile picture and name
	FB.api('/me', function(user) {
		if (user) {
			$('#name').html(", " + user.name);
		}
	});
});


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
});


require({
	urlArgs : "bust=" + (new Date()).getTime() // for cache busting when running off file system
}, [ 'App', '../data/ideas', '../data/polls', '../data/aviso' ], function(App,
		ideas, polls, aviso) {
	
	App.start(ideas, polls, aviso);
	
	$.mobile.activePage.trigger('create');
});

