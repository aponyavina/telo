const scrolling = () => {
    'use strict';

    const menuButton = document.querySelector('.menu-button'),
        topMenu = document.querySelector('.top-menu'),
        headerMain = document.querySelector('.header-main');
        console.log(headerMain);

        if (window.innerWidth < 768) {
            menuButton.style.display = 'block';
            document.addEventListener('scroll', () => {
                const top = window.pageYOffset;
                console.log(headerMain.getBoundingClientRect().top);
                if (topMenu.getBoundingClientRect().top <= 0) {
                    topMenu.style.position = 'fixed';
                }
                if (top < 187) {
                    topMenu.style.position = 'static';
                }
                console.log('ff');
            });
        } 

       
};

export default scrolling;