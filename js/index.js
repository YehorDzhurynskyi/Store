$(window).ready(function(){
	$('#sliderbar .carousel').carousel({
		pause: null,
		timeout: $(this).attr('data-timeout')
	});
});

$(document).blur(function(){
	$('#sliderbar .carousel').carousel('prev').carousel('pause');
});

$(document).focus(function(){
	$('#sliderbar .carousel').carousel(true);
});
