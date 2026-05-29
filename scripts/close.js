const itemclose = document.getElementById('close');
const icon = document.getElementById('icons_menu');

    itemclose.addEventListener('click', function() {

        icon.className = 'bi bi-list';

        isXIcon = true

        content.style.display = 'none';
    });