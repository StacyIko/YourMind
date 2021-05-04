$(function () {
	$('.burger, .header__link').on('click', function () {
		$('.header__nav').toggleClass('header__nav--active');
	})

	$('.reviews__items').slick({
		arrows: false,
		responsive: [{
			breakpoint: 768,
			settings: {
				draggable: true,
				dots: true
			}
		}]
	});

	$('#prev').on('click', function () {
		$('.reviews__items').slick('slickPrev');
	});
	$('#next').on('click', function () {
		$('.reviews__items').slick('slickNext');
	});
	// $('tr').hover(function(){
	// 	$(this).toggleClass('active');
	// })
	$('.benefits__column-2').first().css("border-radius", "10px 10px 0 0");
	$('.benefits__column-2').last().css("border-radius", "0 0 10px 10px");
	$('.benefits__column-2').first().css("margin-top", "-10px");
	$('.benefits__column-2').last().css("margin-bottom", "-10px");

  $(".reviews__stars").rateYo({
		// rating: 3.6,
   	normalFill: "#d6d6d6",
		ratedFill: "#ffd011",
		starWidth: "16px",
		spacing: "10px",
		readOnly: true
  });

	$(".faq__header-link").on("click", function(e){
		e.preventDefault();
		$(".faq__header-link").removeClass("faq__header-link--active");
		$(this).addClass("faq__header-link--active");

		$(".faq__content-item").removeClass("faq__content-item--active");
		$($(this).attr('href')).addClass("faq__content-item--active");
	})

	$(".faq__heading").on("click", function(e){
		e.preventDefault();
		$(this).toggleClass("faq__heading--active").next().slideToggle(300);
	})

	$(".faq__heading--active").next().css("display", "block");

	$(".btn-view").on("click", function(){
		$(this).prev().children(".faq__question--hidden").slideToggle(300);
		$(this).text(function(i, text) {
    	return text === "View all questions" ? "Hide questions" : "View all questions";
  	})
	})

		// плавный скролл
	$(".header__nav a, .go-top").on("click", function (event) {
		event.preventDefault();
		var id = $(this).attr('href'),
			top = $(id).offset().top;
		$('body,html').animate({ scrollTop: top }, 1000);
	});
});