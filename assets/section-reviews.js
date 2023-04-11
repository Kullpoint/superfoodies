import Swiper from './swiper-bundle.js';

const slider = () => {
    new Swiper('#reviews-slider', {
        speed: 1200,
        loop: false,
        allowTouchMove: true,
        autoplay: false,
        spaceBetween: 20,
        breakpoints: {
            0: {
                slidesPerView: 1.1
            },
            577: {
                slidesPerView: 1.9
            },
            769: {
                slidesPerView: 2.7
            },
            992: {
                slidesPerView: 3.7
            }
        },
        navigation: {
            prevEl: '[data-wiper-button-prev="reviews-slider"]',
            nextEl: '[data-wiper-button-next="reviews-slider"]'
        }
    });
}

slider();
