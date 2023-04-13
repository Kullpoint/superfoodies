import Swiper from 'swiper/bundle';

const sliderLogic = () => {
    const slider = document.querySelector('[data-product-slider]');
    const container = slider.querySelector('[data-swiper-container]');
    const slides = container.querySelectorAll('[data-swiper-slide]');
    const featuredImage = document.getElementById('product_feature-image');

    new Swiper(container, {
        speed: 1200,
        loop: false,
        allowTouchMove: true,
        spaceBetween: 20,
        autoplay: false,
        breakpoints: {
            0: {
                slidesPerView: 3
            },
            // 577: {
            //     slidesPerView: 2
            // },
            // 769: {
            //     slidesPerView: 3
            // }
        },
        navigation: {
            prevEl: `[data-swiper-button-prev="product"]`,
            nextEl: `[data-swiper-button-next="product"]`
        }
    });

    const slideChanger = () => {
        for (const slide of slides) {
            const slideImg = slide.querySelector('[data-swiper-slide-img]');

            slide.addEventListener('click', () => {                
                for (const s of slides) {
                    s.classList.remove('current');
                }

                slide.classList.add('current');
                featuredImage.setAttribute('src', slideImg.getAttribute('src'));
            });
        }
    }

    slideChanger();
}

sliderLogic();
