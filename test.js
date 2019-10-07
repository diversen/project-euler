var seive = require('./src/sieve-of-eratosthenes');
var length = 20;
// var length = 50;
var res = seive(length);

var p= 1;
for(let i = 0; i < res.length; i++) {
    p*= res[i];
}

console.log(p + 1)
