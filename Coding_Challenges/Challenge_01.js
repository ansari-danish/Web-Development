const markMass = 78;
const markHeight = 1.69
const johnMass = 92;
const johnHeight = 1.95

const markBMI = markMass / (markHeight * markHeight)
const johnBMI = johnMass / (johnHeight * johnHeight)

const markHigherBMI = markBMI > johnBMI
console.log(markBMI, johnBMI, markHigherBMI)
// console.log(markHigherBMI)

// markMass = 95
// markHeight = 1.88;
// johnMass = 85;
// johnHeight = 1.76

//  markBMI = markMass / markHeight ** 2 / (markHeight * markHeight)
//  johnBMI = johnMass / johnHeight ** 2 / (johnHeight * johnHeight)

// markHigherBMI = markBMI > johnBMI
// console.log(markBMI)
// console.log(johnBMI)
// console.log(markHigherBMI)