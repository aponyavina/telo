const mainSlider = () => {
    'use strict';

    const mainSliderBlock = document.querySelector('.main-slider'),
        slide = mainSliderBlock.querySelectorAll('.slide');

    let currentSlide = 0;

    const autoPlaySlide = () => {
        slide[currentSlide].style.display = 'none';
        currentSlide++;
        if (currentSlide >= slide.length) {
            currentSlide = 0;
        }
        slide[currentSlide].style.display = 'flex';
    };

    const startSlide = () => {
        setInterval(autoPlaySlide, 1500);
    };
    startSlide();
};

export default mainSlider;