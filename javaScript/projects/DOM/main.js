// EASY 
// create a variable and assign it a number
// let number;
// number = 20;
// minus 10 from that number
// number -= 10
// print that number to the console 
// console.log(number)
// MEDIUM
// create a variable that holds a value from the input
// let input = document.querySelector('.number');
// add 25 to that number
// input.addEventListener('input', () => {
//     let outp= parseInt(input.value)
//     outp += 25;
    //alert that number
    // alert(outp)
// })

//HARD 

// create a variable that holds the h1
// let heading = document.querySelector('h1');
// add a event listener to that element that console logs the sum of the two previous variable
// heading.addEventListener('click', sum);



// CREATE A CONDITIONAL CHECKS THEIR AGE
let age , heading, paragraph;
// if under 16 , tell them you can not drive
// if under 18, tell them they can't hate from outside of the club, because they can't even get it

//if under 21, tell them can not drunk

//if under 25, tell them can not rent cars affordably 

//if under 30, tell them they can not rent fancy cars affordably

//if over 30, tell them there is nothing left to look forward too

// Harder 
// on clicks of the h1
// Take the value from the input
// Place the result of the conditionals in the paragraph
heading  = document.querySelector('h1');
paragraph = document.querySelector('p');
age = document.querySelector('input');
heading.addEventListener('click', () => {
    age = Number(age.value) 
    if(age < 16){
        paragraph.textContent = 'You can not drive'
    }
    if(age > 16 && age<=18){
        paragraph.textContent = "You can't hate from outside of the club, because they can't even get it"
    }
    if(age > 18 && age<=21){
        paragraph.textContent = "You can't get DRUNK"
    }
    if(age > 21 && age<=25){
        paragraph.textContent = "You can't rent cars affordably"
    }
    if(age > 25 && age <= 30){
        paragraph.textContent = "you can't rent fancy cars affordable"
    }
    else{
        paragraph.textContent = "There is nothing left to look forward too"
    }
})