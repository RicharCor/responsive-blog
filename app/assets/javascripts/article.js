document.addEventListener("turbolinks:load", function() {
	$('document').ready(function() {

		var input = $('#myTextarea');
		var popo = $(input).val().length;
    	var count = 50 - popo
    	$('#counter').text('Characters left: ' + count);

        if (count < 0) {
			$("#counter").css('color', 'red');
			$(".save-article").addClass("grey"); 
			$(".save-article").attr('disabled', 'disabled');
			$( ".alert" ).text( "Si sobrepasas el límite de caracteres no podrás guardar el artículo" ); 
		} else {
		    $("#counter").css('color', 'green');
		};

		if (count < 6 && count > -1) {
			$("#counter").css('color', 'orange'); 
		} else {
			$("#counter").css('color', 'none'); 
		};

		$('#myTextarea').keyup(function () {
			var caca = $(this).val().length;
			var left = 50 - caca
			$('#counter').text('Characters left: ' + left);

			if (left < 0) {
			    $("#counter").css('color', 'red');
			    $(".save-article").removeClass("blue");  
			    $(".save-article").addClass("grey"); 
			    $(".save-article").attr('disabled', 'disabled');
			    $( ".alert" ).text( "Si sobrepasas el límite de caracteres no podrás guardar el artículo" );
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