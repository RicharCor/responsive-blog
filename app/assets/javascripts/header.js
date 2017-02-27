document.addEventListener("turbolinks:load", function() {	
    $(".children-user").mouseover(function(){
        $(".user-icon").css("color", "white"); 
    });
    $(".children-user").mouseleave(function(){
       	$(".user-icon").css("color", "#bdc3c7");
	});

    $(".header-search").focusin(function(){
        $(".header-submit").css("color", "white"); 
    });
    $(".header-search").focusout(function(){
       	$(".header-submit").css("color", "#bdc3c7");
	});
});

//----------------------------------------------------------------------------------------------------------------------------------------
//Comienzan los scripts del header en mobile

$(document).on('click', '.toggle', function(event){
    $(".header").toggleClass("show-from-left");
    $(".toggle-header").toggleClass("red-flat");
});

$(document).on('click', '.toggle-user', function(event){
    $(".header-user").toggleClass("show-from-right");
    $(".toggle-user").toggleClass("red-flat");
    $(".toggle-user i").toggleClass("fa-user");
    $(".toggle-user i").toggleClass("fa-close");
});

$(document).on('click', '.toggle-search', function(event){
    $("#mobile-header-search").toggleClass("show-from-top");
    $("#mobile-header-search").toggleClass("display-none");
    $(".toggle-search").toggleClass("red-flat");
    $(".toggle-search i").toggleClass("fa-search");
    $(".toggle-search i").toggleClass("fa-close");
});