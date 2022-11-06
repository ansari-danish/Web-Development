//  It is a Cheatsheet 
//  Excute program 1 by 1;


//  Console Log
// console.log("Hello world")

// console.log("Danish is a Programmer")

// name = 'Ansari Danish'
// console.log(name);

// sentence = "I am learning programming on my own"
// console.log(sentence);

// Simple calculationo
// food = 20;
// tip= 0.2;
// tipAmount =food*tip;
// console.log(tipAmount);


// Basic TIP calculator
// food = Number(prompt("How much is for food"));
// tip = Number(prompt("tip %") / 100);
// tipAmount = food*tip;
// alert("Ur bill was "+ tipAmount)
// console.log('total amount', food+tipAmount);

// Datatypes 
// number = 1,2,3,4,5,8,9,10;
// strings = 'Hello', "Strings";
// arrays = [];
// objects  = {};
// Boolean = true or false;

/* Math Methods
Floor = round up;
Ceil = round down;
Random = Give a Random Number;
*/

// Variable Declaration
// let const var;


//  Basic Weather app
// let weather = prompt("Hows the Weather");
// if(weather == 'rain'){
//     alert("Grab ur Umbrella")
// }
// else
//     alert("Wear Sunglasses")

//  Functions
// function sayMyName(name){
//     console.log("Hello", name);
// }
// sayMyName(prompt("Whats ur name"));


//  Function that greet the user
// function greeting(name){
//     greet = `hi ${name}, best of luck for ur exams`
//     console.log(greet)
// }
// greeting('alex')


//  Function that do Sum of 2 number

// function sum (a,b){
//     return a+b;
// }

// let a = Number(prompt('Enter a Number'));
// let b = Number(prompt('Enter a number'));
// console.log(sum (a , b));


//  Tip Calculator Program


// function tipCal( food, tip){
//     tipPercent = tip/100;
//     tipAmount = food*tipPercent;
//     total = sum(food,tipAmount);
//     return total;
// }
// let food = Number(prompt(`Food Price `));
// let tip = Number (prompt(`Would u like to give any tip`))
// alert("Your Bill is " + tipCal(food,tip));


// ES6
//  Arrow Function =>
// const sum = (a, b) => {
//     return a + b;
// }
//  Another way
// const plus = (a,b)=> a+b;
// console.log(plus(5,10));



//  Basics Maths Problem Function
// const add = (a,b) => a+b;
// const sub = (a,b) => a-b;
// const div = (a,b) =>{
// if(b != 0){
//     return a/b;
// }
// alert("Division by 0 is undefined Try again");
// } 
// const mul= (a,b)  => a*b;


// console.log("this is add = " + add(5,10));

// console.log("this is Subtaction = " + sub(5,10));
// console.log("this is Division = " + div(50,50 ));
// console.log("this is Multiplication = " + mul(5,10));


//  Arrays and their Methods

// const groceries = ['🍓', '🍉','🍎', '🍍' , '🍌']; 
// groceries.push('🍒','🍇');
// console.log(groceries);
// // Slicing the array
// console.log(groceries.slice(3,7));
// // for finding index of element in array
// console.log(groceries.indexOf('🍇'));
// //  For finding length of array
// console.log(groceries.length-1)
// // for pushing elemtn in array
// console.log(groceries.push('🥝'))


// OBJECTS
// const person = {
//     naam : 'Leonardo',
//     shirt : 'Green',
//     coat : 'Black'
// }
// console.log(person);
// console.log(person.coat);
// console.log(person['shirt'])

// // Assigning object with different way

// person.phone = '6205089780';
// console.log(person)

// // Another objects

// const danish ={
//     color:'brown',
//     shirt : 'blue',
//     major : 'cs'
// }
// console.log(danish)
// console.log(danish.color);

// const introducer = (naam , shirt , assets , liability) => {
//     const person = {
//         naam : naam,
//         shirt : shirt,
//         assets : assets,
//         liability: liability,
//         netWorth : function(){
//             return this.assets - this.liability;
//         }
//     }
//     const intro = `Hi my name is ${person.naam} and my shirt color ${person.shirt} and my net worth is $${person.netWorth} USD`;
//     return intro;
// }
// console.log(introducer('Danish', 'Black ','30000', '1000' ));
// console.log(introducer('Danish', 'blue'))
// console.log(introducer('Ronaldo', 'White'));

// const groceries = ['🍓', '🍉','🍎', '🍍' , '🍌']; 
// console.log(groceries)
// for(let i = 0;i<groceries.length;i++){
//     console.log(i,groceries[i]);
// }

// // clean code
// for(const element of groceries){
//     console.log(element)
// }

const number = [1,2,3,4,5,6];
// let ans =0;
// for(const elmt of number){
//     ans += elmt; 
// }
// console.log(ans);
// const numbers = [1,2,3,4,5,6];
// // for(const elmt of number){
// //     console.log(elmt *2);
// // }
// let result = [];
// for(numbers of number){
//     result.push(numbers * 2);
// }
// console.log(result);

// const double = (letter) => {
//     let result = [];
//     for(const number of letter){
//         result.push(number * 2);
//     }
//     return result;
// }



// function sum (letter) {
//     let result = [];
//     for(let number of letter){
//         result.push(number * number);
//     }
//     return result
// }
// let letter = [1,2,3,4,5,6];
// console.log(sum(letter));

// const countLetter = (phrase) => {
//     let result = 0;
//     for(letter in phrase){
//         let index = (letter);
//         result = Number(index) +1;
//     }
//     return {result}
// }
// const count = (phrase) => {

//     return {result: phrase.length};
// }
// let phrase =  prompt("Enter the Phrase ")
// console.log(count(phrase));

// const sumArray = (numbers) => {
//     let result = 0;
//     for(const letter of numbers){
//         result += letter;
//     }
//     return {result};
// }
// let array = [1,2,3,4,5,6];
// console.log(sumArray(array))

// const max = (numbers) => {
//     let result = numbers[0];
//     for(let number of numbers){
//         if(number > result){
//             result = number;
//         }
//     }
//     return result;
// }
// console.log(max([1,8, 2,3,4,5]));
 
// Letter Frequency 
// const letterFrequency = (phrase) => {
//     let frequency = {};
//     for(const letter of phrase){
//         if(letter in frequency){
//             frequency[letter] +=1;
//         }
//         else{
//             frequency[letter] =1;
//         }
//     }
//     return frequency;
// }
// // Word Frequency 
// const wordFrequency = (phrase) => {
//     word = phrase.split(' ');
//     return (letterFrequency(word));
// }
// const phrase = prompt("Please enter ur sentence")
// console.log(wordFrequency(phrase))

// HIgher order function 
// map()
// filter()
// reduce()

// This is map()
// let array = [1,2,3,4,5,6];
// let result = array.map(number => number*2);

// const double = (number) => {
//     return number.map(number => number* 2)
// }
// // console.log(double([1,2,3,4,5]));


// // this is filter()
// const filter = (array , greater ) => {
//     let answer = [];
//     for(const number of array){
//         if(number > greater){
//             answer.push(number);
//         }
//     }    
//     return answer;
// }
// console.log(array.filter(num => num >= 4));

// const actors = [
//     {name :'Srk', netWorth : 2000000},
//     {name :'saif', netWorth : 50000},
//     {name :'hrithik', netWorth : 120000},
//     {name :'selmon', netWorth : 500},
// ]
// let result = (actors.filter(actor =>  actor.netWorth))
// let container = document.getElementById("container");
// container.innerHTML = `<h2> ${JSON.stringify(result.map(actor => actor.name).join(', '))}</h2>`;
//     let msg = 'Danish is here'
//  let title = document.getElementById('title')
// title.innerHTML  = `<p> Hello ${msg} </p> `

// title.style.color = 'green;'  

// let red = document.getElementById('red');
// let yellow = document.getElementById('yellow')
// let green = document.getElementById('green');
// const square = document.querySelectorAll('.box')
// const timesClicked = {'red':0,'yellow':0,'green':0 }
// square.forEach(square => {
//     square.onclick = () => 
// {
//     timesClicked[square.value] += 1;
//     square.innerText = timesClicked[square.value]
// }
// })
// let cleargame = document.getElementById('cleargame')
// function clearScore(){
//     timesClicked.red = 0;
//     timesClicked.yellow = 0;
//     timesClicked.green = 0;
//     square.forEach(square => square.innerText = ' ')
// }

// const clearGameBtn = document.getElementById('cleargame');
// clearGameBtn.onclick = () => clearScore();

// const randomFruit = (fruits) => {
//     let randomNum = Math.floor(Math.random()* fruits.length);
//     return fruits[randomNum];
// }
// let fruits = ['grapes','banana','mango','kiwi','orange','guave'];
// console.log(randomFruit(fruits));

  