var bc = require('./src/binomialCoefficient')
var binarySearch = require('./src/binarySearch')
var totient = require('./src/totients')


var ary = [1, 4 ,7 ,9 ,12, 17 ,29, 39, 109]
console.log(binarySearch(ary, 170))


// console.log(bc(3, 2 ))

// 3 dices - number of options
// var options = Math.pow(6, 6)
// console.log(options)


var gbp = require('./src/generalBinomialProbability')

// Example. Hit 6 6 times in a row
var res = gbp(6, 6, 1/6)

// It happens num times of 100000
console.log(res*100000)

// Example. Hit 6 6 times in a row
var res = gbp(10, 1, 1/36)

// It happens num times of 100000
console.log(res)

// 22 boys in a class, probability for red-green blindness is 0.08 (8%)
// Probability that 5 that have this kind of blindness
var res = gbp(22, 5, 0.08)
console.log(res)

// As above but probability that 0 boys have this blindness
var res = gbp(22, 0, 0.08)
console.log(res)

console.log(totient(13))


