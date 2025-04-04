//HEADER
// Dark Mode
document.addEventListener("DOMContentLoaded", function () {
    const darkModeToggle = document.getElementById("darkModeToggle");
    const body = document.body;
  
    // Check for saved dark mode preference
    if (localStorage.getItem("darkMode") === "enabled") {
        body.classList.add("dark-mode");
        darkModeToggle.textContent = "☀️"; // Sun icon for light mode
    } else {
        darkModeToggle.textContent = "🌙"; // Moon icon for dark mode
    }
  
    darkModeToggle.addEventListener("click", function () {
        body.classList.toggle("dark-mode");
  
        if (body.classList.contains("dark-mode")) {
            localStorage.setItem("darkMode", "enabled");
            darkModeToggle.textContent = "☀️"; // Change to sun
        } else {
            localStorage.setItem("darkMode", "disabled");
            darkModeToggle.textContent = "🌙"; // Change to moon
        }
    });
});




//MAIN
const apiKey = '44445625';
const LIMIT = 6;

let allMovies = [];
let allShows = [];
let showingAllMovies = false;
let showingAllShows = false;

async function fetchBatmanMovies() {
    const response = await fetch(`https://www.omdbapi.com/?s=Batman&type=movie&apikey=${44445625}`);
    const data = await response.json();
    if (data.Search) {
        allMovies = data.Search;
        displayItems(allMovies, 'movies-container', showingAllMovies, 'show-more-movies');
    }
}

async function fetchBatmanShows() {
    const response = await fetch(`https://www.omdbapi.com/?s=Batman&type=series&apikey=${44445625}`);
    const data = await response.json();
    if (data.Search) {
        allShows = data.Search;
        displayItems(allShows, 'shows-container', showingAllShows, 'show-more-shows');
    }
}

function displayItems(items, containerId, showAll, buttonId) {
    const container = document.getElementById(containerId);
    const button = document.getElementById(buttonId);

    container.innerHTML = '';

    const visibleItems = showAll ? items : items.slice(0, LIMIT);

    visibleItems.forEach(item => {
        const element = document.createElement('div');
        element.innerHTML = `
            <img src="${item.Poster}" alt="${item.Title} poster">
            <p>${item.Title} (${item.Year})</p>
        `;
        container.appendChild(element);
    });

    if (items.length > LIMIT) {
        button.style.display = 'block';
        button.textContent = showAll ? 'Show Less' : 'Show More';
    } else {
        button.style.display = 'none';
    }
}

// Toggle functions
function toggleMovies() {
    showingAllMovies = !showingAllMovies;
    displayItems(allMovies, 'movies-container', showingAllMovies, 'show-more-movies');
}

function toggleShows() {
    showingAllShows = !showingAllShows;
    displayItems(allShows, 'shows-container', showingAllShows, 'show-more-shows');
}

// On load
window.onload = function () {
    fetchBatmanMovies();
    fetchBatmanShows();
    document.getElementById('show-more-movies').addEventListener('click', toggleMovies);
    document.getElementById('show-more-shows').addEventListener('click', toggleShows);
};





//FOOTER
function displayLastModified() {
    const lastModifiedDate = document.lastModified; 
    document.getElementById('lastModified').textContent = lastModifiedDate; 
}

displayLastModified();