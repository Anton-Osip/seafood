$(function () {
	$('.header-slider').slick({
		dots: true,
		vertical: true,
		prevArrow: `<button rype='button' class='slick-prev'><img src="./images/prev.svg" alt=""> </button>`,
		nextArrow: `<button rype="button" class="slick-next"><img src="./images/next.svg" alt=""></button>`,
		responsive: [
			{
				breakpoint: 371,
				settings: {
					dots: false,
					arrows: false,
					autoplay: true,
					autoplaySpeed: 2000,
					vertical: false,
				},
			},
		],
	})

	$('.product__name').slick({
		slidesToShow: 6,
		slidesToScroll: 1,
		focusOnSelect: true,
		asNavFor: '.product__content',
		vertical: true,
		prevArrow: `<button rype='button' class='product-prev'><img src="./images/product-prev.png" alt=""> </button>`,
		nextArrow: `<button rype="button" class="product-next"><img src="./images/product-next.png" alt=""></button>`,
		responsive: [
			{
				breakpoint: 891,
				settings: {
					vertical: false,
					slidesToShow: 3,
					arrows: false,
					dots: true,
				},
			},
			{
				breakpoint: 461,
				settings: {
					slidesToShow: 1,
					arrows: false,
					vertical: false,
					dots: true,
				},
			},
		],
	})
	$('.product__content').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		asNavFor: '.product__name',
		fade: true,
		arrows: false,
	})
	$('.menu__btn').on('click', function () {
		$('.menu__list').toggleClass('menu__list--active')
	})
})
