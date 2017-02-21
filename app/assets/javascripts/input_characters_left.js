$('document').ready(function() {
	$('#myTextarea').keyup(function () {
	    var left = 200 - $(this).val().length;
	    if (left < 0) {
	        left = 0;
	    }
	    $('#counter').text('Characters left: ' + left);
	    if (left < 100) { $("#counter").css('opacity', '0.4').css('color', 'red'); $(".save-article").attr('disabled', 'disabled'); } else { $("#counter").css('opacity', '1').css('color', 'black'); $(".save-article").removeAttr('disabled'); }
        if (left < 150) { $("#counter").css('color', 'red'); } else { $("#counter").css('color', 'black'); }
	});
});