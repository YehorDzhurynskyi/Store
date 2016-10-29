$('#catalog li > .menu-link').click(function(e) {
	var menuId = $(this).attr('data-menu-target');
	var catalogHeight = $(menuId).height();
	$('#catalog').css('height', catalogHeight);
	if(menuId === "#catalog-menu") {
		$(this).parents('div [id*="menu"]').css({
			'left': '105%',
			'right': '-105%',
		});
		$(menuId).css({
			'right': 0,
			'left': 0,
		});
	} else {
		$('#catalog ol').css({
			'right': '105%',
			'left': '-105%',
		});

		$(menuId).css({
			'right': 0,
			'left': 0,
		});
	}
});
