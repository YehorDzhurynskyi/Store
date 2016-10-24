var responsiveNavbar = function() {
	if($(window).width() > 550) {
		$('.mobile-nav').css('width', function() {
			return $(window).width() / 3;
		});
	} else {
		$('.mobile-nav').css('width', function() {
			return $(window).width() * 2 / 3;
		});
	}
	$('.mobile-nav .icons .icon').css({
		width: function() {
			return $('.mobile-nav .icons').width() / $('.mobile-nav .icons .icon').length;
		}
	}).parent().find('.cabinet .after').css('left', function() {
		return ($('.mobile-nav .icons .icon').width() - 43) / 1.941176;
	}).end().find('.cart .after').css('left', function() {
		return ($('.mobile-nav .icons .icon').width() - 43) / 1.941176 + 12;
	});
}

$(window).ready(function(){
	$('#sliderbar .carousel').carousel({
		pause: null,
		timeout: $(this).attr('data-timeout')
	});

	responsiveNavbar();
});

$(document).blur(function(){
	$('#sliderbar .carousel').carousel('pause');
});

$(document).focus(function(){
	$('#sliderbar .carousel').carousel('prev').carousel(true);
});

$(window).resize(function() {
	responsiveNavbar();
});

$('.mobile-nav').resize(function() {
	responsiveNavbar();
});

$('#mobile-menu-button').click(function() {
	var menuId = $(this).attr('data-mobile-menu-id');
	if($(menuId).hasClass('mobile-menu-inactive')) {
		$(menuId).removeClass('mobile-menu-inactive');
	} else {
		$(menuId).addClass('mobile-menu-inactive');
	}
});

