const branchData = {
    "Белыничи": {
        phone1: "+375 (29) 357-38-67",
        phone2: "+375 (33) 312-77-91",
        address: "ул. Калинина, 56",
        schedule: "Пн-Сб: 10:00 - 16:00",
        mapLink: "https://yandex.ru/map-widget/v1/?um=constructor%3A9f6f94316def2d488b639005e6c6683289114f87b6603a91cdedd153f9c9f658&theme=dark&amp;source=constructor;" 
    },
    "Березино": {
        phone1: "+375 (29) 357-38-67",
        phone2: "+375 (33) 312-77-91",
        address: "рядом с магазином \"Дочки-сыночки\"",
        schedule: "Пн-Сб: 10:00 - 16:00",
        mapLink: "https://yandex.ru/map-widget/v1/?um=constructor%3Adf2fc1a4b52d72b078ad29bfc724ed9650e93adc587fef04263b398c63904f26&theme=dark&amp;source=constructor" 
    },
    "Круглое": {
        phone1: "+375 (29) 357-38-67",
        phone2: "+375 (33) 312-77-91",
        address: "ул. Терновского, 5С",
        schedule: "Пн-Сб: 10:00 - 16:00",
        mapLink: "https://yandex.ru/map-widget/v1/?um=constructor%3A429599bf45a8078f7acf792f5c59b20976dcaae7eadad5eb9e81a888f493c19e&theme=dark&amp;source=constructor" 
    },
    "Крупки": {
        phone1: "+375 (29) 357-38-67",
        phone2: "+375 (33) 312-77-91",
        address: "ул. Советская, 5А",
        schedule: "Пн-Сб: 10:00 - 16:00",
        mapLink: "https://yandex.ru/map-widget/v1/?um=constructor%3A16b152481424c19803078e1c020d7288c7d3496604560ecc2fc1c18a5e2fe7b8&theme=dark&amp;source=constructor" 
    },
    "Толочин": {
        phone1: "+375 (29) 357-38-67",
        phone2: "+375 (33) 312-77-91",
        address: "2-й переулок Островского, 15",
        schedule: "Пн-Сб: 10:00 - 16:00",
        mapLink: "https://yandex.ru/map-widget/v1/?um=constructor%3A797ca7f885cc09c31530ddc62e377109f516aeaf8c9f887a195ed99b14939c30&theme=dark&amp;source=constructor" 
    },
    "Червень": {
        phone1: "+375 (29) 357-38-67",
        phone2: "+375 (33) 312-77-91",
        address: "Площадь свободы, 16",
        schedule: "Пн-Сб: 10:00 - 16:00",
        mapLink: "https://yandex.ru/map-widget/v1/?um=constructor%3A335ded569f6f74cc1ec95c2cd90bc2a4ac6c68f4d305ca5a62b51023edd4d685&theme=dark&amp;source=constructor" 
    },
};



// 2. ФУНКЦИЯ ОБНОВЛЕНИЯ ИНТЕРФЕЙСА
function updateBranchUI(cityName) {
    const data = branchData[cityName];
    if (!data) return;

    const update = (id, text, isLink = false) => {
        const el = document.getElementById(id);
        if (el) {
            el.textContent = text;
            if (isLink) el.href = `tel:${text.replace(/\D/g, '')}`;
        }
    };

    // Обновляем Контакты
    update('contactCity', cityName);
    update('contactAddress', data.address);
    update('contactSchedule', data.schedule);
    update('contactPhone1', data.phone1, true);
    update('contactPhone2', data.phone2, true);
    
    // Обновляем Футер
    update('footerCityName', cityName);
    update('branchAddress', data.address);
    update('branchPhone1', data.phone1, true);
    update('branchPhone2', data.phone2, true);

    const map = document.getElementById('contactMap');
    if (map) map.src = data.mapLink;
}

// 3. ОСНОВНОЙ КОД (Один обработчик DOMContentLoaded)
document.addEventListener('DOMContentLoaded', () => {
    const openBtn = document.getElementById('openSidebar');
    const sidebar = document.getElementById('sidebar');
    const mainContent = document.getElementById('mainContent');
    const geoPicker = document.getElementById('geoPicker');
    const cityList = document.getElementById('cityList');
    const activeCity = document.getElementById('activeCity');

    // --- ЛОГИКА БОКОВОГО МЕНЮ ---
    const toggleMenu = () => {
        const isActive = sidebar.classList.toggle('active');
        openBtn.classList.toggle('active');
        if (mainContent) mainContent.classList.toggle('active');
        if (window.innerWidth <= 1024) {
            document.body.style.overflow = isActive ? 'hidden' : '';
        }
    };

    if (openBtn && sidebar) {
        openBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            toggleMenu();
        });
    }

    // --- ЛОГИКА GEOPICKER ---
    const closeGeoList = () => {
        if (cityList) cityList.style.display = 'none';
        if (geoPicker) geoPicker.classList.remove('open');
    };

    if (geoPicker && cityList) {
        geoPicker.addEventListener('click', (e) => {
            e.stopPropagation();
            const isOpen = geoPicker.classList.toggle('open');
            cityList.style.display = isOpen ? 'block' : 'none';
        });

        cityList.addEventListener('click', (e) => {
            const li = e.target.closest('li');
            if (li) {
                const selectedCity = li.getAttribute('data-city');
                activeCity.textContent = selectedCity;
                localStorage.setItem('selectedBranch', selectedCity);
                updateBranchUI(selectedCity);
                closeGeoList();
            }
        });
    }

    // Закрытие при клике вне элементов
    document.addEventListener('click', (e) => {
        if (geoPicker && !geoPicker.contains(e.target)) closeGeoList();
        if (sidebar && sidebar.classList.contains('active') && !sidebar.contains(e.target) && !openBtn.contains(e.target)) {
            toggleMenu();
        }
    });

    // --- ИНИЦИАЛИЗАЦИЯ ГОРОДА ПРИ ЗАГРУЗКЕ ---
    const savedBranch = localStorage.getItem('selectedBranch') || "Белыничи"; 
    if (activeCity) activeCity.textContent = savedBranch;
    updateBranchUI(savedBranch);

    // --- LIGHTBOX ---
    const lightbox = document.getElementById('lightbox');
    const portfolioGrid = document.getElementById('portfolioGrid');
    
    if (lightbox && portfolioGrid) {
        portfolioGrid.addEventListener('click', (e) => {
            const item = e.target.closest('.portfolio-item');
            if (!item) return;
            e.preventDefault();
            
            const img = document.getElementById('lightboxImage');
            const cap = document.getElementById('lightboxCaption');
            if(img) img.src = item.getAttribute('href');
            if(cap) cap.textContent = item.getAttribute('title') || "";
            
            lightbox.classList.add('active');
            document.body.style.overflow = 'hidden';
        });

        const closeLightbox = () => {
            lightbox.classList.remove('active');
            document.body.style.overflow = '';
        };

        lightbox.addEventListener('click', (e) => {
            if (e.target.id === 'lightboxClose' || e.target.classList.contains('lightbox-overlay')) {
                closeLightbox();
            }
        });
    }
});
