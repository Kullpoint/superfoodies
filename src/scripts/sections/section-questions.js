const questionsLogic = () => {
    const items = document.querySelectorAll('[data-questions-item]');

    for (const item of items) {
        const title = item.querySelector('[data-questions-item-title]');
        const content = item.querySelector('[data-questions-item-content]');
        const minusIcon = item.querySelector('[data-questions-item-minus-icon]');
        const plusIcon = item.querySelector('[data-questions-item-plus-icon]');

        const openLogic = () => {
            content.classList.remove('dn');
            minusIcon.classList.remove('dn');
            plusIcon.classList.add('dn');
        }

        const closeLogic = () => {
            content.classList.add('dn');
            minusIcon.classList.add('dn');
            plusIcon.classList.remove('dn');
        }

        title.addEventListener('click', () => {
            if (minusIcon.classList.contains('dn')) {
                openLogic();
            }
            else {
                closeLogic();
            }
        });
    }
}

questionsLogic();
