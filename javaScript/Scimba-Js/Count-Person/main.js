// let myAge = 19;
// console.log(`Danish age is ${myAge}`)

// Creata two variables humanAge , LionAge 
// Multiply the two together and store the result
// Long myLionAge to the console


// 1yr HumanAge = 7yrs LionAge

// let humanAge = Number(prompt("whats ur age"));
// let LionAge = 7;

// let result = humanAge * LionAge;
// console.log(result)

// let bonusPoints = 50;
// bonusPoints += 50;
// console.log(bonusPoints)
// bonusPoints -=75;
// console.log(bonusPoints) 
// bonusPoints += 45;
// console.log(bonusPoints)


// const logs = () => {
//     console.log(47)
// }
// logs()


// let username = 'Danish, '
// let message = "YOu have 3 new notification";
// let userMsg = username+message;
// console.log(userMsg)
 

// let myName = 'Danish'
// let greet = "Hey, my name is ";
// let greeting = greet  + myName;

// let welcomeEl =  document.getElementById('welcomeEl');

// welcomeEl.innerText = greeting;



let count = 0;
let countEl = document.getElementById('count-el');
let saveEl = document.getElementById('save-El');
function increment(){
    count += 1;
    countEl.textContent = count;
}

function save () {
    let countStr = " "+ count + " - ";
    saveEl.textContent += countStr
    count = 0;
    countEl.textContent = count;
}