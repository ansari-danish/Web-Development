// let firstCard = Math.floor(Math.random()*22);
// let secondCard = Math.floor(Math.random()*21);
// console.log(firstCard + " "+secondCard)

// let sum = firstCard + secondCard;
// console.log(sum);

// if (sum < 21){
//     console.log("Do you want to draw a new card");
// }else if(sum === 21){
//     console.log("Wohoo! You've got Blackjack");
// }else {
//     console.log("You're out of the game!")
// }


// let age = 22;
// if(age <= 21){
//     console.log("you can't go to bar")
// }
// else{
//     console.log("Welcome")
// }

// let age = 101;
// if(age < 100 || age > 100)
// console.log("not Eligible")
// else
// console.log('Here is ur card')



let cards = [];
let sum = 0;;
let message = "";
let hasBlackJack= false;
let isAlive = false;
let messageEl = document.getElementById('message-el')
let sumEl = document.getElementById('sum-el');
let cardEl = document.querySelector('.card-el');


let player = {
    name : "Danish",
    chips: 125
}

let playerEl = document.getElementById('money');
playerEl.textContent = player.name + ": $" + player.chips;

// Random function;
function getRandomCard(){
  let number = Math.floor(Math.random() * 13) + 1;
  if(number>10){
    return 10;
  }
  else if(number===1){
    return 11
  }
  else{
      return number;  
  }
}
// Log it out
function startGame(){
    isAlive = true;
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cards = [firstCard, secondCard];
    sum = Number (firstCard + secondCard);
    renderGame();
}

function renderGame(){
cardEl.textContent = "Cards: ";

for(let i = 0;i<cards.length;i++){
    cardEl.textContent += cards[i] + " ";
}

sumEl.textContent = "Sum: " + sum;
    if (sum <= 20){
        message ="Do you want to draw a new card";
    }
    else if (sum === 21){
        message= "You've got BlackJack";
        hasBlackJack = true;
    }
    else{
        message="You're out of the game";
        isAlive = false;
    }
    messageEl.textContent = message;
}

function newCard(){

    if(isAlive === true && hasBlackJack === false){
        let card =  getRandomCard();
        sum+=card;
        cards.push(card);
        console.log(cards)
        renderGame();
    }
}
 


