document.addEventListener("DOMContentLoaded", function () {
  const batmanComics = [
      {
          title: "Detective Comics #27 (1939) - First appearance of Batman",
          imageUrl: "https://upload.wikimedia.org/wikipedia/en/b/bc/Detective_Comics_27_%28May_1939%29.png", 
      },
      {
          title: "Batman: The Killing Joke (1988) - Written by Alan Moore",
          imageUrl: "https://m.media-amazon.com/images/I/A1QY5vfbpmL._UF1000,1000_QL80_.jpg", 
      },
      {
          title: "Batman: Year One (1987) - Written by Frank Miller",
          imageUrl: "https://static.dc.com/dc/files/default_images/BMYO_DLX_149-001_HD_5b7f2308076d16.46344415.jpg", 
      },
      {
          title: "The Dark Knight Returns (1986) - Written by Frank Miller",
          imageUrl: "https://imgix-media.wbdndc.net/ingest/book/preview/1ef201a2-81a2-4339-b5ee-669de432618f/60e21d3a-d73e-4ef7-b629-e163357546a5/0.jpg?w=375&h=576&sharp=50&fit=fill&fill=blur&auto=format%2Ccompress&", 
      },
      {
          title: "The Long Halloween (1996-1997) - Written by Jeph Loeb",
          imageUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/5/52/Batman_thelonghalloween.jpg/220px-Batman_thelonghalloween.jpg", 
      },
      {
          title: "The Dark Knight Strikes Again (2001) - Written by Frank Miller",
          imageUrl: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1517013287i/38213564.jpg",
      },
      {
          title: "Batman: A Death in the Family (1988) - Written by Jim Starlin",
          imageUrl: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1526768145i/107032.jpg"
      },
      {
          title: "Batman: The Court of Owls (2011) - Written by Scott Snyder",
          imageUrl: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1568997754i/39018271.jpg",
      },
      {
          title: "Batman: Son of the Demon (1987) - Written by Mike W. Barr",
          imageUrl: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1404547821i/107096.jpg",
      },
      {
          title: "Gotham by Gaslight (1989) - Written by Brian Augustyn",
          imageUrl: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1376163603i/107159.jpg",
      },
      {
          title: "Batman: The Black Mirror (2011) - Written by Scott Snyder",
          imageUrl: "https://m.media-amazon.com/images/I/91iI1+iVDJL.jpg",
      },
      {
        title: "Batman: Venom (1991) - Written by Dennis O'Neil",
        imageUrl: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1522284386i/39674259.jpg",
      },
      {
        title: "Batman: Ego (2000) - Written by Darwyn Cooke",
        imageUrl: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1635438997i/1309276.jpg",
      },
      {
        title: "The Batman Who Laughs (2017-2018) - Written by Scott Snyder",
        imageUrl: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1565715046l/44132735.jpg",
      },
      {
        title: "Batman: Prey (1990) - Written by Doug Moench",
        imageUrl: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1568999584i/13228403.jpg",
      },
  ];


  function displayComics(comics) {
      const container = document.getElementById('comics-container');
      container.innerHTML = ''; 

      comics.forEach(comic => {
          const comicElement = document.createElement('div');
          comicElement.classList.add('comic-item');

          // Create and append the comic image
          const comicImage = document.createElement('img');
          comicImage.src = comic.imageUrl;
          comicImage.alt = comic.title;
          comicImage.classList.add('comic-image');
          comicElement.appendChild(comicImage);

          // Create and append the comic title
          const comicText = document.createElement('p');
          comicText.textContent = comic.title;
          comicElement.appendChild(comicText);

          container.appendChild(comicElement);
      });
  }

  displayComics(batmanComics);

  document.getElementById('lastModified').textContent = document.lastModified;
});

//FOOTER
function displayLastModified() {
    const lastModifiedDate = document.lastModified; 
    document.getElementById('lastModified').textContent = lastModifiedDate; 
}

displayLastModified();