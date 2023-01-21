
// This 2 array we use in this explanation
const companies = [
    { name: "Company One", category: "Finance", start: "1999", end: "2012" },
    { name: "Company Two", category: "Technology", start: "1997", end: "2002" },
    { name: "Company Three", category: "Clothing", start: "1995", end: "2005" },
    { name: "Company Four", category: "Restaurent", start: "1986", end: "2009" },
    { name: "Company Five", category: "Real estate", start: "1991", end: "2004" },
    { name: "Company Six", category: "Hand Work", start: "1992", end: "1999" },
    { name: "Company Seven", category: "Restaurent", start: "1986", end: "2001" },
    { name: "Company Eight", category: "Restaurent", start: "1986", end: "2000" }
];
const ages = [18, 55, 12, 19, 65, 77, 22, 31, 54, 16];



// const ages = [18, 55, 12, 19, 65, 77, 22, 31, 54, 16];
// Filter function

// const Drive = ages.filter(age => {
//     if(age>=18){
//         return true;
//     }
// });


// Old Style for Loop

// for(let i = 0;i<companies.length;i++){
//     console.log(companies[i].name);
// }
// New Style but ES5 Syntax
// companies.forEach(function(company){
//     console.log(company.name)
// })
// New Style ES6 Syntax
// companies.forEach((company)=> {
//     console.log(company.name);
// });


// Filter() Function 

// Old Style to filter out stuff

// let canDrink = [];
// for(let i= 0;i<ages.length;i++){
//     if(ages[i]>=18){
//         canDrink.push(ages[i]);
//     }
// }
// console.log(canDrink);

// New style ES5 Syntax 

// const Drink = ages.filter(function(drink){
//     if(drink >= 18){
//         return true;
//     }
// });


// New style ES6 Syntax
// const Drink = ages.filter((drink)=>drink>=18); 
// console.log(Drink);




// 
// const retailer = companies.filter(function(company){
//     if(company.category === 'Restaurent')
//     return true;
// });
// console.log(retailer);



// const restaurent = companies.filter(retail => {
//     if(retail.category === 'Restaurent'){
//         console.log(retail.start);
//     }
// })


// const restaurent = companies.filter(retail => retail.category === 'Restaurent')
// console.log(restaurent);


// Filter out the companies that started before 1995

// const beforeYear = companies.filter(ninty => ninty.start<='1995');
// console.log(beforeYear);

// const sinceTenYear = companies.filter(tenYear => (tenYear.end - tenYear.start) === 10);
// console.log(sinceTenYear)



// Map 


// // Map() 
// const year = companies.map(company => company.end - company.start);
// console.log(year)


// Finding square root of a number using MAP function 


// const sqrt = ages.map(age => Math.floor(Math.sqrt(age)));
// const double = ages.map(age => Math.floor((age*age)));

// // console.log(sqrt)
// console.log(double)



// Sort Function 
// const sortStartYear = companies.sort((year1,year2) => {
//     if(year1.start > year2.start){
//         return 1;
//     }
//     else{
//         return -1;
//     }
// });
// Sorting the year of companies establish
const sortStartYearTernary = companies.sort((a,b) => (a.start > b.start ? 1 : -1));
console.log(sortStartYearTernary);




// console.log(sortStartYear)



// const sortAges = ages.sort((a,b) => b-a);
// console.log(sortAges)


// Learning about reduce 
// let sum = 0;
// for(let i = 0; i<ages.length;i++){
//     sum += ages[i];
// }
// console.log(sum)
// const sum = ages.reduce(function(total,age){
//     return total + age;
// },0);

// Reduce the sum of all the ages
const sum = ages.reduce((total,age) => total+age,0 )
console.log(sum);


const companyYearTotal = companies.reduce((total,company)=>{
    return total +(company.end - company.start);
},0);

console.log(companyYearTotal);
