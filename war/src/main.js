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

