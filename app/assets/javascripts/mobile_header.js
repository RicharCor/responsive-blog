$(document).on('click', '.toggle', function(event) {
	$(".header").toggleClass("show-from-left");
	$(".toggle-header").toggleClass("red-flat");
});

$(document).on('click', '.toggle-user', function(event) {
	$(".header-user").toggleClass("show-from-right");
	$(".toggle-user").toggleClass("red-flat");
	$(".toggle-user i").toggleClass("fa-user");
	$(".toggle-user i").toggleClass("fa-close");
});