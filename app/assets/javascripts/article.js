document.addEventListener("turbolinks:load", function() {
	$('document').ready(function() {

		// Esta funcion cuenta los caracteres en el input
		var input = $('#article-title');
		var characters = $(input).val().length;
    	var count = 50 - characters
    	var counter = $('#article-character-counter');
    	$('#article-character-counter').text('Characters left: ' + count);

        if (count < 0) {
			counter.css('color', 'red');
			$(".save-article").addClass("grey"); 
			$(".save-article").attr('disabled', 'disabled');
			$( ".alert" ).text( "Si sobrepasas el límite de caracteres no podrás guardar el artículo" ); 
		} else {
		    counter.css('color', 'green');
		};

		if (count < 6 && count > -1) {
			counter.css('color', 'orange'); 
		} else {
			counter.css('color', 'none'); 
		};

		// Esta funcion resta a los caracteres faltantes cuando agregas un digito
		$(input).keyup(function () {
			var characters = $(this).val().length;
			var left = 50 - characters
			var counter = $('#article-character-counter');
			$('#article-character-counter').text('Characters left: ' + left);

			if (left < 0) {
			    counter.css('color', 'red');
			    $(".save-article").removeClass("blue");  
			    $(".save-article").addClass("grey"); 
			    $(".save-article").attr('disabled', 'disabled');
			    $( ".alert" ).text( "Si sobrepasas el límite de caracteres no podrás guardar el artículo" );
			} else { 
		        counter.css('color', 'green'); 
			    $(".save-article").removeClass("grey");
			    $(".save-article").addClass("blue");  
			    $(".save-article").removeAttr('disabled'); 
			};

			if (left < 6 && left > -1) {
			    counter.css('color', 'orange'); 
			} else {
			    counter.css('color', 'none'); 
			};
		});
	});
});