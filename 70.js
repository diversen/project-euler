var totient = require('./src/sieveTotients');
var isIdentical = require('./src/isIdenticalDigits')
var timer = require('./src/timer')

var totients = totient(10000000);
var minRatio = 10;
var n = 0;
for(let i = 2; i < totients.length; i++ ) {

    let ratio = i / totients[i];
    if (ratio < minRatio) {
        if (isIdentical(i, totients[i])) {
            minRatio = ratio;
            n = i;
        }
    }
}


console.log(`Totient of ${n} is ${totients[n]}`);
console.log(`Ratio is: ${minRatio}`);
console.log(`Executed in ${timer.getTimeSecs()} secs`);
