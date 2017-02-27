document.addEventListener("turbolinks:load", function() {
	$('document').ready(function() {
		$('.notice').hide().slideDown('fast').delay(3000).slideUp('fast');
	});

	$(document).on('click', '.close-notice', function(event) {
		$(".notice").fadeOut('fast');
	});

	//----------------------------------------------------------------------------------------------------------------------------------------

	$('document').ready(function() {
	   	$('.alert').hide().slideDown('fast').delay(3500).slideUp('fast');
	});

	$(document).on('click', '.close-alert', function(event) {
		$(".alert").fadeOut('fast');
	});
});