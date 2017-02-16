$(document).on "change", ".remotipart", (ev)->
	$(this).parent().parent().submit()