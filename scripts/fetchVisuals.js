const apiKey = '44445625';

//Movies
async function fetchBatmanMovies() {
    const response = await fetch(`https://www.omdbapi.com/?s=Batman&type=movie&apikey=${44445625}`);
    const data = await response.json();
    if (data.Search) {
        allMovies = data.Search;
        displayItems(allMovies, 'movies-container', showingAllMovies, 'show-more-movies');
    }
}

//TV Shows
async function fetchBatmanShows() {
    const response = await fetch(`https://www.omdbapi.com/?s=Batman&type=series&apikey=${44445625}`);
    const data = await response.json();
    if (data.Search) {
        allShows = data.Search;
        displayItems(allShows, 'shows-container', showingAllShows, 'show-more-shows');
    }
}