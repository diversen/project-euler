
/**
 * It can be seen that the sequence is repeating. For conciseness, we use the
 * notation √23 = [4;(1,3,1,8)], to indicate that the block (1,3,1,8) repeats
 * indefinitely.
 *
 * The first ten continued fraction representations of (irrational) square roots
 * are:
 *
 * √2=[1;(2)], period=1 √3=[1;(1,2)], period=2 √5=[2;(4)], period=1
 * √6=[2;(2,4)], period=2 √7=[2;(1,1,1,4)], period=4 √8=[2;(1,4)], period=2
 * √10=[3;(6)], period=1 √11=[3;(3,6)], period=2 √12= [3;(2,6)], period=2
 * √13=[3;(1,1,1,1,6)], period=5
 *
 * Exactly four continued fractions, for N ≤ 13, have an odd period.
 *
 * How many continued fractions for N ≤ 10000 have an odd period?
 */

var timer = require('./src/timer')

// https://stackoverflow.com/questions/12182701/generating-continued-fractions-for-square-roots
const squareRootContinuedFraction = D =>{
    
    // Reminder
    let r = ~~Math.sqrt(D);
    
    // final
    let result = [];
    result.push(r);
    
    // Return if R^2 === D
    if (r*r === D) {
        return result;
    }
    let a = r, P = 0, Q = 1;
    do {
        P = a*Q - P;

        Q = ~~((D - P *P)/Q);
        a = ~~((r + P)/Q);
        result.push(a);
    } while (Q != 1);
    return result;
};

var sum = 0
for(let i = 2; i <= 10000; i++ ) {
    let res = squareRootContinuedFraction(i).length - 1
    if (res % 2 !== 0) {
        sum++
    }
}

console.log('Result is: ' + sum)
console.log('In time: ' + timer.getTime() / 1000)
