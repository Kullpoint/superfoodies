const removePreloader = () => {
    const preloader = document.getElementById('preloader');

    setTimeout(() => {
        document.body.style.overflow = '';
        preloader.classList.add('hidden');
        setTimeout(() => {
            preloader.classList.add('dn');
        }, 500);
    }, 300);
}

const megaMenuLogic = () => {
    const links = document.querySelectorAll('[data-mega-menu-link]');
    const menus = document.querySelectorAll('[data-mega-menu]');

    for (const link of links) {
        for (const menu of menus) {
            if (link.getAttribute('data-mega-menu-link') == menu.getAttribute('data-mega-menu')) {
                const openMenu = () => {
                    menu.classList.remove('dn');
                    setTimeout(() => {
                        menu.classList.add('active');
                    }, 1);
                }

                const closeMenu = () => {
                    menu.classList.remove('active');
                    setTimeout(() => {
                        menu.classList.add('dn');
                    }, 300);
                }

                link.addEventListener('mouseover', () => {
                    openMenu();
                });

                link.addEventListener('mouseleave', (e) => {
                    if (e.toElement == menu) {
                        return;
                    }

                    closeMenu();
                });

                menu.addEventListener('mouseleave', (e) => {
                    if (e.toElement == link) {
                        return;
                    }

                    closeMenu();
                });

                break;
            }
        }
    }
}

const mobileMenuLogic = () => {
    const mobileMenu = document.getElementById('mobile-menu');
    const openBtns = document.querySelectorAll('[data-mobile-menu-open-btn]');
    const closeBtns = document.querySelectorAll(['[data-mobile-menu-close-btn]']);
    const links = document.querySelectorAll('[data-mobile-megamenu-link]');
    const menus = document.querySelectorAll('[data-mobile-megamenu]');

    //open/close mobile menu logic
    const openMobileMenu = () => {
        mobileMenu.classList.remove('dn');
        setTimeout(() => {
            mobileMenu.classList.add('active');
        }, 1);
    }

    const closeMobileMenu = () => {
        mobileMenu.classList.remove('active');
        setTimeout(() => {
            mobileMenu.classList.add('dn');
        }, 300);

        //close all megamenus
        for (const menu of menus) {
            const closeMenu = () => {
                menu.classList.remove('active');
                setTimeout(() => {
                    menu.classList.add('dn');
                }, 300);
            }

            closeMenu();
        }
    }

    for (const openBtn of openBtns) {
        openBtn.addEventListener('click', () => {
            if (mobileMenu.classList.contains('active')) {
                closeMobileMenu();
            }
            else {
                openMobileMenu();
            }
        });
    }

    for (const closeBtn of closeBtns) {
        closeBtn.addEventListener('click', () => {
            closeMobileMenu();
        });
    }

    //megamenus logic
    for (const link of links) {
        for (const menu of menus) {
            if (link.getAttribute('data-mobile-megamenu-link') == menu.getAttribute('data-mobile-megamenu')) {
                const backBtn = menu.querySelector('[data-mobile-megamenu-back-btn]');

                const openMenu = () => {
                    menu.classList.remove('dn');
                    setTimeout(() => {
                        menu.classList.add('active');
                    }, 1);
                }

                const closeMenu = () => {
                    menu.classList.remove('active');
                    setTimeout(() => {
                        menu.classList.add('dn');
                    }, 300);
                }

                link.addEventListener('click', () => {
                    openMenu();
                });

                backBtn.addEventListener('click', () => {
                    closeMenu();
                });

                break;
            }
        }
    }
}

const mobileSearchLogic = () => {
    const search = document.querySelector('[data-header-search]');
    const openBtns = document.querySelectorAll('[data-mobile-search-open-btn]');
    const closeBtns = document.querySelectorAll('[data-mobile-search-close-btn]');

    const searchOpen = () => {
        search.classList.remove('dn');
        setTimeout(() => {
            search.classList.add('active');
        }, 1);
    }

    const searchClose = () => {
        search.classList.remove('active');
        setTimeout(() => {
            search.classList.add('dn');
        }, 300);
    }

    for (const openBtn of openBtns) {
        openBtn.addEventListener('click', () => {
            if (search.classList.contains('active')) {
                searchClose();
            }
            else {
                searchOpen();
            }
        });
    }

    for (const closeBtn of closeBtns) {
        closeBtn.addEventListener('click', () => {
            searchClose();
        });
    }
}

const videoLogic = () => {
    const videoContainers = document.querySelectorAll('[data-video-container]');

    if (videoContainers.length) {
        for (const videoContainer of videoContainers) {
            const video = videoContainer.querySelector('[data-video]');
            const videoPlayZone = videoContainer.querySelector('[data-video-playzone]');
            const videoPlayButton = videoContainer.querySelector('[data-video-btn="play"]');
            const videoPauseButton = videoContainer.querySelector('[data-video-btn="pause"]');

            const playVideo = () => {
                videoPlayButton.classList.add('dn');
                videoPlayZone.classList.add('dn');
                videoPauseButton.classList.remove('dn');
                video.play();
            }

            const pauseVideo = () => {
                videoPauseButton.classList.add('dn');
                videoPlayButton.classList.remove('dn');
                videoPlayZone.classList.remove('dn');
                video.pause();
            }

            video.addEventListener('click', () => {
                pauseVideo();
            });

            videoPlayZone.addEventListener('click', () => {
                playVideo();
            });

            videoPlayButton.addEventListener('click', () => {
                playVideo();
            });

            videoPauseButton.addEventListener('click', () => {
                pauseVideo();
            });
        }
    }
}

const yearChanger = () => {
    const yearBlock = document.getElementById('current-year');
    const currentYear = new Date().getFullYear();

    yearBlock.innerHTML = currentYear;
}

document.addEventListener('DOMContentLoaded', () => {
    removePreloader();
    megaMenuLogic();
    mobileMenuLogic();
    mobileSearchLogic();
    videoLogic();
    yearChanger();
});
