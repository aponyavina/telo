const scrolling = () => {
    'use strict';

    const menuButton = document.querySelector('.menu-button'),
        topMenu = document.querySelector('.top-menu'),
        clubsBlock = document.getElementById('clubs');

    document.body.addEventListener('scroll', () => {
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
        console.log(clubsBlock.getBoundingClientRect().top);
    });


};

export default scrolling;