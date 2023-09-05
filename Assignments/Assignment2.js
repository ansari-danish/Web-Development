function describeCountry (country, population, capitalCity) {
    return `${country} has ${population} million people and its capital city is ${capitalCity}`
}

const india = describeCountry("India", 100, "Delhi")
console.log(india)
const Dubai = describeCountry("Dubai", 3.5, "Dubai city")
console.log(Dubai)
const Switzerland = describeCountry("Switzerland", 8.74, "Bern")
console.log(Switzerland)



function percentageOfWorld1 (countryName,population) {
    const calculatePercentage = (population / 7900)  * 100;
    return `${countryName} has ${population} million people, so it's about ${calculatePercentage.toFixed(2)}% of the world population`
}
console.log(percentageOfWorld1("india", 1130))
console.log(percentageOfWorld1("america", 112))
console.log(percentageOfWorld1("switzerland", 500))


const percentageOfWorld2 = function (countryName, population) {
    const calculatePercentage = (population / 7900)  * 100;
    return `${countryName} has ${population} million people, so it's about ${calculatePercentage.toFixed(2)}% of the world population`
} 
console.log(percentageOfWorld2("india", 1130))
console.log(percentageOfWorld2("america", 112))
console.log(percentageOfWorld2("switzerland", 500))


const percentageOfWorldArrow = (countryName, population) => {
    const calculatePercentage = (population / 7900)  * 100;
    percentageOfWorld1()
    return `${countryName} has ${population} million people, so it's about ${calculatePercentage.toFixed(2)}% of the world population`
    
}

console.log(percentageOfWorldArrow("india", 1130))
console.log(percentageOfWorldArrow("america", 112))
console.log(percentageOfWorldArrow("switzerland", 500))
