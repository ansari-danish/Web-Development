let homeScore = document.getElementById('home-score');
let guestScore = document.getElementById('guest-score');
let reset = document.getElementById('reset');
let homeCount = 0;
let guestCount = 0;

// Home all function
function home1(){
    homeCount += 1;
    homeScore.textContent = homeCount;
}
function home2(){
    homeCount += 2;
    homeScore.textContent = homeCount;
}
function home3(){
    homeCount += 3;
    homeScore.textContent = homeCount;
}


// Guest all function;;
function guest1(){
    guestCount += 1;
    guestScore.textContent = guestCount;
}
function guest2(){
    guestCount += 2;
    guestScore.textContent = guestCount;
}
function guest3(){
    guestCount += 3;
    guestScore.textContent = guestCount;
}
function resetNum(){
    homeCount =0;
    guestCount =0;
    homeScore.textContent =0;
    guestScore.textContent = 0;
}