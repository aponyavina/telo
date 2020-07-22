const visitCallbackForms = () => {

    const popupVisitForm = document.getElementById('free_visit_form'),
        popupCallbackForm = document.getElementById('callback_form'),
        fixedGift = document.querySelector('.fixed-gift'),
        popupGift = document.getElementById('gift'),
        popupClose = (item) => {
            item.addEventListener('click', (e) => {
                let target = e.target;
                if (target.classList.contains('close-icon') || target.classList.contains('close-btn')) {
                    item.style.display = 'none';
                } else {
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
        if (target.classList.contains('callback-btn')) {
            popupCallbackForm.style.display = 'flex';
            popupClose(popupCallbackForm);
        }
        if (target.classList.contains('fixed-gift-img')) {
            popupGift.style.display = 'flex';
            fixedGift.style.display = 'none';
            popupClose(popupGift);
        }
    });
};

export default visitCallbackForms;