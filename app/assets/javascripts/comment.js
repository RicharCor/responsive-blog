document.addEventListener("turbolinks:load", function() {

	//Para el titulo del comentario
	$('document').ready(function() {

		// Esta funcion cuenta los caracteres en el input
		var input = $('#comment-title');
		var characters = $(input).val().length;
    	var count = 50 - characters
    	var btn = $(".save-comment");

    	var counter = $('#comment-title-character-counter');
    	$('#comment-title-character-counter').text('Caracteres restantes: ' + count);

        if (count == 50) {
		    counter.css('color', 'green');
		};

		// Esta funcion resta a los caracteres faltantes cuando agregas un digito
		$(input).keyup(function () {
			var characters = $(this).val().length;
			var left = 50 - characters
			var counter = $('#comment-title-character-counter');
			var btn = $(".save-comment");
			$('#comment-title-character-counter').text('Caracteres restantes: ' + left);

			if (left < 0) {
			    counter.css('color', 'red');
			    btn.removeClass("blue");  
			    btn.addClass("grey"); 
			    btn.attr('disabled', 'disabled');
			    $('#alerts').html("<div class='alert red-flat-text row col-xs-12 large-padding flex center-items'><i class='fa fa-warning col-xs-1 no-padding font-20 center-text'></i><p class='col-xs-10'>Si sobrepasas el límite de caracteres en el titulo no podrás guardar el comentario</p><div class='close-notice col-xs-1 no-padding center-text pointer'><i class='fa fa-times font-20'></i></div></div>");
			    $('document').ready(function() {
			    	$('.alert').hide().slideDown('fast');
					$('.alert').delay(2500).slideUp('fast');
				});
			} else { 
		        counter.css('color', 'green'); 
			    btn.removeClass("grey");
			    btn.addClass("blue");  
			    btn.removeAttr('disabled'); 
			};

			if (left < 6 && left > -1) {
			    counter.css('color', 'orange'); 
			} else {
			    counter.css('color', 'none'); 
			};
		});
	});

	//Para el cuerpo del comentario
	$('document').ready(function() {

		// Esta funcion cuenta los caracteres en el input
		var input = $('#comment-body');
		var characters = $(input).val().length;
    	var count = 700 - characters
    	var btn = $(".save-comment");

    	var counter = $('#comment-body-character-counter');
    	$('#comment-body-character-counter').text('Caracteres restantes: ' + count);

        if (count == 700) {
		    counter.css('color', 'green');
		};

		// Esta funcion resta a los caracteres faltantes cuando agregas un digito
		$(input).keyup(function () {
			var characters = $(this).val().length;
			var left = 700 - characters
			var counter = $('#comment-body-character-counter');
			var btn = $(".save-comment");
			$('#comment-body-character-counter').text('Caracteres restantes: ' + left);

			if (left < 0) {
			    counter.css('color', 'red');
			    btn.removeClass("blue");  
			    btn.addClass("grey"); 
			    btn.attr('disabled', 'disabled');
			    $('#alerts').html("<div class='alert red-flat-text row col-xs-12 large-padding flex center-items'><i class='fa fa-warning col-xs-1 no-padding font-20 center-text'></i><p class='col-xs-10'>Si sobrepasas el límite de caracteres en el cuerpo no podrás guardar el comentario</p><div class='close-notice col-xs-1 no-padding center-text pointer'><i class='fa fa-times font-20'></i></div></div>");
			    $('document').ready(function() {
			    	$('.alert').hide().slideDown('fast');
					$('.alert').delay(2500).slideUp('fast');
				});
			} else { 
		        counter.css('color', 'green'); 
			    btn.removeClass("grey");
			    btn.addClass("blue");  
			    btn.removeAttr('disabled'); 
			};

			if (left < 6 && left > -1) {
			    counter.css('color', 'orange'); 
			} else {
			    counter.css('color', 'none'); 
			};
		});
	});
});