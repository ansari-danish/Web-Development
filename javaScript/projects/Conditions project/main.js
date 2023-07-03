let check = document.querySelector('.check')
let result = document.querySelector('.result')

const lowerCase = () => {
    let input = document.querySelector('input').value;
    let result = input.toLowerCase()
    return result;
}
check.addEventListener('click', () => {
   let input = lowerCase()
    if(input === 'tuesday' || input === 'thursday'){
        result.textContent = "Class Day"
    }
    else if(input === "saturday" || input === "sunday"){
        result.textContent = "Weekend"
    }
    else{
        result.textContent = "BORRRRRINNNNG DAY"
    }
}) 