const showmoreLogic = () => {
    const sections = document.querySelectorAll('[data-product-description-section]');

    for (const section of sections) {
        const shortDescription = section.querySelector('[data-short-description]');
        const description = section.querySelector('[data-description]');
        const showmoreBtn = section.querySelector('[data-showmore-btn]');
        const showlessBtn = section.querySelector('[data-showless-btn]');

        if (showmoreBtn) {
            const showMore = () => {
                shortDescription.classList.add('dn');
                description.classList.remove('dn');
                showmoreBtn.classList.add('dn');
                showlessBtn.classList.remove('dn');
            }
    
            const showLess = () => {
                shortDescription.classList.remove('dn');
                description.classList.add('dn');
                showmoreBtn.classList.remove('dn');
                showlessBtn.classList.add('dn');
            }
    
            showmoreBtn.addEventListener('click', () => {
                showMore();
            });
    
            showlessBtn.addEventListener('click', () => {
                showLess();
            });
        }
    }
}

showmoreLogic();
