import Swiper from 'swiper/bundle';

const sliderLogic = () => {
    const sliders = document.querySelectorAll('[data-pwi-slider]');
    
    for (const slider of sliders) {
        if (!slider.classList.contains('initialized')) {
            const container = slider.querySelector('[data-swiper-container]');

            new Swiper(container, {
                speed: 1200,
                loop: false,
                allowTouchMove: true,
                autoplay: false,
                breakpoints: {
                    0: {
                        slidesPerView: 1
                    },
                    577: {
                        slidesPerView: 2
                    },
                    769: {
                        slidesPerView: 3
                    }
                },
                navigation: {
                    prevEl: `[data-wiper-button-prev="${slider.getAttribute('data-pwi-slider')}"]`,
                    nextEl: `[data-wiper-button-next="${slider.getAttribute('data-pwi-slider')}"]`
                }
            });

            slider.classList.add("initialized");
        }
    }
}

sliderLogic();
