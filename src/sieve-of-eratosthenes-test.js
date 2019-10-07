var seive = require('./sieve-of-eratosthenes');

var timer = require('./timer')
// 10.000.000
var length = 100000;
var res = seive(length);

console.log("Sieved " + length + " ints in " + timer.getTime()  / 1000 + ' secs')
console.log("Got: " + res.length + " prime numbers")

