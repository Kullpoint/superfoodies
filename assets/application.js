const removePreloader = () => {
    const preloader = document.getElementById("preloader");

    setTimeout(() => {
        document.body.style.overflow = "";
        preloader.classList.add("hidden");
        setTimeout(() => {
            preloader.classList.add("dn");
        }, 500);
    }, 500);
}

document.addEventListener('DOMContentLoaded', () => {
    removePreloader();
});
