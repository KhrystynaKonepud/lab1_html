// Завдання 2: Модальне вікно при наведенні на блок напряму

// Ініціалізація модального вікна
let modal;
let modalShown = {}; // Об'єкт для відстеження показаних модальних вікон

window.addEventListener('load', function() {
    // Отримуємо модальне вікно з HTML
    modal = document.getElementById('warningModal');

    if (modal) {
        const closeBtn = document.getElementById('modalClose');
        closeBtn.addEventListener('click', function() {
            modal.style.display = 'none';
        });

        // Закриття при кліку поза модальним вікном
        window.addEventListener('click', function(event) {
            if (event.target === modal) {
                modal.style.display = 'none';
            }
        });

        // Додаємо обробники на всі картки напрямів
        const directionCards = document.querySelectorAll('.direction-card');

        directionCards.forEach((card, index) => {
            card.addEventListener('mouseenter', function() {
                // Показуємо модальне вікно тільки раз для кожної картки
                if (!modalShown[index]) {
                    modal.style.display = 'block';
                    document.getElementById('modalConfirm').checked = false;
                    modalShown[index] = true;
                }
            });
        });
    }
});

// Завдання 3: Фліп-карти для фото

window.addEventListener('load', function() {
    const directionCards = document.querySelectorAll('.direction-card');

    // Отримуємо заголовок з шаблону в HTML
    const titleTemplate = document.getElementById('flip-back-title');
    const flipBackTitleText = titleTemplate ? titleTemplate.textContent : '';

    directionCards.forEach((card) => {
        const img = card.querySelector('img');
        const lawsData = card.dataset.laws;

        if (img && lawsData) {
            // Парсимо дані з HTML атрибута
            const laws = JSON.parse(lawsData);

            // Створюємо контейнер для фліп-ефекту
            const flipContainer = document.createElement('div');
            flipContainer.className = 'flip-container';

            const flipper = document.createElement('div');
            flipper.className = 'flipper';

            // Передня сторона (оригінальне фото)
            const front = document.createElement('div');
            front.className = 'flip-front';

            const imgClone = img.cloneNode(true);
            imgClone.className = 'flip-img';
            imgClone.removeAttribute('style');
            front.appendChild(imgClone);

            // Задня сторона (законодавство)
            const back = document.createElement('div');
            back.className = 'flip-back';

            // Заголовок
            const backTitle = document.createElement('h4');
            backTitle.className = 'flip-back-title';
            backTitle.textContent = flipBackTitleText;

            // Список законів
            const lawsList = document.createElement('ul');
            lawsList.className = 'flip-back-list';

            laws.forEach(law => {
                const li = document.createElement('li');
                li.textContent = law;
                lawsList.appendChild(li);
            });

            back.appendChild(backTitle);
            back.appendChild(lawsList);

            flipper.appendChild(front);
            flipper.appendChild(back);
            flipContainer.appendChild(flipper);

            // Замінюємо оригінальне зображення на фліп-контейнер
            img.parentNode.replaceChild(flipContainer, img);
        }
    });
});
