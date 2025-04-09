import { initDarkMode } from './darkmode.js';
import { initTopnav } from './hamburger.js';
import { initFeedbackModal } from './feedbackModal.js';
import { initFormSubmit } from './feedbackModal.js';

document.addEventListener("DOMContentLoaded", function () {
    //MAIN
    // Batman Comics Data
    const batmanComics = [
        {
            title: "Detective Comics #27 (1939) - First appearance of Batman",
            imageUrl: "images/detective_comics_27.webp",
        },
        {
            title: "Batman: The Killing Joke (1988) - Written by Alan Moore",
            imageUrl: "images/batman_the_killing_joke.webp",
        },
        {
            title: "Batman: Year One (1987) - Written by Frank Miller",
            imageUrl: "images/batman_year_one.webp",
        },
        {
            title: "The Dark Knight Returns (1986) - Written by Frank Miller",
            imageUrl: "images/batman_the_dark_knight_returns.webp",
        },
        {
            title: "The Long Halloween (1996-1997) - Written by Jeph Loeb",
            imageUrl: "images/batman_the_long_halloween.webp",
        },
        {
            title: "The Dark Knight Strikes Again (2001) - Written by Frank Miller",
            imageUrl: "images/batman_the_dark_knight_strikes_again.webp",
        },
        {
            title: "Batman: A Death in the Family (1988) - Written by Jim Starlin",
            imageUrl: "images/batman_a_death_in_the_family.webp",
        },
        {
            title: "Batman: The Court of Owls (2011) - Written by Scott Snyder",
            imageUrl: "images/batman_the_court_of_owls.webp",
        },
        {
            title: "Batman: Son of the Demon (1987) - Written by Mike W. Barr",
            imageUrl: "images/batman_son_of_the_demon.webp",

        },
        {
            title: "Gotham by Gaslight (1989) - Written by Brian Augustyn",
            imageUrl: "images/gotham_by_gaslight.webp",
        },
        {
            title: "Batman: The Black Mirror (2011) - Written by Scott Snyder",
            imageUrl: "images/batman_the_black_mirror.webp",
        },
        {
          title: "Batman: Venom (1991) - Written by Dennis O'Neil",
          imageUrl: "images/batman_venom.webp",
        },
        {
          title: "Batman: Ego (2000) - Written by Darwyn Cooke",
          imageUrl: "images/batman_ego.webp",
        },
        {
          title: "The Batman Who Laughs (2017-2018) - Written by Scott Snyder",
          imageUrl: "images/the_batman_who_laughs.webp",
        },
        {
          title: "Batman: Prey (1990) - Written by Doug Moench",
          imageUrl: "images/batman_prey.webp",
        },
    ];

    function displayComics(comics) {
        const container = document.getElementById('comics-container');
        if (!container) return;  // Avoid errors if the element is missing
        container.innerHTML = '';

        comics.forEach(comic => {
            const comicElement = document.createElement('div');
            comicElement.classList.add('comic-item');

            const comicImage = document.createElement('img');
            comicImage.src = comic.imageUrl;
            comicImage.alt = comic.title;
            comicImage.classList.add('comic-image');
            comicElement.appendChild(comicImage);

            const comicText = document.createElement('p');
            comicText.textContent = comic.title;
            comicElement.appendChild(comicText);

            container.appendChild(comicElement);
        });
    }

    displayComics(batmanComics);

});

function displayLastModified() {
    const lastModifiedDate = document.lastModified; 
    document.getElementById('lastModified').textContent = lastModifiedDate; 
}


displayLastModified();
initDarkMode();
initTopnav();
initFeedbackModal();
document.addEventListener('DOMContentLoaded', () => {
    initFormSubmit();
  });
