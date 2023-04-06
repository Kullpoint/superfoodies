import Swiper from './swiper-bundle.js';

const slider = () => {
    new Swiper('#reviews-slider', {
        speed: 1200,
        loop: false,
        allowTouchMove: true,
        autoplay: false,
        breakpoints: {
            0: {
                slidesPerView: 3.7,
                spaceBetween: 20
            }
        },
        navigation: {
            prevEl: '[data-wiper-button-prev="reviews-slider"]',
            nextEl: '[data-wiper-button-next="reviews-slider"]'
        }
    });
}

slider();
