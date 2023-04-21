//blog posts filter
const allPostsBtn = document.querySelector('[all-posts-btn]');
const tagHandle = window.location.href.split('/').slice(-1)[0];
const filterBtn = document.querySelectorAll('[filter-btn]');

for(let btn of filterBtn) {
    const btnHref = btn.getAttribute('href').split('/').slice(-1)[0];
    btn.parentElement.classList.remove('active');
    
    if (btnHref === tagHandle) {
        allPostsBtn.classList.remove('active');
        btn.parentElement.classList.add('active');
    }

}

//open filter for mobile devices
const openBtn = document.querySelector('[open-filter]');
const filterBody = document.querySelector('[filter-body]');

openBtn.addEventListener('click', () => {
    filterBody.classList.toggle('active');
    openBtn.classList.toggle('active');
})

