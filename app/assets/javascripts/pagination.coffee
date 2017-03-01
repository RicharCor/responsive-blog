$(document).on 'turbolinks:load', ->	
	if $('.pagination').length && $('#pagination').length
		$(window).scroll ->
			url = $('.pagination .next_page').attr('href')
			if url && $(window).scrollTop() > $(document).height() - $(window).height() - 50
				$('.pagination').html('<div class="loading-more center-text"><img src="/assets/loading7.gif" /></div>')
				$.getScript(url)
		$(window).scroll()