$ ->
		$(window).scroll ->
			url = $('.paginaiton .next_page').attr('href')
			if url && $(window).scrollTop() > $(document).height() - $(window).height() - 50
				$('.pagination').text("Loading more...")
				$.getScript(url)
		$(window).scroll()