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
	});
}

var responsiveFooter = function() {
	var footerHeight = $('footer').height();
	$('#main').css('padding-bottom', footerHeight);
}

$(window).ready(function(){
	responsiveNavbar();
	responsiveFooter();
});

$(window).resize(function() {
	responsiveNavbar();
	responsiveFooter();
});

$('#mobile-menu-button').click(function() {
	var menuId = $(this).attr('data-mobile-menu-id');
	if($(menuId).hasClass('mobile-menu-inactive')) {
		$(menuId).removeClass('mobile-menu-inactive');
		responsiveNavbar();
	} else {
		$(menuId).addClass('mobile-menu-inactive');
	}
});

