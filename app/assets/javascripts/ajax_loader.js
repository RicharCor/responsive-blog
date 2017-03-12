document.addEventListener("turbolinks:load", function() {
	$(document).ajaxStart(function() {
	   	$('.loading-indicator-container').fadeIn('fast');
	   	$('.loading-indicator').fadeIn('fast');
	   	$('.message-content-input').val("");
	}).ajaxStop(function() {
	    $('.loading-indicator-container').fadeOut('fast');
	    $('.loading-indicator').fadeOut('fast');
	});
});