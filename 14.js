// Collatz series
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

console.log(longestSerieNum)
// console.log(longestNum)
