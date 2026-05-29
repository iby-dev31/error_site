// Окрема глобальна змінна для YouTube
let catalogData = {};

fetch('/config/' + catalog + '.json', {
    method: 'GET',
    headers: {
        'Cache-Control': 'no-cache, no-store, must-revalidate',
        'Pragma': 'no-cache',
        'Expires': '0'
    }
})
.then(response => response.json())
.then(data => {
    catalogData = data;
    generateYoutubeItems(catalogData[catalog]); // ← інша назва функції
})
.catch(error => console.error('Ошибка загрузки YouTube:', error));

// Функція для YouTube (ІНША назва)
function generateYoutubeItems(channels) {
    if (!channels || channels.length === 0) {
        const container = document.getElementById('catalog_container');
        if (container) {
            container.innerHTML = '<div>Немає каналів</div>';
        }
        return;
    }
    
    // Сортируем по order и фильтруем активные
    const activeChannels = channels
        .filter(channel => channel.active !== false)
        .sort((a, b) => (a.order || 999) - (b.order || 999));
    
    // Создаем HTML для YouTube
    const catalogItems = activeChannels.map(channel => `
        <div class="catalog-card">
            <img src="${channel.img}?v=${Date.now()}" alt="${channel.name}">
            <h3>${channel.name}</h3>
            <p>${channel.description}</p>
            <button onclick="window.open('${channel.url}', '_blank')"><i class="${channel.icon}"></i> ${channel.button_text}</button>
        </div>
    `).join('');
    
    // Вставляем в специальный контейнер для YouTube
    const container = document.getElementById('catalog');
    if (container) {
        container.insertAdjacentHTML('beforeend', `
            ${catalogItems}
        `);
        console.log(catalogItems);
    } else {
        console.error('Елемент з id "catalog_container" не знайдено');
    }
}