// function describeCountry(country, population, capitalCity) {
//   return `${country} has ${population} million people and its capital city is ${capitalCity}`;
// }

// const india = describeCountry("India", 100, "Delhi");
// console.log(india);
// const Dubai = describeCountry("Dubai", 3.5, "Dubai city");
// console.log(Dubai);
// const Switzerland = describeCountry("Switzerland", 8.74, "Bern");
// console.log(Switzerland);

// function percentageOfWorld1(countryName, population) {
//   const calculatePercentage = (population / 7900) * 100;
//   return `${countryName} has ${population} million people, so it's about ${calculatePercentage.toFixed(
//     2
//   )}% of the world population`;
// }
// console.log(percentageOfWorld1("india", 1130));
// console.log(percentageOfWorld1("america", 112));
// console.log(percentageOfWorld1("switzerland", 500));

// const percentageOfWorld2 = function (countryName, population) {
//   const calculatePercentage = (population / 7900) * 100;
//   return `${countryName} has ${population} million people, so it's about ${calculatePercentage.toFixed(
//     2
//   )}% of the world population`;
// };
// console.log(percentageOfWorld2("india", 1130));
// console.log(percentageOfWorld2("america", 112));
// console.log(percentageOfWorld2("switzerland", 500));

// const percentageOfWorldArrow = (countryName, population) => {
//   const calculatePercentage = (population / 7900) * 100;
//   percentageOfWorld1();
//   return `${countryName} has ${population} million people, so it's about ${calculatePercentage.toFixed(
//     2
//   )}% of the world population`;
// };

// console.log(percentageOfWorldArrow("india", 1130));
// console.log(percentageOfWorldArrow("america", 112));
// console.log(percentageOfWorldArrow("switzerland", 500));

// const populations = [110000, 500000, 800000, 450000];
// console.log(populations.length);
// console.log(percentageOfWorldArrow(populations[0]));
// console.log(percentageOfWorldArrow(populations[1]));
// console.log(percentageOfWorldArrow(populations[2]));
// console.log(percentageOfWorldArrow(populations[3]));

// const neighbours = ["pakistan", "switzerland", "china"];
// neighbours.push("utopia");
// neighbours.pop();
// console.log(neighbours);
// if (!neighbours.includes("germany")) {
//   console.log("Probably not a central European country");
// }
// neighbours[0] = "Republic of Sweden";
// console.log(neighbours);

// const myCountry = {
//   country: "India",
//   capital: "Delhi",
//   language: "Hindi",
//   population: "1 billion",
//   neighbours: ["pakistan", "china", "bangladesh"],
//   describe: function () {
//     this.isIsland = this.neighbours.length != 0 ? false : true;
//     return this.isIsland;
//   },
// };

// console.log(
//   `${myCountry.country} has ${myCountry.population} ${myCountry.language}-speaking people, ${myCountry.neighbours.length} neibouring and a capital called ${myCountry.capital}`
// );

// myCountry.population = "1.3 billion";
// myCountry["population"] = "1 billion";
// console.log(myCountry);

// console.log(myCountry.describe());

// const calcTip = function (bill) {
//   return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// };

// for (let i = 1; i <= 50; i++) {
//   console.log(`Voter number ${i} is currently voting`);
// }

// const populations = [110000, 500000, 800000, 450000];
// const percentages = [];
// function percentWorld(population) {
//   let per = (population / 7900) * 100;
//   return per.toFixed(0);
// }

// for (let i = 0; i < populations.length; i++) {
//   percentages.push(percentWorld(populations[i]));
// }
// console.log(percentages);

// const listOfNeighbours = [
//   ["Canada", "Mexico"],
//   ["Spain"],
//   ["Norway", "Sweden", "Russia"],
// ];
// for (let i = 0; i < listOfNeighbours.length; i++) {
//   for (let j = 0; j < listOfNeighbours[i].length; j++) {
//     console.log(listOfNeighbours[i][j]);
//   }
// }

// const x = 4;

const arr = [17,21,23];

function printForecast(arr) {
    let sum = ""
    arr.forEach((item, index) => {
            sum += `... ${item}^C in ${index+1} days`
        }) 
        return sum;
}
console.log(printForecast(arr))