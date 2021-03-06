/** 
 * Each new term in the Fibonacci sequence is generated by adding the previous
 * two terms. By starting with 1 and 2, the first 10 terms will be:
 *
 * 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...
 *
 * By considering the terms in the Fibonacci sequence whose values do not exceed
 * four million, find the sum of the even-valued terms.
*/

var max = 4000000
var prev = 1
var next = 2
var sum = 0
while (next < max) {
    if (next%2 === 0) {
        sum += next
    }
    let currentPrev = next
    let currentNext = next + prev
    prev = currentPrev
    next = currentNext
}

console.log(sum)


