const calc = () => {
    'use strict';

    const priceTotal = document.getElementById('price-total'); // поле итоговая цена
    const m1 = document.getElementById('m1'),
        m2 = document.getElementById('m2'),
        m3 = document.getElementById('m3'),
        m4 = document.getElementById('m4'); //значения абонементов по месяцам
    const cardOrder = document.getElementById('card_order');
    const promoInput = document.getElementById('promo-input');
    let cardTypeArr = [];

    priceTotal.textContent = 1999;

    const foo = () => {
        cardOrder.addEventListener('change', (e) => {
            if (cardTypeArr !== []) {
                // cardTypeArr.forEach((element, i) => {
                    cardOrder.addEventListener('click', (e) => {
                        let target = e.target;
                        if (target.getAttribute('name') === 'card-type') {
                            priceTotal.textContent = target.getAttribute('value');
                        }
                    });
                // });
            }
            promoInput.value = '';
            let target = e.target;
            if (target.closest('#card_leto_mozaika')) {
                cardTypeArr = [];
                m1.value = 1999;
                m2.value = 9900;
                m3.value = 13900;
                m4.value = 19900;
                cardTypeArr.push(m1, m2, m3, m4);
                foo();
            } else if (target.closest('#card_leto_schelkovo')) {
                cardTypeArr = [];
                m1.value = 2999;
                m2.value = 14990;
                m3.value = 21990;
                m4.value = 24990;
                cardTypeArr.push(m1, m2, m3, m4);
                foo();
            }
            if (target.getAttribute('name') === 'card-type') {
                priceTotal.textContent = target.getAttribute('value');
            }
        });

        promoInput.addEventListener('input', () => {
            if (promoInput.value === 'ТЕЛО2020') {
                priceTotal.textContent *= 0.3;
                priceTotal.textContent = Math.round(priceTotal.textContent);
            }
        });
    };
    foo();


};

export default calc;