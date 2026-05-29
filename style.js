const defaut_style = document.createElement('link');
defaut_style.rel = 'stylesheet';
defaut_style.href = 'https://strengthinlove.com/style/defaut.css?v=' + Date.now();
document.head.appendChild(defaut_style);

const bootstrap_icons = document.createElement('link');
    bootstrap_icons.rel = 'stylesheet';
    bootstrap_icons.href = 'https://cdn.jsdelivr.net/npm/bootstrap-icons@1.13.1/font/bootstrap-icons.min.css?v=' + Date.now();
    document.head.appendChild(bootstrap_icons);

const header_style = document.createElement('link');
    header_style.rel = 'stylesheet';
    header_style.href = 'https://strengthinlove.com/style/header.css?v=' + Date.now();
    document.head.appendChild(header_style);

const fonts_header = document.createElement('link');
    fonts_header.rel = 'stylesheet';
    fonts_header.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Playfair+Display:wght@400;500;600;700&display=swap';
    document.head.appendChild(fonts_header);

const fooder_style = document.createElement('link');
        fooder_style.rel = 'stylesheet';
        fooder_style.href = 'https://strengthinlove.com/style/fooder.css?v=' + Date.now();
        document.head.appendChild(fooder_style);

const games_style = document.createElement('link');
        games_style.rel = 'stylesheet';
        games_style.href = '/style.css?v=' + Date.now();
        document.head.appendChild(games_style);