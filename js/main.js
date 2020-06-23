$(document).ready(function () {
	$('.files-img').slick({
		dots: true,
		speed: 500,
		easing: 'ease',
		centerMode: true,
		variableWidth: true
	});

	$('.pasport-btn').click(function() {
		$('main').css('filter','blur(5px)');
		$('.pasport-popup').fadeIn();
		$('.pasport-popup').addClass('.active');
	});

	$('.attestat-btn').click(function() {
		$('main').css('filter','blur(5px)');
		$('.attestat-popup').fadeIn();
		$('.attestat-popup').addClass('.active');
	});

	$('.snils-btn').click(function() {
		$('main').css('filter','blur(5px)');
		$('.snils-popup').fadeIn();
		$('.snils-popup').addClass('.active');
	});

	$('.close').click(function() {
		$('.popup').fadeOut();
		$('main').css('filter','none');
	});

	$(document).mouseup(function (e) {
		var popup = $('.popup');
		if (e.target!=popup[0]&&popup.has(e.target).length === 0) {
			$('.popup').fadeOut();
			$('main').css('filter','none');
		}
	});

	$('.porfolio-slider').slick({
		slidesToShow: 3,
 		slidesToScroll: 1,
  		dots: true,
	});
});