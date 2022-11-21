// Promises   // Async Programming

// Example Scenerio
// You order Palak Paneer 
// Meanwhile u continue a convo with ur friend
// And once ur Palak paneer ready ur server brings it to u
// in a technical manner ur server brings palak paneer 
// Two things can happen
// 1. You can get Palak paneer
// 2. Rejected 

// const order = () =>console.log("Your Palak Paneer Sir")
// console.log("Start convo")
// setTimeout(order,2000);
// console.log("still convo")


// Promise syntax

const promises  = new Promise((resolve, reject) => {
    setTimeout(()=>{
        isReady = [true,false][Math.floor(Math.random()*2)]
        isReady ? resolve('Palak paneer is ready'):reject ('Palak paneer is not availble')
    },1000)
})

// console.log(promises.then(success => console.log({success})).catch(error => console.log({error})));

// console.log('fetch:',
// fetch('https://dog.ceo/api/breeds/image/random')
// .then(response => console.log('response:', response.json()))
// .then(data => console.log(data)))


// Quick note
/* 
When we call the api using fetch method we have to write .then .then again and again for calling the api so for solving this problem we have a new syntax on ES6 is async await 
its not that difficult first keep in mind that is just a new way of calling api
*/


// Async & Await

// const getDog = async () =>{
//     const url = 'https://dog.ceo/api/breeds/image/random'
//     const response = await fetch(url)
//     const data = await response.json();
//     console.log(data)
// }

// getDog()

/* Rules to using async 
1.You need to create a function
2.You must use keyword "await" or "async"
*/



// Resolved if waiter brings soup u pay the waiter
// Reject U don't give money to the waiter

// const getSoup = async () => {
//     const review = {
//         rating: 0,
//         tip:0,
//         pay: 0,
//         star:0
//     }

//     try{
//         const soup = await promises;
//         console.log(soup)
//         console.log("You need to pay to the waiter")
//         review.rating = 5;
//         review.tip = .5;
//         review.pay = 100;
//         review.star = 5
//         return review;
//     }
//     catch(error){
//         console.log(error)
//         console.log("Don't need to pay")
//         return review;
//     }
// } 
// getSoup().then(value => console.log(value))
// const sum = async (a,b) => a+b;
// console.log(sum(3,5))

