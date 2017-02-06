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

$(document).on('click', '.toggle-search', function(event) {
	$("#mobile-header-search").toggleClass("show-from-top");
	$("#mobile-header-search").toggleClass("display-none");
	$(".toggle-search").toggleClass("red-flat");
	$(".toggle-search i").toggleClass("fa-search");
	$(".toggle-search i").toggleClass("fa-close");
});