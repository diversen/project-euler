/** 
 * 2520 is the smallest number that can be divided by each of the numbers from 1
 * to 10 without any remainder.
 *
 * What is the smallest positive number that is evenly divisible by all of the
 * numbers from 1 to 20?
*/

var num = 2520

var ary = Array.from({length: 20}, function (val, i) {
    return ++i
});

function isDivisible (num) {
    
    for(let val of ary) {
        if (num % val !== 0) {
            return false
        }
    }
    return true
}

var i = 1
while(i) {
    if (isDivisible(i)) {
        console.log("Result is: " + i)
        break
    }
    i++
}
