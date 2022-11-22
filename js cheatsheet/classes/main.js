// Classes is Main topic 
// Properties
// Methods

// Keyword : this
// class Car {
//     constructor(name,color,speed){
//         this.name = name;
//         this.color = color;
//         this.speed = speed;
//         this.currentSpeed = 0;
//     }
//     drive(){
//         console.log("just drive")
//         this.currentSpeed += 10;
//         console.log(`Driving speed at ${this.currentSpeed} km/hr`)
//         }
//     zeroToSixty(){
//         setTimeout(() => {
//             console.log(`pHew that was fast`)
//             this.currentSpeed =60;
//             console.log(this.currentSpeed)
//         })
//     }
//     brake(){
//         console.log("Emergency Brake")
//         this.currentSpeed -= 10;
//         console.log(this.currentSpeed)
//     }
//     stop(){
//         console.log("Stops car")
//         this.currentSpeed = 0;
//         console.log(this.currentSpeed)
//     }
// }
// const ferrari = new Car('ferrari','red',250)
// console.log(ferrari)
// console.log(ferrari.currentSpeed)
// ferrari.drive()
// ferrari.brake()
// ferrari.stop()
// console.log(ferrari.currentSpeed)
// ferrari.zeroToSixty();
// console.log(ferrari.currentSpeed)
// ferrari.brake()
// ferrari.drive();
// console.log(ferrari.currentSpeed)
// ferrari.brake()
// console.log(ferrari.currentSpeed)
// ferrari.stop()

// class porc{
//     constructor(name,color,speed){
//         this.name = name;
//         this.color = color;
//         this.speed = speed;
//         this.currentSpeed = 0
//     }
//     showCurrentSpeed(){
//         return currentSpeed;
//     }
//     drive(){
//         console.log(`Car started driving`)
//         this.currentSpeed += 10;
//     }
//     stop(){
//         console.log(`Car Stops`)
//     }
// }

// const car = new porc('bmw','black',180);
// console.log(car)
// console.log(car.speed)
// console.log(car.currentSpeed)
// for(let i = 0; i<6;i++){
//     car.drive();
// }
// console.log(car.showCurrentSpeed())


let x= [1,2,3,4];
// console.log(typeof 8)
// x[4]=15;
// console.log(x);
Array.prototype.myPush = function(item){
    this[this.length] = item;
    return this;
}
const fruits = ['banana','grapes','mango','strawberry']
// console.log(fruits.myPush('cookie'))

// const arr = [1,2,3,4,5]
// arr.myPush(6);
// arr.myPush(7)
// arr.myPush(8)
// arr.myPush(9)
// arr.myPush(10)
// console.log(arr)

// class object {
//     key(){

//     }
// }


    class bank {
        constructor(balance){
        this.balance =balance; 
    }
    deposit(money){
        this.balance += money; 
        console.log({balance: this.balance})
    }
    withdraw(money){
        if(money > this.balance){
            // console.log(`Unsufficient fund ${this.balance}`)
            alert("Unsuffient fund")
            return;
        }else{
            this.balance -= money;
          
        }
    }
    show(){
        // console.log(this.balance);
        return this.balance;
    }
}
const bankSystem = new bank()
// bankSystem.show() 
// bankSystem.deposit(100)
// bankSystem.show()
// bankSystem.withdraw(250);
// bankSystem.show()

const depositButton = document.getElementById('deposit')
const withdrawButton = document.getElementById('withdraw')
const inputAmount= document.getElementById('amount')
const balance = document.getElementById('balance');

function print (){
    balance.innerText = 'Balance: '+ bankSystem.show()+' ';
}

depositButton.onclick = () =>{
    const amount = Number(inputAmount.value)
    bankSystem.deposit(amount);
    print();
}
withdrawButton.onclick = () =>{
    bankSystem.withdraw(Number(inputAmount.value));
    print()
}