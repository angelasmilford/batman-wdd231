const LIMIT = 6;

let allMovies = [];
let allShows = [];
let showingAllMovies = false;
let showingAllShows = false;

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