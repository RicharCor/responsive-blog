$('document').ready(function() {
	$('#myTextarea').keyup(function () {
	    var left = 50 - $(this).val().length;
	    $('#counter').text('Characters left: ' + left);

	    if (left < 0) {
	    	$("#counter").css('color', 'red'); 
	    	$(".save-article").addClass("grey"); 
	    	$(".save-article").attr('disabled', 'disabled');
	    	$( ".alert" ).text( "<b>Some</b> new text." );
	    } else { 
        	$("#counter").css('color', 'green'); 
	    	$(".save-article").removeClass("grey");  
	    	$(".save-article").removeAttr('disabled'); 
	    };

	    if (left < 6 && left > -1) {
	    	$("#counter").css('color', 'yellow'); 

	    } else {
	    	$("#counter").css('color', 'none'); 
	    };
	});
});