$(function() {
	$('.jcarousel')
		.on('jcarousel:create jcarousel:reload', function() {
			var element = $(this);
			var width = element.innerWidth();
			element.jcarousel('items').css('width', width + 'px');
		})
		.jcarousel({
			vertical: true,
			animation: 'slow',
			wrap: 'circular'
		});

	$('.jcarousel-prev').jcarouselControl({
		target: '-=1'
	});

	$('.jcarousel-next').jcarouselControl({
		target: '+=1'
	});
});