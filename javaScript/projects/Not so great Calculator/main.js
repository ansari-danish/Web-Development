let total = 0;
let zero = document.querySelector('.zero')
let nine = document.querySelector('.nine')
let five = document.querySelector('.five')
let four = document.querySelector('.four')
let eight = document.querySelector('.eight')
let three = document.querySelector('.three')
let result = document.querySelector('.result')


result.innerHTML = total
zero.addEventListener('click', () => {
    total = 0;
    result.innerHTML = total
})
nine.addEventListener('click', () => {
    total += 9;
    result.innerHTML = total
})
five.addEventListener('click', () => {
    total -= 5;
    result.innerHTML = total
})
four.addEventListener('click', () => {
    total += 4;
    result.innerHTML = total
})
eight.addEventListener('click', () => {
    total +=8;
    result.innerHTML = total
})
three.addEventListener('click', () => {
    total -= 3;
    result.innerHTML = total
})