import Swiper from './swiper-bundle.js';

const slider = () => {
    new Swiper('#hero-slider', {
        speed: 1200,
        loop: true,
        allowTouchMove: true,
        autoplay: true,
        delay: 5000,
        lidesPerView: 1,
        effect: 'cube',
        cubeEffect: {   
            slideShadows: false,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        }
    });
}

slider();
