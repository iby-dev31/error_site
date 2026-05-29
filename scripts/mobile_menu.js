        const toggleBtn = document.getElementById('toggleBtn');
        const content = document.getElementById('torgern');

            let isXIcon = true;

            toggleBtn.addEventListener('click', function() {
            const computedStyle = window.getComputedStyle(content);

            const icon = this.querySelector('i');

            if (isXIcon) {
                icon.className = 'bi bi-x-lg';
                isXIcon = false;
            } else {
                icon.className = 'bi bi-list';
                isXIcon = true;
            }
            
            if (computedStyle.display === 'none') {
                content.style.display = 'block';
            } else {
                content.style.display = 'none';
            }
            });