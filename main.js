document.querySelectorAll('.tab-btn').forEach(button => {
    button.addEventListener('click', () => {
        const cityId = button.getAttribute('data-city');
        document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
        document.querySelectorAll('.tab-pane').forEach(pane => pane.classList.remove('active'));
        button.classList.add('active');
        document.getElementById(cityId).classList.add('active');

        button.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
    });
});



// Находим элементы Lightbox
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const lightboxCaption = document.getElementById('lightbox-caption');
const closeBtn = document.querySelector('.lightbox-close');

// Вешаем событие на все изображения в портфолио
document.querySelectorAll('.portfolio-img').forEach(item => {
    item.addEventListener('click', () => {
        const img = item.querySelector('img');
        const desc = item.closest('.portfolio-item').querySelector('h3').innerText;

        lightbox.style.display = 'flex';
        lightboxImg.src = img.src;
        lightboxCaption.innerText = desc;
        
        document.body.style.overflow = 'hidden';
    });
});

// Закрытие по крестику
closeBtn.addEventListener('click', () => {
    lightbox.style.display = 'none';
    document.body.style.overflow = 'auto';
});

// Закрытие при клике на пустую область фона
lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
        lightbox.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
});