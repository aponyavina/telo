const clubSelect = () => {
    document.body.addEventListener('click', (e) => {
        let target = e.target;
        const clubsListItems = document.querySelector('.clubs-list-items');
        if (target.classList.contains('clubs-list-title')) {
            clubsListItems.style.display = 'block';
        } else
        if (!target.classList.contains('clubs-list-items') && 
        !target.classList.contains('clubs-list-item')) {
            clubsListItems.style.display = 'none';
        }
    });
};

export default clubSelect;