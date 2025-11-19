// Завдання 1: Самодрукуючий текст 
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Створюємо елемент для самодрукуючого тексту
window.addEventListener('load', function() {
    const header = document.querySelector('header center');
    
    // Створюємо div для повідомлення
    const announcementDiv = document.createElement('div');
    announcementDiv.id = 'announcement';

    // Отримуємо font-weight заголовка і множимо на 1.5
    const h1 = header.querySelector('h1');
    const h1FontWeight = parseInt(window.getComputedStyle(h1).fontWeight) || 400;
    const announcementFontWeight = Math.min(h1FontWeight * 1.5, 900);

    announcementDiv.style.cssText = `
        color: red;
        font-weight: ${announcementFontWeight};
        font-size: 1.3em;
        margin-top: 15px;
        min-height: 60px;
        line-height: 1.4;
    `;
    
    // Вставляємо після заголовка та логотипу
    const img = header.querySelector('img');
    img.parentNode.insertBefore(announcementDiv, img.nextSibling);
    
    // Текст оголошення
    const announcementText = 'Увага! З 24 грудня по 8 січня офіс працює в святковому режимі. З Новим Роком!';
    
    // Запускаємо самодрукування через 500мс після завантаження
    setTimeout(() => {
        typeWriter(announcementDiv, announcementText, 50);
    }, 500);
});

// Завдання 5: Нічний режим (21:00 - 06:00)
function applyNightMode() {
    const currentHour = new Date().getHours();
    
    if (currentHour >= 21 || currentHour < 6) {
        // Застосовуємо нічний режим напряму через JS
        document.body.style.filter = 'brightness(0.6)';
    }
}

// Застосовуємо нічний режим при завантаженні
window.addEventListener('load', applyNightMode);