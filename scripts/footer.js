const footer_elemend = document.querySelector('footer');

footer_elemend.insertAdjacentHTML('beforeend', `
 	        <div>
	            <img src="/media/image/icon2.png">
	            <h1>Сила в Любви</h1>
	        </div>
	        <div>
	            <p>© 2026 <a href="https://strengthinlove.com/">strengthinlove.com</a></p>
	            <br><a href="/privacy-policy" id="privacy-policy">Политика конфиденциальности</a>
	            <br><a href="/cookie-policy">Политика использования файлов cookie</a>
	            <br><a href="/about">О нас и контакты</a>
				<br><a href="javascript:delete_cookie()">Delete Cookie</a>
	        </div>
        `);