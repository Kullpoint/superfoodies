import Swiper from './swiper-bundle.js';

const slider = () => {
    const container = document.getElementById("heroSliderContainer");

    new Swiper('#hero-slider', {
        speed: 1200,
        loop: true,
        allowTouchMove: true,
        autoplay: true,
        delay: 5000,
        lidesPerView: 1,
        effect: 'cube',
        runCallbacksOnInit: true,
        cubeEffect: {       
            slideShadows: false,
        },
        navigation: {
            prevEl: '[data-wiper-button-prev="hero-slider"]',
            nextEl: '[data-wiper-button-next="hero-slider"]'
        },
        on: {
            init: () => {
                container.classList.remove('overflow-hidden');
            }
        },
    });
}

slider();
