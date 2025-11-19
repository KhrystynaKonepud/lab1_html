// Завдання 2: Модальне вікно при наведенні на блок напряму 

// Створюємо модальне вікно
function createModal() {
    const modal = document.createElement('div');
    modal.id = 'warningModal';
    modal.style.cssText = `
        display: none;
        position: fixed;
        z-index: 10000;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.6);
    `;
    
    const modalContent = document.createElement('div');
    modalContent.style.cssText = `
        background-color: #fff;
        margin: 10% auto;
        padding: 30px;
        border: 3px solid #d2691e;
        border-radius: 12px;
        width: 80%;
        max-width: 500px;
        box-shadow: 0 8px 30px rgba(0, 0, 0, 0.3);
    `;
    
    modalContent.innerHTML = `
        <h3 style="color: #d2691e; text-align: center; margin-top: 0;">
            Попередження
        </h3>
        <p style="line-height: 1.6; font-size: 1.05rem; text-align: justify;">
            <strong>Увага!</strong> У зв'язку з військовим станом в Україні, 
            деякі напрями діяльності можуть мати обмеження. Інформація про співпрацю 
            з державними установами може бути конфіденційною. Будь ласка, підтвердіть, 
            що ви розумієте та приймаєте ці умови.
        </p>
        <div style="text-align: center; margin-top: 20px;">
            <label style="font-size: 1rem; display: flex; align-items: center; justify-content: center; gap: 8px;">
                <input type="checkbox" id="modalConfirm" style="width: 18px; height: 18px; cursor: pointer;">
                <span>Я розумію та приймаю умови</span>
            </label>
        </div>
        <div style="text-align: center; margin-top: 20px;">
            <button id="modalClose" style="
                background: #003366;
                color: white;
                border: none;
                padding: 10px 30px;
                border-radius: 6px;
                font-size: 1rem;
                cursor: pointer;
                transition: background 0.3s;
            ">Закрити</button>
        </div>
    `;
    
    modal.appendChild(modalContent);
    document.body.appendChild(modal);
    
    return modal;
}

// Ініціалізація модального вікна
let modal;
let modalShown = {}; // Об'єкт для відстеження показаних модальних вікон

window.addEventListener('load', function() {
    modal = createModal();
    
    const closeBtn = document.getElementById('modalClose');
    closeBtn.addEventListener('click', function() {
        modal.style.display = 'none';
    });
    
    closeBtn.addEventListener('mouseenter', function() {
        this.style.background = '#1a8cff';
    });
    
    closeBtn.addEventListener('mouseleave', function() {
        this.style.background = '#003366';
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
});

// Завдання 3: Фліп-карти для фото 

window.addEventListener('load', function() {
    const directionCards = document.querySelectorAll('.direction-card');
    
    // Дані про законодавство для кожного напряму
    const legislationData = [
        {
            title: 'Розробка ПЗ',
            laws: [
                'Закон України "Про авторське право і суміжні права"',
                'Закон України "Про охорону прав на винаходи і корисні моделі"',
                'Закон України "Про інформацію"'
            ]
        },
        {
            title: 'Аутсорсинг',
            laws: [
                'Закон України "Про зайнятість населення"',
                'Кодекс законів про працю України',
                'Закон України "Про міжнародне приватне право"'
            ]
        },
        {
            title: 'Аутстафінг',
            laws: [
                'Кодекс законів про працю України, ст. 21',
                'Закон України "Про зайнятість населення"',
                'Закон України "Про оплату праці"'
            ]
        },
        {
            title: 'Навчання',
            laws: [
                'Закон України "Про освіту"',
                'Закон України "Про вищу освіту"',
                'Закон України "Про професійну освіту"'
            ]
        },
        {
            title: 'Кібербезпека',
            laws: [
                'Закон України "Про основні засади кібербезпеки України"',
                'Закон України "Про захист інформації"',
                'Закон України "Про захист персональних даних"'
            ]
        },
        {
            title: 'Хмарні технології',
            laws: [
                'Закон України "Про електронні комунікації"',
                'Закон України "Про захист інформації"',
                'GDPR (General Data Protection Regulation)'
            ]
        },
        {
            title: 'ШІ та аналітика',
            laws: [
                'Закон України "Про захист персональних даних"',
                'Закон України "Про інформацію"',
                'Етичні принципи використання ШІ (UNESCO)'
            ]
        }
    ];
    
    directionCards.forEach((card, index) => {
        const img = card.querySelector('img');
        
        if (img) {
            // Створюємо контейнер для фліп-ефекту
            const flipContainer = document.createElement('div');
            flipContainer.className = 'flip-container';
            flipContainer.style.cssText = `
                perspective: 1000px;
                display: inline-block;
                width: 250px;
                height: 200px;
            `;
            
            const flipper = document.createElement('div');
            flipper.className = 'flipper';
            flipper.style.cssText = `
                position: relative;
                width: 100%;
                height: 100%;
                transition: transform 0.6s;
                transform-style: preserve-3d;
            `;
            
            // Передня сторона (оригінальне фото)
            const front = document.createElement('div');
            front.className = 'flip-front';
            front.style.cssText = `
                position: absolute;
                width: 100%;
                height: 100%;
                backface-visibility: hidden;
                display: flex;
                align-items: center;
                justify-content: center;
            `;
            
            const imgClone = img.cloneNode(true);
            imgClone.style.cssText = `
                max-width: 100%;
                max-height: 100%;
                object-fit: cover;
            `;
            front.appendChild(imgClone);
            
            // Задня сторона (законодавство)
            const back = document.createElement('div');
            back.className = 'flip-back';
            back.style.cssText = `
                position: absolute;
                width: 100%;
                height: 100%;
                backface-visibility: hidden;
                background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                color: white;
                transform: rotateY(180deg);
                display: flex;
                flex-direction: column;
                justify-content: center;
                padding: 15px;
                box-sizing: border-box;
                border-radius: 8px;
            `;
            
            const lawsHTML = `
                <h4 style="margin: 0 0 10px 0; font-size: 0.95rem; text-align: center;">
                    Законодавство
                </h4>
                <ul style="margin: 0; padding-left: 20px; font-size: 0.75rem; line-height: 1.4;">
                    ${legislationData[index].laws.map(law => `<li style="margin-bottom: 6px;">${law}</li>`).join('')}
                </ul>
            `;
            back.innerHTML = lawsHTML;
            
            flipper.appendChild(front);
            flipper.appendChild(back);
            flipContainer.appendChild(flipper);
            
            // Замінюємо оригінальне зображення на фліп-контейнер
            img.parentNode.replaceChild(flipContainer, img);
            
            flipContainer.addEventListener('mouseenter', function() {
                flipper.style.transform = 'rotateY(180deg)';
            });
            
            flipContainer.addEventListener('mouseleave', function() {
                flipper.style.transform = 'rotateY(0deg)';
            });
        }
    });
});