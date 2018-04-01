/** 
 * If we list all the natural numbers below 10 that are multiples of 3 or 5, we
 * get 3, 5, 6 and 9. The sum of these multiples is 23.
 *
 * Find the sum of all the multiples of 3 or 5 below 1000.
*/

var sum = 0;
var iterator = 1000
var multiples = [3, 5]

function sumOfMultiples (iterator, multiples) {
    for(i = 0; i < iterator; i++) {
    
        for(let elem of multiples) {
            if (i%elem === 0) {
                sum+= i
                break;
            }
        }
    }
    return sum
}

console.log(sumOfMultiples(iterator, multiples) )
