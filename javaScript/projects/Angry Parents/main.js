const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
    e.preventDefault()
    const  firstName = document.querySelector('#firstName').value, firstMiddleName = document.querySelector('#firstMiddleName').value,
    lastMiddleName = document.querySelector('#lastMiddleName').value,
    lastName = document.querySelector('#lastName').value
    let string = `${firstName} ${firstMiddleName} ${lastMiddleName} ${lastName}`
    let heading = document.querySelector('.render');
    heading.innerText = string;
})