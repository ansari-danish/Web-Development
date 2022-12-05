// let firstName = 'Danish';
// let lastName = 'Ansari';
// let fullName = firstName + " " + lastName;
// console.log(fullName)

//  

// let myPoints = 3;
// function add3Points(){
//     myPoints += 3;
// } 
// function remove3Points(){
//     myPoints -= 1;
// } 
// add3Points()
// add3Points()
// add3Points()
// console.log(myPoints)

// remove3Points()
// remove3Points() 
// console.log(myPoints)

// let btn = document.getElementById('purchase');
// let text = document.getElementById('error');

// btn.addEventListener('click',()=>{
//     text.textContent = "Something went wrong"

// })





// let firstNum = document.getElementById('first-num').textContent = 8;
// let secondNum = document.getElementById('second-num').textContent = 2;
// let total = document.getElementById('total');


// function add(){
//     let add = Number(firstNum+secondNum);
//     total.textContent = `Sum: ${add}`;
// }
// function sub(){
//     let sub  = Number(firstNum-secondNum);
//     total.textContent =`Sum: ${sub}`;
// }
// function divide(){
//     let div = Number(firstNum/secondNum);
//     total.textContent = `Sum ${div}`
// }
// function multiply(){
//     let mul = Number(firstNum * secondNum);
//     total.textContent = `Sum: ${mul}`
// }


// let biography = {
//     name : "Danish",
//     age: 19,
//     country: "India",
// };

// function logData(){
//     console.log(`${biography.name} is ${biography.age} years old and lives in ${biography.country}`);
// }

// logData();


// let age = 0;

// if(age<6){
// console.log("Free");
// }
// else if(age<18){
//     console.log("child discount");
//     }
//  else if(age<=26){
//     console.log("student discount");
// }
//  else if(age<= 66){
//     console.log("Full price")
// } else{
//     console.log("Seniour citizen discount");
// }


// let largeCountry = ["China","India","Usa","Indonesia","Pakistan"];

// for(let i = 0;i<largeCountry.length;i++){
//     console.log(" - "+largeCountry[i]);
// }

// let largeCountry = ["Tuvalu","India","Usa","Indonesia","Monaco"];

// largeCountry.shift()
// largeCountry.unshift("China");
// largeCountry.pop();
// largeCountry.push("Pakistan")
// console.log(largeCountry)


// let dayOfMonth = 13;
// let weekday = "Friday";


// if(dayOfMonth === 13 && weekday === "Friday"){
//     console.log("Fear")
// }

// let hands = ["rock","paper","scissor"];
// console.log(getRandom())
// function getRandom(){
//     let ans = Math.floor(Math.random()* 3);

//     return hands[ans];
// }

let fruits = ["apple","orange","apple","apple","orange"];

let appleShelf = document.getElementById('apple-self');
let orangeShelf = document.getElementById('orange-self');

sortFruit()



function sortFruit(){
    for(let i = 0 ; i<fruits.length ; i++){
        if(fruits[i]==="apple"){
            appleShelf.textContent += fruits[i] + " ";
        }
        else if(fruits[i]==="orange"){
            orangeShelf.textContent += fruits[i] + " ";
        }
    }
}