const input = document.querySelector('#number');
const render = document.querySelector('.render') 
input.addEventListener('input',(e) => {
    e.preventDefault()
    const farenheit = input.value * 9/5 +32;
    render.innerText = farenheit;
})