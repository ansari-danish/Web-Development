const container = document.getElementById('container')
fetch('https://dog.ceo/api/breeds/image/random').then(response => response.json()).then(json => {
    console.log(json.message)
    container.innerHTML = `<img src= '${json.message}' />`
})
const dogButton =document.getElementById('getNewDog');
dogButton.onclick = () => getNewDog();

const getNewDog = () => {
    fetch ('https://dog.ceo/api/breeds/image/random').then(response => response.json()).then(json => {
        console.log(json.message)
        container.innerHTML = `<img src='${json.message}'width= 600px height = 500px />`
    })
}