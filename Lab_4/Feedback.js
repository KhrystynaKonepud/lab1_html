// Завдання 4: Tooltip для поля "Детально" 

window.addEventListener('load', function() {
    const detailsTextarea = document.getElementById('details');
    
    if (detailsTextarea) {
        // Створюємо tooltip елемент
        const tooltip = document.createElement('div');
        tooltip.id = 'detailsTooltip';
        tooltip.textContent = 'Дякуючи Вам, ми стаємо кращі! Конкретизуйте мету звернення, будь ласка';
        tooltip.style.cssText = `
            position: fixed;
            display: none;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            padding: 12px 16px;
            border-radius: 8px;
            font-size: 0.9rem;
            max-width: 280px;
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
            z-index: 1000;
            line-height: 1.4;
            pointer-events: none;
        `;
        
        document.body.appendChild(tooltip);
        
        // Зберігаємо початковий стиль textarea
        const originalBorder = detailsTextarea.style.border || '1px solid #ccc';
        const originalBackground = window.getComputedStyle(detailsTextarea).backgroundColor;
        const originalBoxShadow = detailsTextarea.style.boxShadow || 'none';
        
        // Обробник mouseenter
        detailsTextarea.addEventListener('mouseenter', function(e) {
            // Змінюємо стиль textarea
            this.style.backgroundColor = '#f0f8ff';
            this.style.border = '2px solid #4a90e2';
            this.style.boxShadow = '0 4px 12px rgba(74, 144, 226, 0.3)';
            this.style.transition = 'all 0.3s ease';
            
            // Позиціонуємо tooltip праворуч від textarea, нижче
            const rect = this.getBoundingClientRect();
            tooltip.style.display = 'block';
            tooltip.style.left = (rect.right + 20) + 'px';
            tooltip.style.top = (rect.top +50) + 'px';
        });
        
        // Обробник mouseleave
        detailsTextarea.addEventListener('mouseleave', function() {
            // Повертаємо початковий стиль
            this.style.backgroundColor = originalBackground;
            this.style.border = originalBorder;
            this.style.boxShadow = originalBoxShadow;
            
            // Ховаємо tooltip
            tooltip.style.display = 'none';
        });
    }
});