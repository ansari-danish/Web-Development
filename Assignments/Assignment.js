const country = "India"
const continent = "Asia"
let indiaPopulation = 140877147;

console.log(country, continent, indiaPopulation)

let isIsland = false;
let language

console.log(isIsland, continent, indiaPopulation, country, language)

language = "Hindi"


let splitPopulation = indiaPopulation / 2;
indiaPopulation++
console.log(splitPopulation)

let finlandPopulation = 600000;
const finlandVsIndiaPopulation = indiaPopulation > finlandPopulation 
console.log(finlandVsIndiaPopulation)

const averageCountry = 3300000 > indiaPopulation;
console.log(averageCountry)

const description = "Porugual is in Europe, and its 11 million people speak portuguese"

console.log(description)
if(indiaPopulation > 3300000) {
    console.log("Portugual's population is above average")
} else {
    console.log("Portugual population is 22 million below average")
}

console.log('9' - '5') // 4
console.log('19' - '13' + '17') // 617
console.log('19' - '13' + 17) // 23
console.log('123' < 57) // false
console.log(5 + 6 + '4' + 9 - 4 - 2) // 1143

const day = 'monday'
if(day === 'monday') {
    console.log("Plan a course stucture")
    console.log("Go to coding meetup")
} else if (day === 'tuesday') {
    console.log('Prepare theory videos');
} else if (day === 'wednesday' || day === 'thursday') {
    console.log("Write code examples")
} else if (day === 'friday') {
    console.log("Record videos")
} else if (day === 'saturday' && day === 'sunday') {
    console.log("Enjoy the weekends :D")
} else {
    console.log("Not a valid day")
}
