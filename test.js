var timer = require('./src/timer')
var sieve = require('./src/sieve-of-eratosthenes');
var isPrime = require('./src/isPrime');
var length = 100000000;
var primesSieve = sieve(length)

console.log('done using sieve')
console.log(timer.getTime()/ 1000);

timer.reset();
console.log(timer.getTime()/ 1000);

var primesTest = [];
for(let i = 1; i < length; i++) {
    if (isPrime(i)) {
        primesTest.push(i)
    }

    if (i % 1000000 === 0) {
        console.log(i)
        console.log(timer.getTime()/ 1000);
        timer.reset();
    }
}

console.log('done using prime test')
// console.log(timer.getTime()/ 1000);