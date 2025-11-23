// Завдання 4: Tooltip для поля "Детально"

window.addEventListener('load', function() {
    const detailsTextarea = document.getElementById('details');
    const tooltip = document.getElementById('detailsTooltip');

    if (detailsTextarea && tooltip) {

        // Обробник mouseenter
        detailsTextarea.addEventListener('mouseenter', function(e) {
            // Додаємо клас для hover стану
            this.classList.add('details-hover');

            // Позиціонуємо tooltip праворуч від textarea
            const rect = this.getBoundingClientRect();
            tooltip.style.display = 'block';
            tooltip.style.left = (rect.right + 20) + 'px';
            tooltip.style.top = (rect.top + 50) + 'px';
        });

        // Обробник mouseleave
        detailsTextarea.addEventListener('mouseleave', function() {
            // Прибираємо клас hover стану
            this.classList.remove('details-hover');

            // Ховаємо tooltip
            tooltip.style.display = 'none';
        });
    }
});
