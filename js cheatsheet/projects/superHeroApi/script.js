
const newHeroBtn = document.getElementById('hero-btn')

const heroImage = document.getElementById('heroimage')


const superToken = '494510842606756'
const baseUrl = `https:www.superheroapi.com/api.php/${superToken}`
const getRandomhero = (id,name) => {
    fetch(`${baseUrl}/${id}`).then(response => response.json()).then(json => {       
console.log(json)
heroImage.innerHTML += `<img src="${json.image.url}"height=300px width =20%/>`
})
}

// let image = 'https://www.superherodb.com/pictures2/portraits/10/100/10476.jpg'

const Random = () => {
    const number = 730;
    return Math.ceil(Math.random() * number);
}
newHeroBtn.onclick = () => getRandomhero(Random());


