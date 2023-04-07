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
    videoLogic();
    yearChanger();
});
