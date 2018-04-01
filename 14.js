/**
 * The following iterative sequence is defined for the set of positive integers:
 *
 * n → n/2 (n is even) n → 3n + 1 (n is odd)
 *
 * Using the rule above and starting with 13, we generate the following
 * sequence:
 *
 * 13 → 40 → 20 → 10 → 5 → 16 → 8 → 4 → 2 → 1 It can be seen that this sequence
 * (starting at 13 and finishing at 1) contains 10 terms. Although it has not
 * been proved yet (Collatz Problem), it is thought that all starting numbers
 * finish at 1.
 *
 * Which starting number, under one million, produces the longest chain?
 *
 * NOTE: Once the chain starts the terms are allowed to go above one million.
 */
function collatzSerieNext(num) {
    if (num%2 === 0) {
        next = num / 2
    } else {
        next = 3 * num + 1
    }
    return next
}

function getCollatzSerie(num) {

    var serie = []
    serie.push(num)
    while(true) {
        num = collatzSerieNext(num)     
        serie.push(num)
        if (next === 1) {
            break
        }
    }
    return serie
}

var longest = 0
var longestSerieNum = 0
for (i = 999999; i > 0; i--) {
    var serie = getCollatzSerie(i)
    if (serie.length > longest) {
        longestSerieNum = i
        longest = serie.length
    }
}

console.log('Result is ' + longestSerieNum)
