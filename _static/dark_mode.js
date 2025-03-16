document.addEventListener('DOMContentLoaded', function () {
    const breadcrumbs = document.querySelector('.wy-breadcrumbs');
    if (!breadcrumbs) {
        console.error('Breadcrumbs element (.wy-breadcrumbs) not found!');
        return;
    }

    const toggleButton = document.createElement('button');
    toggleButton.style.marginLeft = '20px';

    function updateButtonText() {
        toggleButton.textContent = document.body.classList.contains('dark-mode') ? 'Light Mode' : 'Dark Mode';
    }

    breadcrumbs.appendChild(toggleButton);

    const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const savedPreference = localStorage.getItem('darkMode');

    if (savedPreference !== null) {
        if (savedPreference === 'true') {
            document.body.classList.add('dark-mode');
        } else {
            document.body.classList.remove('dark-mode');
        }
    } else if (prefersDarkMode) {
        document.body.classList.add('dark-mode');
    }

    updateButtonText();

    toggleButton.addEventListener('click', function () {
        document.body.classList.toggle('dark-mode');
        localStorage.setItem('darkMode', document.body.classList.contains('dark-mode'));
        updateButtonText();
    });

    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
        if (localStorage.getItem('darkMode') === null) {
            document.body.classList.toggle('dark-mode', e.matches);
            updateButtonText();
        }
    });
});