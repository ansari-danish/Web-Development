// Easy 
// create a function that subtracts two number and alerts the difference
// const subTwoNumsAndAlerts = (num1, num2) => {
//     alert(num1 - num2)
// }
// subTwoNumsAndAlerts(2,3)

// create a function that divides three number and console logs the quotient
// const divide = (num1, num2, num3) => {
//     console.log(num1 / num2 / num3)
// }
// divide(12,2,4)
// create a function that multiplys three numbers and return the product
// const multiply = (num1, num2, num3) => {
//     return num1*num2*num3
// }

// Medium 

//create a function that takes in three numbers. And the first two numbers and return the remainder of dividing the sum of the first two numbers by the third number
// const remainder = (num1, num2, num3) => {
//     return (num1 + num2) % num3;
// }

// Hard 

//create a function that takes in 4numbers. Multiply the first two numbers. If the product is greater than 100 add the sum of the last two numbers and console log the value. If the product is less then 100, subtracts the difference of the last two numbers and console log the value. If the product is 100, multiply the first three numbers together and alert the remainder of dividing the fourth number
// const number = (num1, num2, num3, num4) => {
//     let firstTwo = num1 * num2;
//     if(firstTwo < 100){
//         let diff = num3 - num4
//     }
//     else if (firstTwo > 100){
//         let subtract = num3 - num4
//         console.log(subtract)
//     }
//     else if (firstTwo === 100){
//         let multiply = num1 * num2 * num3
//         alert(multiply/ num4)
//     }
// } 


// const twentyOne = () => {
//     for(let i = 1; i<=21; i++){
//         let heading = document.createElement('h1');
//         heading.innerText = i;
//         document.querySelector('body').appendChild(heading)
//         console.log('21')
//     }
// }
// twentyOne()


// let heading = document.querySelector('h1');
// heading.addEventListener('click', () => {
//     let render = document.querySelector('.stops')
//     render.innerText = ''
//     let inputVal = Number(document.querySelector('input').value);
//     for(let i = 1;i<=inputVal;i++){
//         console.log('stop snacknig')
//         render.innerText += ' Stop snacking'
//     }
// })


// Variables 
// create a variable and console.log a value
// let value = 3;
// console.log(value)

// create a variable and add 10 alert the value
// let alertValue = 5;
// alert(alertValue + 10)

// Function
// create a functoin that subtracts 4 numbers and alert the difference

// const subAlert = (num1 , num2, num3, num4) => {
//     alert (num1-num2-num3-num4);
// }
// subAlert(15,3,2,1)

// create a function that divides one number by another and return the remainder

// const remainder = (num1, num2) => {
//     return num1 % num2;
// }
// console.log(remainder(9,3))

// create a function that adds two numbers and if the sum is greater the 50 alert Jamanji
// const jamanji = (num1, num2) => {
//     if(num1 + num2 > 50){
//         alert('Jumanji')
//     }else{
//         console.log(num1+num2)
//     }
// }
// jamanji(20,53)

// create a function that multiplys three numbers and if the product is divisible by 3 alert Zebra


// const zebra = (num1, num2, num3) => {
//     let ans = num1 + num2 + num3;
//     if(ans % 3 === 0){
//         alert('Zebra')
//     }else{
//         console.log(ans)
//     }
// }
// zebra(3,3,3)


// Loops 
// create a function that takes in a word and a number. Console log the word x times where x was the number passed in  

// const logWordXTimes = (word, num) => {
//     for(let i = 1;i<=num;i++){
//         console.log(word)
//     }
// }
// logWordXTimes('hello', 7)