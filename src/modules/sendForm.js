const sendForm = () => {
    'use strict';

    const errorMessage = 'Что-то пошло не так...',
        loadMessage = 'Загрузка...',
        successMessage = 'Спасибо! Мы скоро с вами свяжемся!';

    const input = document.querySelectorAll('input');
    const thanks = document.getElementById('thanks');
    const thanksText = document.querySelector('.thanks-text');
    const callbackForm = document.getElementById('callback_form');
    const freeVisitForm = document.getElementById('free_visit_form');
    const checkbox = document.querySelectorAll('.checkbox');

    for (let i = 0; i < checkbox.length; i++) {
        if (checkbox[i].getAttribute('class') === 'checkbox') {
            let bool = false;
            checkbox[i].addEventListener('click', () => {
                if (!bool) {
                    checkbox[i].setAttribute('checked', '');
                    bool = true;
                } else {
                    checkbox[i].removeAttribute('checked');
                    bool = false;
                }
            });
        }
    }

    document.addEventListener('input', (event) => {
        let target = event.target;
        if (target.getAttribute('name') === 'phone') {
            target.value = target.value.replace(/[^\d+]/g, '');
            if (target.value[0] === '+') {
                target.value = target.value.slice(0, 12);
            }
            if (target.value[0] !== '+') {
                target.value = target.value.slice(0, 11);
            }
        }
        if (target.getAttribute('name') === 'name' && target.getAttribute('id') !== 'promo-input') {
            target.value = target.value.replace(/[^а-я ]/gi, '');
        }
    });

    const statusMessage = document.createElement('div');
    statusMessage.style.cssText = 'font-size: 20px;';
    statusMessage.style.cssText = 'color: #fff;';

    document.addEventListener('submit', (event) => {
        let target = event.target;
        event.preventDefault();
        for (let item of checkbox) {
            if (target.contains(item) && !item.hasAttribute('checked')) {
                alert('Подтвердите согласие на обработку персональных данных');
                return false;
            }
        }

        event.preventDefault();
        thanks.style.display = 'flex';
        callbackForm.style.display = 'none';
        freeVisitForm.style.display = 'none';
        thanksText.textContent = loadMessage;
        const formData = new FormData(target);
        let body = {};
        formData.forEach((val, key) => {
            body[key] = val;
        });
        postData(body)
            .then((response) => {
                if (response.status !== 200) {
                    throw new Error('status network not 200');
                }
                thanksText.textContent = successMessage;
                setTimeout(() => {
                    thanks.style.display = 'none';
                }, 2000);
            })
            .catch((error) => {
                thanksText.textContent = errorMessage;
                setTimeout(() => {
                    thanks.style.display = 'none';
                }, 2000);
                console.error(error);
            });
        for (let i = 0; i < input.length; i++) {
            input[i].value = '';
        }
        document.querySelectorAll('input[type="checkbox"]').forEach(elem => {
            elem.checked = false;
        });
        document.querySelectorAll('input[type="radio"]').forEach(elem => {
            elem.checked = false;
        });
    });
    const postData = (formData) => {
        return fetch('./server.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData),
            credentials: 'include'
        });
    };

};

export default sendForm;