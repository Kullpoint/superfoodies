const removePreloader = () => {
    const preloader = document.getElementById('preloader');

    setTimeout(() => {
        document.body.style.overflow = '';
        preloader.classList.add('hidden');
        setTimeout(() => {
            preloader.classList.add('dn');
        }, 500);
    }, 200);
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

document.addEventListener('DOMContentLoaded', () => {
    removePreloader();
    videoLogic();
});
