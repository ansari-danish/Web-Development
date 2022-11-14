// Promises   // Async Programming

// Example Scenerio
// You order Palak Paneer 
// Meanwhile u continue a convo with ur friend
// And once ur Palak paneer ready ur server brings it to u
// in a technical manner ur server brings palak paneer 
// Two things can happen
// 1. You can get Palak paneer
// 2. Rejected 

const order = () =>console.log("Your Palak Paneer Sir")
console.log("Start convo")
setTimeout(order,2000);
console.log("still convo")


// Promise syntax

const promises  = new Promise((resolve, reject) => {
    setTimeout(()=>{
        isReady = true
        isReady ? resolve('Palak paneer is ready'):reject ('Palak paneer is not availble')
    },2000)
})
if(isReady){
    'run this'
}
else{
    'do nothing'
}




console.log(promises)

