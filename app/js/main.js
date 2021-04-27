$(function () {
	$('.burger, .header__link').on('click', function () {
		$('.header__nav').toggleClass('header__nav--active');
	})

	// $('tr').hover(function(){
	// 	$(this).toggleClass('active');
	// })
	$('.benefits__column-2').first().css("border-radius", "10px 10px 0 0");
	$('.benefits__column-2').last().css("border-radius", "0 0 10px 10px");
	$('.benefits__column-2').first().css("margin-top", "-10px");
	$('.benefits__column-2').last().css("margin-bottom", "-10px");
});