//Since the API doensn't actually give you an image, we are going to need to add images in this image map 
//that atuomatically will sync it with the name of the character, as long as the name is the same as the api
//webp images would probably be better, we might have to convert them

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
    "Hugo Strange": "images/hugostrange.png"
};



//the code below fetches the characters from the api and displays them as divs in a UL
//it also has a show all and show less button because there are 82 characters in total

let allCharacters = []; 
let showingAll = false; 

async function fetchCharacters() {
    try {
        const response = await fetch('https://api.batmanapi.com/v1/characters/?pagination[pageSize]=82');
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        allCharacters = data.data; 

        renderCharacters(false); 
    } catch (error) {
        console.error('Error fetching characters:', error);
    }
}

function renderCharacters(showAll) {
    const list = document.getElementById('character-list');
    list.innerHTML = ''; 

    const charactersToShow = showAll ? allCharacters : allCharacters.slice(0, 16);
    
    charactersToShow.forEach(character => {
        const { name, alias, role, description, abilities } = character.attributes;
        const imgSrc = imageMap[name] || 'images/placeholder.png';

        const li = document.createElement('li');
        li.innerHTML = `
            <img src="${imgSrc}" alt="${name}">
            <div>
                <em><strong>${name}<br> Alias: ${alias}</strong></em><br>
                <strong>Role:</strong> ${role}<br>
                <strong>Abilities:</strong> ${abilities.join(', ')}<br>
                <strong>Description:</strong> ${description}
            </div>
        `;
        list.appendChild(li);
    });

    
    document.getElementById('toggle-btn').textContent = showAll ? 'Show Less' : 'Show All';
}

function toggleCharacters() {
    showingAll = !showingAll;
    renderCharacters(showingAll);
}

fetchCharacters();
