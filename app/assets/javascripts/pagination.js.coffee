$(document).on 'turbolinks:load', ->	
	if $('.pagination').length && $('#pagination').length
		$(window).scroll ->
			url = $('.pagination .next_page').attr('href')
			if url && $(window).scrollTop() > $(document).height() - $(window).height() - 50
				$('.pagination').html("<div class='center-text'><img src='assets/aa.png' class='cacas' /><div class='mobile-font'>Loading more...</div></div>")
				$.getScript(url)
		$(window).scroll()