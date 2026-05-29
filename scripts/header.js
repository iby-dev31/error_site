let pagesData = {};

const header_elemend = document.querySelector('header');

header_elemend.insertAdjacentHTML('beforeend', `
            <div class="logo">
                <a href="/"><img src="/media/image/icon2.png"></a>
                <a class="logo_text" href="/">Сила в Любви</a>
            </div>

            <div>
                <select id="languageSwitcher">
                    <option value="ru">Русский</option>
                    <option value="ua">Український</option>
                    <option value="en">English</option>
                </select>

                <button id="toggleBtn"><i id="icons_menu" class="bi bi-list"></i></button>
            </div>
        `);

const mobile_menu = document.createElement('script');
    mobile_menu.src = '/scripts/mobile_menu.js?v=' + Date.now();
    document.body.appendChild(mobile_menu);

const fooder_content = document.createElement('script');
    fooder_content.src = '/scripts/footer.js?v=' + Date.now();
    document.body.appendChild(fooder_content);

const lang_scripts = document.createElement('script');
    lang_scripts.src = '/scripts/lang.js?v=' + Date.now();
    document.body.appendChild(lang_scripts);

fetch('/config/page.json', {
method: 'GET',
headers: {
    'Cache-Control': 'no-cache, no-store, must-revalidate',
    'Pragma': 'no-cache',
    'Expires': '0'
}
})
    .then(response => response.json())
    .then(data => {
        pagesData = data;
        generateMenuItems(pagesData.pages); // вызываем функцию без возврата
    })
    .catch(error => console.error('Ошибка загрузки:', error));

function generateMenuItems(pages) {
    if (!pages || pages.length === 0) {
        document.getElementById('menu_list').insertAdjacentHTML('afterend', 
            '<ul><li>Нет страниц</li></ul>'
        );
        return;
    }
    
    // Сортируем по order и фильтруем активные
    const activePages = pages
        .filter(page => page.active !== false)
        .sort((a, b) => (a.order || 999) - (b.order || 999));
    
    const menuItems = activePages.map(page => `
        <li class="list-menu">
            <a href="${page.url}">
                <i class="${page.icon}"></i> ${page.name}
            </a>
        </li>
    `).join('');
    
    // Вставляем в DOM
    const menu_list_element = document.getElementById('torgern');
    if (menu_list_element) {
        menu_list_element.insertAdjacentHTML('beforeend', `
                <button id="close"><i class="bi bi-x-lg"></i></button>
                <nav class="menu_torgern">
                        <ul>
                            ${menuItems}
                        </ul>
                </nav>
        `);
        const close_menu = document.createElement('script');
            close_menu.src = '/scripts/close.js?v=' + Date.now();
            document.body.appendChild(close_menu);
    } else {
        console.error('Элемент с id "menu_list" не найден');
    }
}