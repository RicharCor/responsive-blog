
	$('.read-more-<%= comment.id %>').on('click', function(e) {
		e.preventDefault()
		$(this).parent().html('<%= escape_javascript comment.body %>');
	});
