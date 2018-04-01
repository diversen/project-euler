var primeFactors = require('./src/primeFactors')
var productsFromAry = require('./src/productsFromAry')
var primeFactorsExpSum = require('./src/primeFactorsExpSum')
var productsFromAry = require('./src/productsFromAry')
var modPow = require('./src/powMod')
var primeFactors = require('./src/primeFactors')
var totients = require('./src/totients')
var isPrime = require('./src/isPrime')
var timer = require('./src/timer')

function prepareAry (ary) {
    let test = {}

    return ary.map( (v) => {

        if (test[v] === undefined) {
            test[v] = v
            // console.log(test[v])
            return v
        } else {
            test[v] = test[v] * v

            return test[v]
        }
    })
}

var testFactors = primeFactors(4)
var totientProduct = 1
testFactors.forEach( (e) => {
    totientProduct *= totients(e)
})

console.log(totientProduct)
return

// var factors =primeFactorsExpSum(2964600)

// console.log(factors)
// return
var num = 2964600
var factors = primeFactors(num)
// console.log(factors)
// return
var unique = prepareAry([2, 2, 2, 2 ])
var products = productsFromAry([3, 3, 5, 8, 13, 19])
console.log(products.length)

