import { initDarkMode } from './darkmode.js';
import { initTopnav } from './hamburger.js';
import { initFeedbackModal } from './feedbackModal.js';
import { initFormSubmit } from './feedbackModal.js';


const imageMap = {
    "Pamela Isley": "images/poisonivy.png",
    "Jonathan Crane": "images/scarecrow.png",
    "Harvey Dent": "images/two-face.png",
    "Bane": "images/bane.png",
    "Stephanie Brown": "images/spoiler.png",
    "Cassandra Cain": "images/orphan.png",
    "Luke Fox": "images/batwing.png",
    "Kate Kane": "images/batwoman.png",
    "Clayface": "images/clayface.png",
    "Holly Robinson": "images/hollyrobinson.png",
    "Renee Montoya": "images/reneemontoya.png",
    "Azrael": "images/azrael.png",
    "Lady Shiva": "images/ladyshiva.png",
    "Professor Pyg": "images/pyg.png",
    "Hush": "images/hush.png",
    "Hugo Strange": "images/hugostrange.png",
    /*
    "Black Mask":"images/",
    "Firefly":"images/",
    "Anarky":"images/",
    "Ventriloquist":"images/",
    "Mad Hatter":"images/",
    "Zsasz":"images/",
    "Bat-Mite":"images/",
    "Bluebird":"images/",
    "Duke Thomas":"images/",
    "David Zavimbe":"images/",
    "Lucius Fox":"images/",
    "Man-Bat":"images/",
    "Magpie":"images/",
    "Calendar Man":"images/",
    "KGBeast":"images/",
    "Doctor Phosphorus":"images/",
    "Joker":"images/",
    "Dr. Leslie Thompkins":"images/",
    "Maxie Zeus":"images/",
    "Vicki Vale":"images/",
    "Jason Bard":"images/",
    "Scarface":"images/",
    "Doctor Death":"images/",
    "Onomatopoeia":"images/",
    "Flamingo":"images/",
    "Prometheus":"images/",
    "David Zavimbe":"images/",
    "Julia Pennyworth":"images/",
    "Mr. Zsasz":"images/",
    "Simon Hurt":"images/",
    "The Architect":"images/",
    "The Court of Owls":"images/",
    "Talon":"images/",
    "Deadshot":"images/",
    "Solomon Grundy":"images/",
    "Nocturna":"images/",
    "Bat-Cow":"images/",
    "Gotham":"images/",
    "Gotham Girl":"images/",
    "Ra's al Ghul":"images/",
    "Talia al Ghul":"images/",
    "Victor Fries":"images/",
    "Waylon Jones":"images/",
    "Bruce Wayne":"images/",
    "Selina Kyle":"images/",
    "Alfred Pennyworth":"images/",
    "Dick Grayson":"images/",
    "Barbara Gordon":"images/",
    "Tim Drake":"images/",
    "Jason Todd":"images/",
    "Damian Wayne":"images/",
    "James Gordon":"images/",
    "Harleen Quinzel":"images/",
    "Oswald Cobblepot":"images/",
    "Edward Nigma":"images/",
    "Ratcatcher":"images/",
    "Humpty Dumpty":"images/",
    "The Phantasm":"images/",
    "The Batman Who Laughs":"images/",
    "Orca":"images/",
    "The Wrath":"images/",
    "Signalman":"images/",
    "Calendar Man":"images/",
    "KGBeast":"images/", 
    */

};


const params = new URLSearchParams(window.location.search);
const characterName = params.get('name');


async function loadCharacterPage() {
    try {
        const response = await fetch('https://api.batmanapi.com/v1/characters/?pagination[pageSize]=82');
        if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
        const data = await response.json();
        const allCharacters = data.data;

        const characterName = new URLSearchParams(window.location.search).get('name');
        const character = allCharacters.find(c => c.attributes.name === characterName);

        if (character) {
            renderSingleCharacter(character);
        } else {
            document.querySelector('section.character').innerHTML = `<p>Character not found.</p>`;
        }
    } catch (err) {
        console.error(err);
    }
}

function renderSingleCharacter(character) {
    const { name, alias, role, description, abilities, creator, first_appearance, gender } = character.attributes;
    const imgSrc = imageMap[name] || 'images/placeholder.png';
    const section = document.querySelector('section.character');

    section.innerHTML = `
        <h2>${name}</h2>
        <img src="${imgSrc}" alt="${name}">
        <p><strong>Alias:</strong> ${alias}</p>
        <p><strong>Role:</strong> ${role}</p>
        <p><strong>Abilities:</strong> ${abilities.join(', ')}</p>
        <p><strong>Description:</strong> ${description}</p>
        <p><strong>Creator(s):</strong> ${creator}</p>
        <p><strong>First Appearance:</strong> ${first_appearance}</p>
        <p><strong>Gender:</strong> ${gender}</p>
        <div class="bat-signal"></div>  
    `;
}

loadCharacterPage();



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
