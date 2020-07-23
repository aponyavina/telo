const clubSelect = () => {
    'use strict';
    let bool = false;
    document.body.addEventListener('click', (e) => {
        let target = e.target;
        const clubsListItems = document.querySelector('.clubs-list-items');
        if (target.classList.contains('clubs-list-title')) {
            if (bool) {
                clubsListItems.style.display = 'none';
                bool = false;
            } else {
                clubsListItems.style.display = 'block';
                bool = true;
            }
        } else if (!target.classList.contains('clubs-list-items') &&
            !target.classList.contains('clubs-list-item')) {
            clubsListItems.style.display = 'none';
            bool = false;
        }
    });
};

export default clubSelect;