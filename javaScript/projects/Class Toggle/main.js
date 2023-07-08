let pythonImg = document.querySelector('.python') 
let javaScriptImg = document.querySelector('.javascript')
let goLangImg = document.querySelector('.go');
// let pythonHeading = document.querySelector('.pheading') 
// let javaScriptHeading = document.querySelector('.jheading')
// let goHeading = document.querySelector('.gheading');
let heading = document.querySelectorAll('li');
// pythonHeading.addEventListener('click', () => {
//     pythonImg.classList.toggle('hidden');
//     javaScriptImg.classList.add('hidden')
//     goLangImg.classList.add('hidden')
// });
// javaScriptHeading.addEventListener('click', () => {
//     pythonImg.classList.add('hidden');
//     javaScriptImg.classList.toggle('hidden')
//     goLangImg.classList.add('hidden')
// })
// goHeading.addEventListener('click', () => {
//     pythonImg.classList.add('hidden');
//     javaScriptImg.classList.add('hidden')
//     goLangImg.classList.toggle('hidden')
// })

heading.forEach(elem => elem.addEventListener('click', checkLang))
function checkLang (click){
    if(click.target.classList.contains('pheading')){
        pythonImg.classList.toggle('hidden')
    }
    else{
        alert("Wrong Guess")
    }
}