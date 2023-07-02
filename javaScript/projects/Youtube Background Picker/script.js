let red = document.querySelector('.red')
let green  =document.querySelector('.green')
let yellow = document.querySelector('.yellow')
let blue =  document.querySelector('.blue')
let body = document.querySelector('body')
const changeBg =(color) => {
    if(color == 'red'){
        body.style.color = 'white'
        body.style.backgroundColor = "red"
    }
    if(color == 'green'){
        body.style.backgroundColor = "green"
        body.style.color = 'white'
    }
    if(color == 'blue'){
        body.style.backgroundColor = "blue"
        body.style.color = 'white'
    }
    if(color == 'yellow'){
        body.style.backgroundColor = "greenyellow"
        body.style.color = 'white'
    }
}
red.addEventListener('click',() => { changeBg('red')})
green.addEventListener('click',() => { changeBg('green')})
blue.addEventListener('click',() => { changeBg('blue')})
yellow.addEventListener('click',() => { changeBg('yellow')})
