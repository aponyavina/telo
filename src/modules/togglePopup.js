const togglePopup = () => {
    'use strict';
    const popupVisitForm = document.getElementById('free_visit_form'),
        popupCallbackForm = document.getElementById('callback_form'),
        popupMenu = document.querySelector('.popup-menu'),
        fixedGift = document.querySelector('.fixed-gift'),
        popupGift = document.getElementById('gift'),
        popupThanks = document.getElementById('thanks'),
        popupClose = (item) => {
            item.addEventListener('click', (e) => {
                let target = e.target;
                if (target.classList.contains('close-icon') || target.classList.contains('close-btn') ||
                target.classList.contains('menu-item')) {
                    item.style.display = 'none';
                } else if (target.classList.contains('hidden-large') ||
                target.classList.contains('scroll')) {
                    return;
                }
                 else {
                    target = target.closest('.form-content');
                    if (!target) {
                        item.style.display = 'none';
                    }
                }
            });
        };

    document.body.addEventListener('click', (e) => {
        let target = e.target;
        if (target.classList.contains('open-popup')) {
            popupVisitForm.style.display = 'flex';
            popupClose(popupVisitForm);
        }
        if (target.classList.contains('header-callback-btn')) {
            popupCallbackForm.style.display = 'flex';
            popupClose(popupCallbackForm);
        }
        if (target.classList.contains('fixed-gift-img')) {
            popupGift.style.display = 'flex';
            fixedGift.style.display = 'none';
            popupClose(popupGift);
        }
        if (target.classList.contains('menu-button-img')) {
            popupMenu.style.display = 'flex';
            popupClose(popupMenu);
        }
    });

    popupClose(popupThanks);
};

export default togglePopup;