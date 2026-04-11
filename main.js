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

const portfolioImageNames = ["20250427_140806","20250503_124808","20250510_093035","20250510_095306","20250629_164633","20250705_112920","20250709_195049","20250809_103433","20250809_103757","20250809_103811","20250926_135543","20250926_135550","20250926_135559","20250926_135604","20251107_105731","20251107_124415","20251107_124439","20251107_125501","IMG_20250607_133025_542","IMG_20250607_133034_526","IMG_20250607_133037_321","IMG_20250607_133040_111","IMG_20250607_133042_598","IMG_20250607_133050_282","IMG_20250607_133057_759","IMG_20250607_133111_087","IMG_20250607_133327_120","IMG_20250607_133513_581","IMG_20250607_133529_986","IMG_20250607_133532_952","IMG_20250610_145043_863","IMG_20250610_145049_004","IMG_20250623_180944_243","IMG_20250626_134409_134","IMG_20250710_164341_293","IMG_20250710_190029_684","IMG_20250715_163055_529","IMG_20250715_163100_283","IMG_20250723_122344_233","IMG_20250723_122347_771","IMG_20250723_141218_987","IMG_20250723_141223_520","IMG_20250723_141325_024","IMG_20250725_192758_282","IMG_20250725_192803_623","IMG_20250725_192807_250","IMG_20250728_170118_378","IMG_20250729_135745_639","IMG_20250729_135751_330","IMG_20250729_135802_339","IMG_20250729_163336_406","IMG_20250806_131933_371","IMG_20250806_155058_367","IMG_20250808_162042_531","IMG_20250808_162100_274","IMG_20250808_162115_484","IMG_20250812_123146_251","IMG_20250812_123152_618","IMG_20250812_141914_940","IMG_20250812_153547_356","IMG_20250818_121111_589","IMG_20250818_143644_805","IMG_20250818_170116_169","IMG_20250819_131846_226","IMG_20250819_131849_847","IMG_20250819_133255_119","IMG_20250819_133259_038","IMG_20250827_123433_264","IMG_20250829_123637_136","IMG_20250829_123642_763","IMG_20250829_123652_406","IMG_20250901_133423_886","IMG_20250901_163702_761","IMG_20250902_124800_540","IMG_20250902_124808_300","IMG_20250902_135731_812","IMG_20250904_164042_007","IMG_20250910_135652_872","IMG_20250910_183627_963","IMG_20250910_183655_694","IMG_20250910_183719_161","IMG_20250912_114427_236","IMG_20250912_114432_361","IMG_20250912_114519_176","IMG_20250912_125345_843","IMG_20250912_125350_028","IMG_20250917_163750_373","IMG_20250917_163832_333","IMG_20250917_163836_364","IMG_20250917_163854_654","IMG_20250918_134341_614","IMG_20250918_134345_680","IMG_20250918_134348_860","IMG_20250918_134351_445","IMG_20250918_145818_157","IMG_20251013_131124_345","IMG_20251013_131128_958","IMG_20251023_104057_473","IMG_20251024_112853_901","IMG_20251024_112854_331","IMG_20251024_130845_852","IMG-0297bf8df2791f2f6c855ee44d07c87a-V","IMG-05e7cc126c465057ca28ef9b1b409d6a-V","IMG-0a6c77a796c38d0514a9a3eed6968296-V","IMG-1074ef28295ba7d3c5569e1e547181e9-V","IMG-110c77bf34e3aa92d52619981b9f622e-V","IMG-12db70da9a77ae39a9ae60d59268e74d-V","IMG-138dfdc4b5c4220689370ea146a09997-V","IMG-1a337fe596811bf64f5df045935de74a-V","IMG-1a6b0848099863c0ca1bf717925f4d3d-V","IMG-1bd78809d48086241d7ae757259526ec-V","IMG-1eb9305898dd2a3e82d6161f81fb3329-V","IMG-21b72f694fb216341f7b7e58746aadd0-V","IMG-243eba310ba71a19d8f36069005af630-V","IMG-2451bbe89abbf4a06fdc342965570070-V","IMG-24ac1f0df5a163975fc4f4ccfb6cd817-V","IMG-2a69d5a6233e06f55fea8cd6d2ebdbec-V","IMG-3121036350ed2b4f18894c623c6b03bc-V","IMG-3384f15e1b4adeab8538a4b7d92c8a82-V","IMG-38a3d250260d8f860dc2d4e5f7de20e5-V","IMG-3b1babb8f95c9dae48f08d886a203429-V","IMG-42c1b5d65390b7d779f5b28c88e3ab01-V","IMG-4317b67acef99b76d285bc8e6d58fd2f-V","IMG-459e610a7629b300b36b3b2456f3ce77-V","IMG-4bd325d6de17c99d3612736777c4dca5-V","IMG-4f153fa4e8a60de4ae30d6730a720ff7-V","IMG-4fcf9c3f0f77992591f8090008aa591a-V","IMG-540e2505dd0dca722043cc001f881581-V","IMG-58fb53d5149e25c66bddabaac93e6761-V","IMG-6267cf7cd526a66c0f9b0d2c5e3110cd-V","IMG-6567ec4ae7eecb7100d76c7c298ce917-V","IMG-6733989a80c3ffa8a7cdd43d7e9dc16b-V","IMG-680139df52b18e23fa5aa7c56f1e3348-V","IMG-6a76fa51bd84d1ef19e3bea027b9647e-V","IMG-6b8b81b5f9bdbe5f872afb5eb2eb7e08-V","IMG-6c2c5859746f9806b8a737d41a084542-V","IMG-6cc3f7d384bba1539cd346cba49856fd-V","IMG-6ceb701cc9618190c38267c62307342b-V","IMG-720e89861d0b3b4c38b7b04bcd787f4d-V","IMG-72d530c4d8354c253c3e5de2333ac85f-V","IMG-74b7882c3e5307deac63777c49a0d338-V","IMG-76abd373428cb18a186af323e2db8ae3-V","IMG-780dc5313c128a9b47f4929c042e384f-V","IMG-819bf14fe7490637c57d53121786ae38-V","IMG-8961520b91985ab7bf13fae0578f76fc-V","IMG-8bd18bc94112d0f16cbf8539b8ecdb6c-V","IMG-8f03314506aeec58efecd0c32aeff5ed-V","IMG-93f803d260a472a964c64e7a528ae04c-V","IMG-96f1d9f3a25e07f87678a6f68f435a69-V","IMG-97ab8c403e7c616233c4e919f191a457-V","IMG-98dab4da2892695935e08732d090edc3-V","IMG-9b69b0c38fa6bc5f2b8c9da14f683c5d-V","IMG-9d3a451125b7db89605a92156fa8ae77-V","IMG-9d6492f208e2f0fc377a9a43d04a1642-V","IMG-9d69e833b611e1be44264fb5b06ef9da-V","IMG-a66100af3e17c00dc250bc85588a79de-V","IMG-a7a17e20314e5fb274a2172211da2bec-V","IMG-a7bfc71ea42dd12904741f2414333ed6-V","IMG-a881579189c625289bb12d8d879fae0e-V","IMG-ae9edfe60d0606516b0d27ced19c632f-V","IMG-b37a4f09f6be82f52bd02fc95e7298cf-V","IMG-bd813135cf1a2b97ffcbc0717c88efd8-V","IMG-c6d83e4743d16e491bfc5c2cf5d1da0f-V","IMG-c8e2b3db52ee03f3b4a767c35a76ad60-V","IMG-cc6bbcfa7a40f8666552133c6466155d-V","IMG-cd9808361d8f0627c8ab90b2e2afa2d4-V","IMG-cf7a08115fb3296766dd360c5ca5f3a4-V","IMG-d2ec7687f8f553bf54270ad548492454-V","IMG-d439e897bfb4d3fc125b6bffa397329b-V","IMG-d766d35ff59cc29e893c67f6e57aa813-V","IMG-db836d8362b038a7facfa7b0b70bc315-V","IMG-e1c14b0e561347895d78a064ade78f33-V","IMG-edaa1fb1bb2fca91424c4e5bd31427cf-V","IMG-f39a6da1a5cc610da736d03bf33c3222-V","IMG-f4ef15ae7eecb7100d76c7c298ce917-V","IMG-f899d887ff321483aa09b09acc8cfe7b-V","IMG-fd9bb9e14bef2ac4cde74e4558604de3-V","IMG-ff339ea7e002b1fb891d121eefbde99f-V"];

function renderPortfolioGrid(limit) {
    const portfolioGrid = document.getElementById('portfolioGrid');
    if (!portfolioGrid) return;

    const iconSvg = `
        <div class="portfolio-zoom-icon">
            <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0016 9.5 6.5 6.5 0 109.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/></svg>
        </div>
    `;

    const fragment = document.createDocumentFragment();
    const images = typeof limit === "number" ? portfolioImageNames.slice(0, limit) : portfolioImageNames;

    images.forEach((name, index) => {
        const title = `Памятник ${index + 1}`;
        const link = document.createElement('a');
        link.href = `./src/images/portfolio/${name}.webp`;
        link.className = 'portfolio-item';
        link.title = title;

        const image = document.createElement('img');
        image.src = `./src/images/portfolio/thumb/${name}.jpg`;
        image.loading = 'lazy';
        image.alt = title;

        link.appendChild(image);
        link.insertAdjacentHTML('beforeend', iconSvg);
        fragment.appendChild(link);
    });

    portfolioGrid.appendChild(fragment);
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
    const pickers = document.querySelectorAll('.geo-picker');
    const cityLabels = document.querySelectorAll('.current-city');

    // Функция обновления текста во всех пикерах сразу
    const updateAllLabels = (cityName) => {
        cityLabels.forEach(label => {
            label.textContent = cityName;
        });
    };

    pickers.forEach(picker => {
        const current = picker.querySelector('.geo-current');
        const dropdown = picker.querySelector('.city-dropdown');

        // Открытие/Закрытие
        current.addEventListener('click', (e) => {
            e.stopPropagation();
            
            // Закрываем другие пикеры перед открытием этого
            pickers.forEach(p => {
                if (p !== picker) {
                    p.classList.remove('open');
                    p.querySelector('.city-dropdown').style.display = 'none';
                }
            });

            const isOpen = picker.classList.toggle('open');
            dropdown.style.display = isOpen ? 'block' : 'none';
        });

        // Выбор города
        dropdown.addEventListener('click', (e) => {
            const li = e.target.closest('li');
            if (li) {
                const selectedCity = li.getAttribute('data-city');
                
                // 1. Сохраняем
                localStorage.setItem('selectedBranch', selectedCity);
                
                // 2. Обновляем текст ВЕЗДЕ
                updateAllLabels(selectedCity);
                
                // 3. Вызываем вашу функцию UI (карты, телефоны)
                if (typeof updateBranchUI === "function") updateBranchUI(selectedCity);
                
                // 4. Закрываем
                picker.classList.remove('open');
                dropdown.style.display = 'none';
            }
        });
    });

    // Клик мимо — закрыть всё
    document.addEventListener('click', () => {
        pickers.forEach(p => {
            p.classList.remove('open');
            p.querySelector('.city-dropdown').style.display = 'none';
        });
    });

    // Инициализация при загрузке
    const savedCity = localStorage.getItem('selectedBranch') || "Белыничи";
    updateAllLabels(savedCity);
    if (typeof updateBranchUI === "function") updateBranchUI(savedCity);
    const portfolioContainer = document.getElementById("portfolioContainer");
    if (typeof renderPortfolioGrid === "function") renderPortfolioGrid(portfolioContainer ? 18 : undefined);



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








    // --- ЛОГИКА ФИЛЬТРАЦИИ КАТАЛОГА ---
    const filterButtons = document.querySelectorAll('.filter-btn');
    const productCards = document.querySelectorAll('.product-card');

    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            // Меняем активную кнопку
            filterButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filterValue = btn.getAttribute('data-filter');

            productCards.forEach(card => {
                if (filterValue === 'all' || card.getAttribute('data-category') === filterValue) {
                    card.style.display = 'block';
                    // Можно добавить анимацию появления
                    card.style.animation = 'fadeIn 0.5s ease forwards';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
});




window.addEventListener('DOMContentLoaded', () => {
    // 1. Проверяем, есть ли в адресе параметр filter
    const urlParams = new URLSearchParams(window.location.search);
    const filterValue = urlParams.get('filter');

    if (filterValue) {
        // 2. Ищем кнопку фильтра, у которой data-filter совпадает с тем, что в URL
        const targetButton = document.querySelector(`.filter-btn[data-filter="${filterValue}"]`);
        
        if (targetButton) {
            // 3. Если кнопка найдена, имитируем клик по ней
            // Твой существующий скрипт фильтрации подхватит этот клик и всё покажет
            targetButton.click();
            
            // 4. Опционально: скроллим к сетке товаров, чтобы пользователь сразу их увидел
            targetButton.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    }
});