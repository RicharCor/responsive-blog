document.addEventListener("turbolinks:load", function() {
	$('document').ready(function() {
		$('#myTextarea').keyup(function () {
			var left = 50 - $(this).val().length;
			$('#counter').text('Characters left: ' + left);

			if (left < 0) {
			    $("#counter").css('color', 'red');
			    $(".save-article").removeClass("blue");  
			    $(".save-article").addClass("grey"); 
			    $(".save-article").attr('disabled', 'disabled');
			    $( ".alert" ).text( "Si sobrepasas el límite de caracteres no podrás crear el artículo" );
			} else { 
		        $("#counter").css('color', 'green'); 
			    $(".save-article").removeClass("grey");
			    $(".save-article").addClass("blue");  
			    $(".save-article").removeAttr('disabled'); 
			};

			if (left < 6 && left > -1) {
			    $("#counter").css('color', 'orange'); 
			} else {
			    $("#counter").css('color', 'none'); 
			};
		});
	}); 
});