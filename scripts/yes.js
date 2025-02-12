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


async function fetchCharacters() {
    try {
        const response = await fetch('https://api.batmanapi.com/v1/characters/?pagination[pageSize]=16');
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        
        const list = document.getElementById('character-list');
        data.data.forEach(character => {
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
    } catch (error) {
        console.error('Error fetching characters:', error);
    }
}

fetchCharacters();

