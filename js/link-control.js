$('ul li a').click(function(){
    $('html, body').animate({
        scrollTop: $( $(this).attr('href') ).offset().top-50
    }, 500);
    return false;
});

$(window).scroll(function() {
        var scrollDistance = $(window).scrollTop();
		$('.section').each(function(i) {
				if ($(this).position().top <= scrollDistance + 220 ) {
                        console.log('sekcja')
						$('.menu__link--active').removeClass('menu__link--active');
						$('.menu__link').eq(i).addClass('menu__link--active');
				}
		});
}).scroll();