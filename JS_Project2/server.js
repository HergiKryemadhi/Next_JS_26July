document.addEventListener('DOMContentLoaded', function() {
    const body = document.body;
    const modeToggle = document.getElementById('mode-toggle');
    const modeIcon = modeToggle.querySelector('i');

    function setDarkMode(isDark) {
        body.classList.toggle('dark-mode', isDark);
        body.classList.toggle('light-mode', !isDark);
        modeIcon.textContent = isDark ? 'light_mode' : 'dark_mode';
        localStorage.setItem('mode', isDark ? 'errët' : 'ndriçuar');
    }

    modeToggle.addEventListener('click', function() {
        setDarkMode(!body.classList.contains('dark-mode'));
    });

    const savedMode = localStorage.getItem('mode');
    setDarkMode(savedMode === 'errët');
});