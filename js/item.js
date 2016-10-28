$('#catalog li > a').click(function(e) {
	var menuId = $(this).attr('data-menu-target');
	console.log(menuId);
	if(menuId === "#catalog-menu") {
		console.log("here");
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

$(window).ready(function() {
	var arrHeight = [];
	$('#secondary-menus [id|="menu"]').each(function() {
		arrHeight.push(this.offsetHeight);
	});

	var maxHeight = Math.max(...arrHeight);
	$('#catalog').css('height', maxHeight);

});