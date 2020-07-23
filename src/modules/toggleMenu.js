const toggleMenu = () => {
    const menuButton = document.querySelector('.menu-button'),
        topMenu = document.querySelector('.top-menu');

        if (window.innerWidth < 768) {
            menuButton.style.display = 'block';

            document.addEventListener('scroll', () => {
                const top = window.pageYOffset;
                if (topMenu.getBoundingClientRect().top <= 0) {
                    topMenu.style.position = 'fixed';
                }
                if (top < 187) {
                    topMenu.style.position = 'static';
                }
            });
        } 
};

export default toggleMenu;