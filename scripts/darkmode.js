export function initDarkMode() {
  document.addEventListener("DOMContentLoaded", function () {
    const darkModeToggle = document.getElementById("darkModeToggle");
    const mainlogo = document.getElementById('main-logo');
    const footerlogo = document.getElementById('footer-logo');
    const body = document.body;
    
    if (localStorage.getItem("darkMode") === "enabled") {
      body.classList.add("dark-mode");
      darkModeToggle.textContent = "☀️";
    } else {
      darkModeToggle.textContent = "🌙"; 
    }
    
    darkModeToggle.addEventListener("click", function () {
      body.classList.toggle("dark-mode");
      
      if (body.classList.contains("dark-mode")) {
        mainlogo.src = 'images/batman logo dark.webp';
        footerlogo.src = 'images/logo.webp';
        localStorage.setItem("darkMode", "enabled");
        darkModeToggle.textContent = "☀️"; 
      } else {
        localStorage.setItem("darkMode", "disabled");
        mainlogo.src = 'images/logobat.jpg';
        footerlogo.src = 'images/darkmini.webp';
        darkModeToggle.textContent = "🌙"; 
      }
    });
  });
}