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

// Обробка самодрукуючого тексту для оголошення
window.addEventListener('load', function() {
    const announcementDiv = document.getElementById('announcement');

    if (announcementDiv) {
        // Зберігаємо оригінальний текст з HTML
        const announcementText = announcementDiv.textContent;

        // Отримуємо font-weight заголовка і множимо на 1.5
        const h1 = document.querySelector('header h1');
        if (h1) {
            const h1FontWeight = parseInt(window.getComputedStyle(h1).fontWeight) || 400;
            const announcementFontWeight = Math.min(h1FontWeight * 1.5, 900);
            announcementDiv.style.fontWeight = announcementFontWeight;
        }

        // Запускаємо самодрукування через 500мс після завантаження
        setTimeout(() => {
            typeWriter(announcementDiv, announcementText, 50);
        }, 500);
    }
});

// Завдання 5: Нічний режим (21:00 - 06:00)
function applyNightMode() {
    const currentHour = new Date().getHours();
    
    if (currentHour >= 21 || currentHour < 6) {
        // Застосовуємо нічний режим через CSS клас
        document.body.classList.add('night-mode');
    }
}

// Застосовуємо нічний режим при завантаженні
window.addEventListener('load', applyNightMode);