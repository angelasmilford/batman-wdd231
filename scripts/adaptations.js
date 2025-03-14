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
//Movies
async function fetchBatmanMovies() {
  const url = 'http://www.omdbapi.com/?s=batman&type=movie&apikey=9f7fa826';

  try {
      const response = await fetch(url);
      
      if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      console.log(data); // Display the data in the console

      // Check if the response is successful and contains movies
      if (data.Response === 'True') {
          // You can process and display the movies here
          displayMovies(data.Search);
      } else {
          console.error('Error: ', data.Error);
      }

  } catch (error) {
      console.error('Fetch error:', error);
  }
}

function displayMovies(movies) {
  const container = document.getElementById('movies-container'); 
  container.innerHTML = ''; // Clear any existing content

  movies.forEach(movie => {
    const movieElement = document.createElement('div');
    movieElement.classList.add('movie');

    if (movie.Poster !== 'N/A') {
        const poster = document.createElement('img');
        poster.src = movie.Poster;
        poster.alt = `${movie.Title} Poster`;
        movieElement.appendChild(poster);
    }
      
    const title = document.createElement('h3');
    title.textContent = movie.Title;
    movieElement.appendChild(title);

    const year = document.createElement('p');
    year.textContent = `(${movie.Year})`;
    movieElement.appendChild(year);

      

    container.appendChild(movieElement);
  });
}

fetchBatmanMovies();


//TV Shows
fetch('https://api.tvmaze.com/search/shows?q=batman')
    .then(response => response.json())
    .then(data => {
        const container = document.getElementById('tv-series');
        data.forEach(item => {
            const show = item.show;
            const showElement = document.createElement('div');
            showElement.classList.add('show');

            if (show.image && show.image.medium) {
                const image = document.createElement('img');
                image.src = show.image.medium;
                image.alt = `${show.name} Poster`;
                showElement.appendChild(image);
            }

            const title = document.createElement('h3');
            title.textContent = show.name;
            showElement.appendChild(title);

            const summary = document.createElement('p');
            summary.innerHTML = show.summary || 'No summary available.';
            showElement.appendChild(summary);

            container.appendChild(showElement);
        });
    })
    .catch(error => console.error('Error fetching data:', error));





//FOOTER
function displayLastModified() {
    const lastModifiedDate = document.lastModified; 
    document.getElementById('lastModified').textContent = lastModifiedDate; 
}

displayLastModified();