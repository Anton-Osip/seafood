$(function () {
	$('.header-slider').slick({
		dots: true,
		vertical: true,
		prevArrow: `<button rype='button' class='slick-prev'><img src="./images/prev.svg" alt=""> </button>`,
		nextArrow: `<button rype="button" class="slick-next"><img src="./images/next.svg" alt=""></button>`,
	})

	$('.product__name').slick({
		slidesToShow: 6,
		slidesToScroll: 1,
		focusOnSelect: true,
		asNavFor: '.product__content',
		vertical: true,
		prevArrow: `<button rype='button' class='product-prev'><img src="./images/product-prev.png" alt=""> </button>`,
		nextArrow: `<button rype="button" class="product-next"><img src="./images/product-next.png" alt=""></button>`,
	})
	$('.product__content').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		asNavFor: '.product__name',
		fade: true,
		arrows: false,
	})
})
