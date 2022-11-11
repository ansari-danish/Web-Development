
const newHeroBtn = document.getElementById('hero-btn')

const heroImage = document.getElementById('heroimage')

const searchInput = document.getElementById('search')

const superToken = '494510842606756'
const baseUrl = `https:www.superheroapi.com/api.php/${superToken}`
const getRandomhero = (id,name) => {
    fetch(`${baseUrl}/${id}`).then(response => response.json()).then(json => {    
        console.log(json.powerstats) 
        const superhero  = json;  
        showHeroinfo(superhero);

})
}

// let image = 'https://www.superherodb.com/pictures2/portraits/10/100/10476.jpg'

const Random = () => {
    const number = 730;
    return Math.ceil(Math.random() * number)+1;
}
newHeroBtn.onclick = () => {
        getRandomhero(Random());
    }


const showHeroinfo = (character) => {
        const name = `<h2>${character.name}</h2>`

         const img = `<img src="${character.image.url}"height=350px width =200px/>`

            const stats = Object.keys(character.powerstats).map( stat => {
            return `<p>${stat.toUpperCase()}  : ${character.powerstats[stat]}</p>`
        }).join('')
        console.log(name)
        heroImage.innerHTML = `${name}${img}${stats}` 
        return stats.join('');
    }

const SearchSuperhero = (name) => {
    fetch(`${baseUrl}/search/${name}`).then(response => response.json()).then(json => {
        const hero = json.results[0]
        showHeroinfo(hero)
        // heroImage.innerHTML = `<img src= "${hero.image.url}" height=350px width=200px />`
    })
}
searchInput.onkeyup = () => {
    SearchSuperhero(searchInput.value)
}



