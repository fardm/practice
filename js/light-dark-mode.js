const toggleSwitch = document.querySelector('#toggle-switch');

// Swithc Theme Dynamically
function toggleDarkLighteMode(isDark) {
    document.querySelector('#toggle-text').textContent = isDark ? 'تیره' : 'روشن';
    document.querySelector('#toggle-icon').textContent = isDark ? '🌙' : '☀️';
}

function switchTheme(event) {
    if (event.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        toggleDarkLighteMode(true);
        localStorage.setItem('theme', 'dark');

    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        toggleDarkLighteMode(false);
        localStorage.setItem('theme', 'light');
    }
}

// Event Listener
toggleSwitch.addEventListener('change', switchTheme);


// Check Local Storage
const currentTheme = localStorage.getItem('theme');
if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);
    if (currentTheme === 'dark') {
        toggleSwitch.checked = true;
        toggleDarkLighteMode(true);
    }
}