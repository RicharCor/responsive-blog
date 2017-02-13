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