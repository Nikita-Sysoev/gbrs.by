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


function updateBranchUI(cityName) {
    const data = branchData[cityName];
    if (!data) return;

    // 1. Обновляем блок "Контакты" в теле страницы
    const cCity = document.getElementById('contactCity');
    const cAddress = document.getElementById('contactAddress');
    const cPhone1 = document.getElementById('contactPhone1');
    const cPhone2 = document.getElementById('contactPhone2');
    const cSchedule = document.getElementById('contactSchedule');
    const cMap = document.getElementById('contactMap');

    if (cCity) cCity.textContent = cityName;
    if (cAddress) cAddress.textContent = data.address;
    if (cSchedule) cSchedule.textContent = data.schedule;
    
    if (cPhone1) {
        cPhone1.textContent = data.phone1;
        cPhone1.href = `tel:${data.phone1.replace(/\D/g, '')}`;
    }
    if (cPhone2) {
        cPhone2.textContent = data.phone2;
        cPhone2.href = `tel:${data.phone2.replace(/\D/g, '')}`;
    }
    
    // Обновляем карту (Src iframe)
    if (cMap) cMap.src = data.mapLink;

    // 2. Обновляем данные в футере (если они отличаются от основного блока)
        const phone1 = document.getElementById('branchPhone1');
    const phone2 = document.getElementById('branchPhone2');
    const address = document.getElementById('branchAddress');
    const footerCity = document.getElementById('footerCityName');
    const footerAddress = document.getElementById('branchAddress');

    if (phone1) {
        phone1.textContent = data.phone1;
        phone1.href = `tel:${data.phone1.replace(/\D/g, '')}`; // Чистим номер для ссылки
    }
    if (phone2) {
        phone2.textContent = data.phone2;
        phone2.href = `tel:${data.phone2.replace(/\D/g, '')}`;
    }
    if (footerCity) footerCity.textContent = cityName;
    if (footerAddress) footerAddress.textContent = data.address;
}

async function suggestCityByIP() {
    if (localStorage.getItem('selectedBranch')) return; // Если уже выбирал — не беспокоим

    try {
        const response = await fetch('https://ipapi.co/json/');
        const data = await response.json();
        
        // Проверяем, есть ли город из IP в нашем списке branchData
        if (branchData[data.city]) {
            showCitySuggestion(data.city); // Показываем плашку "Ваш город — Толочин?"
        }
    } catch (e) {
        console.log("Геолокация недоступна");
    }
}



document.addEventListener('DOMContentLoaded', () => {
    // --- 1. ПЕРЕМЕННЫЕ ЭЛЕМЕНТОВ ---
    const openBtn = document.getElementById('openSidebar');
    const sidebar = document.getElementById('sidebar');
    const mainContent = document.getElementById('mainContent');
    const geoPicker = document.getElementById('geoPicker');
    const cityList = document.getElementById('cityList');
    const activeCity = document.getElementById('activeCity');

    // --- 2. ЛОГИКА БОКОВОГО МЕНЮ ---
    const toggleMenu = () => {
        const isActive = sidebar.classList.toggle('active');
        openBtn.classList.toggle('active');
        if (mainContent) mainContent.classList.toggle('active');
        
        openBtn.setAttribute('aria-expanded', isActive); // Доступность (a11y)
        
        if (window.innerWidth <= 1024) {
            document.body.style.overflow = isActive ? 'hidden' : '';
        }
    };

    if (openBtn && sidebar) {
        openBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            toggleMenu();
        });

        sidebar.addEventListener('click', (e) => {
            if (e.target.tagName === 'A' && sidebar.classList.contains('active')) {
                toggleMenu();
            }
        });
    }

    // --- 3. ЛОГИКА ВЫБОРА ГОРОДА С СОХРАНЕНИЕМ СОСТОЯНИЯ ---
    if (geoPicker && cityList && activeCity) {
        // Инициализация сохраненного филиала
        const savedBranch = localStorage.getItem('selectedBranch');
        if (savedBranch) activeCity.textContent = savedBranch;

        const closeGeoList = () => {
            cityList.style.display = 'none';
            geoPicker.classList.remove('open');
            geoPicker.setAttribute('aria-expanded', 'false');
        };

        geoPicker.addEventListener('click', (e) => {
            e.stopPropagation();
            const isOpen = geoPicker.classList.toggle('open');
            cityList.style.display = isOpen ? 'block' : 'none';
            geoPicker.setAttribute('aria-expanded', isOpen);
        });

        // Делегирование событий для списка городов
        cityList.addEventListener('click', (e) => {
            if (e.target.tagName === 'LI') {
                const selectedCity = e.target.getAttribute('data-city');
                activeCity.textContent = selectedCity;
                localStorage.setItem('selectedBranch', selectedCity);
                closeGeoList();
            }
        });
    }

    // --- 4. ГЛОБАЛЬНЫЕ КЛИКИ ---
    document.addEventListener('click', (e) => {
        if (geoPicker && geoPicker.classList.contains('open') && !geoPicker.contains(e.target)) {
            cityList.style.display = 'none';
            geoPicker.classList.remove('open');
        }

        if (sidebar && sidebar.classList.contains('active') && !sidebar.contains(e.target) && !openBtn.contains(e.target)) {
            toggleMenu();
        }
    });

    // --- Плавный скролл удален (реализовано через CSS scroll-padding-top) ---

    // --- 5. ЛОГИКА LIGHTBOX (ДЕЛЕГИРОВАНИЕ СОБЫТИЙ) ---
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightboxImage');
    const lightboxCaption = document.getElementById('lightboxCaption');
    const portfolioGrid = document.getElementById('portfolioGrid');

    if (lightbox && portfolioGrid) {
        // Вешаем ОДИН обработчик на сетку вместо цикла
        portfolioGrid.addEventListener('click', (e) => {
            const item = e.target.closest('.portfolio-item');
            if (!item) return; // Клик был не по карточке
            
            e.preventDefault();
            
            lightboxImg.src = item.getAttribute('href');
            lightboxCaption.textContent = item.getAttribute('title') || "";
            
            lightbox.classList.add('active');
            document.body.style.overflow = 'hidden';
        });

        const closeLightbox = () => {
            lightbox.classList.remove('active');
            document.body.style.overflow = '';
            setTimeout(() => { lightboxImg.src = ""; }, 300); // Очистка после анимации
        };

        lightbox.addEventListener('click', (e) => {
            // Закрываем, если клик был по крестику или по фону (overlay)
            if (e.target.id === 'lightboxClose' || e.target.classList.contains('lightbox-overlay')) {
                closeLightbox();
            }
        });

        document.addEventListener('keydown', (e) => {
            if (e.key === "Escape" && lightbox.classList.contains('active')) {
                closeLightbox();
            }
        });
    }

    



    // GeoPicker 
    cityList.addEventListener('click', (e) => {
        if (e.target.tagName === 'LI') {
            const selectedCity = e.target.getAttribute('data-city');
            
            // 1. Обновляем визуальный выбор
            activeCity.textContent = selectedCity;
            
            // 2. Сохраняем в память браузера
            localStorage.setItem('selectedBranch', selectedCity);
            
            // 3. ОБНОВЛЯЕМ КОНТЕНТ НА СТРАНИЦЕ
            updateBranchUI(selectedCity);
            
            closeGeoList();
        }
    });

    // ПРИ ЗАГРУЗКЕ СТРАНИЦЫ:
    const savedBranch = localStorage.getItem('selectedBranch') || "Орша"; 
    activeCity.textContent = savedBranch;
    updateBranchUI(savedBranch);
















    
});
