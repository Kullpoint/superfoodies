import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const cols = document.querySelectorAll('[data-gallery-column]');

cols.forEach((col, i) => {
    const images = col.childNodes;

    // DUPLICATE IMAGES FOR LOOP
    images.forEach((image) => {
        const clone = image.cloneNode(true);
        col.appendChild(clone);
    });

    // SET ANIMATION
    images.forEach((item) => {
        let columnHeight = item.parentElement.clientHeight;
        let direction = i % 2 !== 0 ? "+" : "-"; // Change direction for odd columns

        gsap.to(item, {
            y: direction + Number(columnHeight / 2),
            duration: 20,
            repeat: -1,
            ease: "none",
            modifiers: {
                y: gsap.utils.unitize((y) => {
                    if (direction == "+") {
                        y = (parseFloat(y) - 300) % (columnHeight / 2);
                    } 
                    else {
                        y = (parseFloat(y) + 600) % -(columnHeight / 2);
                    }

                    return y;
                })
            }
        });
    });
});
