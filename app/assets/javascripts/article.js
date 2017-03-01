document.addEventListener("turbolinks:load", function() {
	$('document').ready(function() {

		// Esta funcion cuenta los caracteres en el input
		var input = $('#article-title');
		var characters = $(input).val().length;
    	var count = 50 - characters
    	var btn = $(".save-article");

    	var counter = $('#article-character-counter');
    	$('#article-character-counter').text('Characters left: ' + count);

        if (count < 0) {
			counter.css('color', 'red');
			btn.addClass("grey"); 
			btn.attr('disabled', 'disabled');
			$('#alerts').html("<div class='alert red-flat-text'><i class='fa fa-times-circle large-margin-right'></i>Si sobrepasas el límite de caracteres no podrás guardar el artículo<div class='close-alert right pointer'><i class='fa fa-times'></i></div></div>"); 
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
			var btn = $(".save-article");
			$('#article-character-counter').text('Characters left: ' + left);

			if (left < 0) {
			    counter.css('color', 'red');
			    btn.removeClass("blue");  
			    btn.addClass("grey"); 
			    btn.attr('disabled', 'disabled');
			    $('#alerts').html("<div class='alert red-flat-text'><i class='fa fa-times-circle large-margin-right'></i>Si sobrepasas el límite de caracteres no podrás guardar el artículo<div class='close-alert right pointer'><i class='fa fa-times'></i></div></div>");
			    $('document').ready(function() {
			    	$('.alert').hide().slideDown('fast');
					$('.alert').delay(3500).slideUp('fast');
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