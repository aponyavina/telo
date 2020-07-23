const scrolling = () => {
    'use strict';

    const menuButton = document.querySelector('.menu-button'),
        topMenu = document.querySelector('.top-menu'),
        toTop = document.getElementById('totop'),
        clubsBlock = document.getElementById('clubs');

    toTop.style.display = 'none';

    document.addEventListener('scroll', () => {
        if (window.innerWidth < 768) {
            menuButton.style.display = 'block';
            const top = window.pageYOffset;
            if (topMenu.getBoundingClientRect().top <= 0) {
                topMenu.style.position = 'fixed';
            }
            if (top < 187) {
                topMenu.style.position = 'static';
            }
        }

        if (clubsBlock.getBoundingClientRect().top <= 0) {
            toTop.style.display = 'block';
        } else {
            toTop.style.display = 'none';
        }
    });
};

export default scrolling;