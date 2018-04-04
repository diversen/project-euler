var timer = require('./src/timer')

function reverseString(s){
    s = s.toString()
    return s.split("").reverse().join("");
}
function isPalindromic (num) {
    if (reverseString(num) === num.toString()) {
        return true
    }
    return false
}

function isLychrel(num, maxIterations) {
    for(let i = 0; i < maxIterations; i++) {
        let reverse = reverseString(num)
        num += parseInt(reverse)
        if (isPalindromic(num)) {
            return false
        }
    }
    return true
}

var sum = 0;
for(let i= 1; i <= 9999; i++) {
    let lychrel = isLychrel(i, 50)
    if (lychrel) {
        sum += 1
    }
}
console.log('Result is: ' + sum)
console.log('Found in seconds: ' + timer.getTime() / 1000)