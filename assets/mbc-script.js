$(document).ready(() => {
	function sliders() {
		$('.promo__slider').slick({
			arrows: false,
			dots: true,
		});
		$('.product__gallery-big').slick({
			arrows: false,
			dots: false,
			slidesToShow: 1,
			slidesToScroll: 1,
			asNavFor: '.product__gallery-small',
			fade: true
		});
		$('.product__gallery-small').slick({
			asNavFor: '.product__gallery-big',
		  	slidesToShow: 5,
			slidesToScroll: 1,
			arrows: true,
			variableWidth: true,
			centerMode: false,
			focusOnSelect: false,
			initialSlide: 1,
			prevArrow: '<div class="slick-prev" style="position:absolute;height:100%;width:28%;top:0;left:0;z-index:99;"></div>',
			nextArrow: '<div class="slick-prev" style="position:absolute;height:100%;width:72%;top:0;right:0;z-index:99;"></div>'
		})
		// $('.product__gallery-small .slick-slide').on('click', function (event) {
		// 	$('.product__gallery-big').slick('slickGoTo', $(this).data('slickIndex'));
		// });
	}
	
	function checkSlickNoSlide() {
		var elm = $('.product__gallery-small'),
				getSlick = elm.slick('getSlick');
	
		if(getSlick.slideCount <= getSlick.options.slidesToShow) {
			elm.addClass('slick-no-slide');
		}
		else {
			elm.removeClass('slick-no-slide');
		}
	}

	function videoPopup() {
		$('.videos__item').magnificPopup({
			disableOn: 700,
			type: 'iframe',
			mainClass: 'mfp-fade',
			removalDelay: 160,
			preloader: false,

			fixedContentPos: false
		});
	}

	function addToCart() {
		$('.btn[data-action="add-to-cart"]').click(function(e) {
			let form = $(this).closest('form');
			e.preventDefault();
			$.ajax({
				url: '/cart/add',
				data: form.serialize(),
				success: function( response ) {

				}
			})
		})
	}

	function cookieBar() {
		if(localStorage.getItem('cookie-hidden') !== 'true') $('.cookie').attr('aria-hidden', 'false');
		$('.cookie-bar__button').click(() => {
			localStorage.setItem('cookie-hidden', 'true');
			$('.cookie').attr('aria-hidden', 'true');
		})
	}

	function productTabs() {
		$('.product__tab-title').click(function(e) {
			let tab = $(this).closest('.product__tab');
			let tabIndex = tab.attr('data-index');
			tab.toggleClass('active');
			tab.find('.product__tab-content').slideToggle();
		})
	}

	function select() {
		$('.value-picker__choice-item').on('click', function() {
			$('.value-picker__choice-item').removeClass('is-selected');
			$(this).addClass('is-selected')
			console.log($(this))
		})
	}

	function newAddress() {
		$('.new-address-btn').click(function() {
			$('.new-address').slideDown()
			$(this).hide()
		})
	}

	function blog() {
		$('.blog__load-more').click(function() {
			$(this).closest('.col-6').hide();
			$('.blog__articles').find('.d-none').removeClass('d-none');
		})
		$('.blog__tags-title').click(function() {
			if($(window).width() < 768) {
				$(this).toggleClass('active');
				$(this).siblings('.blog__tags-list').slideToggle();
			}
		})
	}

	function newAddress() {
		$('.new-address-btn').click(function() {
			$('.new-address').slideDown()
			$(this).hide()
		})
	}

	function filters() {
		$('.collection__filter-checkbox .checkbox').on('click', function() {
			$('.checkbox-wrapper').removeClass('selected')
			$(this).hasClass('is-selected') ? $(this).parent().removeClass('selected') : $(this).parent().addClass('selected')
		})
	}

	function setPopupIconPosition() {
		let iconPosition = 0
		const $angle     = $('.icon--nav-triangle-borderless')

		if(window.innerWidth < 641) {
			iconPosition = $('.header__login').offset().left
			$angle.css('left', (iconPosition - 20))
			$(window).on('resize', function() {
				iconPosition = $('.header__login').offset().left
				$angle.css('left', (iconPosition))
				console.log(iconPosition)
			})
		}
	}

	function load_quantity_controls(){

		$('.quantity-controls button.qty-plus').off();

		$(document).on('click', '.quantity-controls button.qty-plus', function(e) {
		// $('.quantity-controls button.qty-plus').off().on('click', function(e){
			e.preventDefault();
			let qtyInput = $('input.quantity-selector');
			let newQty = parseInt(qtyInput.val()) + 1;
			qtyInput.each(function(index,item){ $(item).val(newQty) });
		});

		$('.quantity-controls button.qty-minus').off();
		$(document).on('click', '.quantity-controls button.qty-minus', function(e) {
		// $('.quantity-controls button.qty-minus').off().on('click', function(e){
			e.preventDefault();
			let qtyInput = $('input.quantity-selector');
			let newQty = (parseInt(qtyInput.val()) - 1 < 1) ? 1 : qtyInput.val() - 1;
			qtyInput.each(function(index,item){ $(item).val(newQty) });
		});
	}

	function subscription() {

		var templateBlock = $('.product-form__info-list');
		var templateButton = $('.product-form__add-button');

		let timerId = setInterval(() => {

			if ($('#rc_container').length) {
				clearInterval(timerId);
				
				$('.product-form__info-list').addClass('hide');

				templateBlock.clone().appendTo('.rc_block__type__onetime').removeClass('hide');

				templateButton.eq(0).clone().appendTo('.rc_block__type__autodeliver');

				// templateBlock.remove();

				$('.product__features').addClass('subsciption_enabled')
			}
		}, 500);
	}

	function reviews() {
		// spr-review-header-byline
	}
	
	function focusOnLoginInput() {
		$('.header__account-icon').on('click', function() {
			if($(this).data('aria-expanded', true)) {
				$('#login-customer[email]').focus()
			}
		})
	}

	cookieBar();
	// sliders();
	videoPopup();
	// addToCart();
	productTabs();
	// select();
	newAddress();
	blog();
	filters();
	setPopupIconPosition();
	load_quantity_controls();
	subscription();
	reviews();
	focusOnLoginInput();
	// checkSlickNoSlide();
})

