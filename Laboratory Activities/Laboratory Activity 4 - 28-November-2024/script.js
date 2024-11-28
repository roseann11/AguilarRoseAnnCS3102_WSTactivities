function toggleTheme() {
    const body = document.body;
    const themeToggleBtn = document.querySelector('.theme-toggle i');
    
    if (body.classList.contains('light-mode')) {
        body.classList.remove('light-mode');
        body.classList.add('dark-mode');
        themeToggleBtn.classList.remove('fa-sun');
        themeToggleBtn.classList.add('fa-moon');
    } else {
        body.classList.remove('dark-mode');
        body.classList.add('light-mode');
        themeToggleBtn.classList.remove('fa-moon');
        themeToggleBtn.classList.add('fa-sun');
    }
}