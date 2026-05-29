// Проверяем, был ли уже сделан выбор
if (!localStorage.getItem('cookieChoice')) {
    document.body.insertAdjacentHTML('beforeend', `
        <div class="cookie">
            <h2>Политика использования файлов cookie</h2>
            <p>Cookie — это небольшие текстовые файлы, которые веб-сайт сохраняет на вашем устройстве (компьютере, телефоне, планшете) при первом посещении. Они помогают сайту запоминать информацию о ваших действиях и предпочтениях. <a href="/cookie-policy">Узнайте подробнее</a></p>
            <div>
                <button class="accept-btn">Прийняти</button>
                <button class="decline-btn">Не прийняти</button>
            </div>
        </div>
    `);

    const cookieBlock = document.querySelector('.cookie');
    const acceptBtn = document.querySelector('.accept-btn');
    const declineBtn = document.querySelector('.decline-btn');

    function handleCookieChoice(choice) {
        localStorage.setItem('cookieChoice', choice);
        cookieBlock.style.display = 'none';
        
        if (choice === 'accepted') {
            console.log('Cookies приняты');
            // Здесь можно включить аналитику и другие сервисы
        } else {
            console.log('Cookies отклонены');
            // Здесь можно отключить все сервисы, использующие cookies
        }
    }

    acceptBtn.addEventListener('click', () => handleCookieChoice('accepted'));
    declineBtn.addEventListener('click', () => handleCookieChoice('declined'));
}

function delete_cookie() {
    var result = confirm('Delete Cookie?')

    if (result) {
    alert('Delete Cookie: OK')
    localStorage.removeItem('cookieChoice');
    localStorage.removeItem('lang');
    location.reload()
    } else {
    alert('Delete Cookie: No')
    }
}