
const newHeroBtn = document.getElementById('hero-btn')

const heroImage = document.getElementById('heroimage')

const searchInput = document.getElementById('search')

const superToken = '494510842606756'
const baseUrl = `https:www.superheroapi.com/api.php/${superToken}`
const getRandomhero = (id,name) => {
    fetch(`${baseUrl}/${id}`).then(response => response.json()).then(json => {       
console.log(json)
 heroImage.innerHTML += `<img src="${json.image.url}"height=300px width =9%/>`
})
}

// let image = 'https://www.superherodb.com/pictures2/portraits/10/100/10476.jpg'

const Random = () => {
    const number = 730;
    return Math.ceil(Math.random() * number)+1;
}
newHeroBtn.onclick = () => {
    for(let i =0;i<10;i++){

        getRandomhero(Random());
    }
}

const SearchSuperhero = (name) => {
    fetch(`${baseUrl}/search/${name}`).then(response => response.json()).then(json => {
        const hero = json.results[0]
        console.log(hero)
        heroImage.innerHTML = `<img src= "${hero.image.url}" height=300px width=9% />`
    })
}
const searchBtn = document.getElementById('search-btn')
searchBtn.onclick = () => {
    SearchSuperhero(searchInput.value)
}
