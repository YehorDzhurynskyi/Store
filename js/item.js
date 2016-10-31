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

$('#image-modal').on('show.bs.modal', function (event) {
	var button = $(event.relatedTarget);
	var source = button.data('source');
	var modal = $(this);
	modal.find('.modal-image').append('<img src="' + source + '" alt="img" style="max-width: 100%; height-auto">');
});

$('#image-modal').on('hidden.bs.modal', function() {
	var modal = $(this);
	modal.find('.modal-image img').remove();
});