const toggleModalVisitForm = () => {

    const popupVisitForm = document.getElementById('free_visit_form');
    document.body.addEventListener('click', (e) => {
        let target = e.target;
        if (target.classList.contains('open-popup')) {
            popupVisitForm.style.display = 'block';
        }

        popupVisitForm.addEventListener('click', (e) => {
            let target = e.target;
            if (target.classList.contains('close-icon')) {
                popupVisitForm.style.display = 'none';
            } else {
                target = target.closest('.visit-form-content');
                if (!target) {
                    popupVisitForm.style.display = 'none';
                }
            }
        });
    });
};

export default toggleModalVisitForm;