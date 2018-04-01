/**
 * A palindromic number reads the same both ways. The largest palindrome made
 * from the product of two 2-digit numbers is 9009 = 91 × 99.
 *
 * Find the largest palindrome made from the product of two 3-digit numbers.
 */
function isPalindrome (num) {
    var str = num.toString()
    var splitUp = str.split('', 6)
    var str  = splitUp[0] + splitUp[1] + splitUp[2]
    var str2 = splitUp[5] + splitUp[4] + splitUp[3]
    if (str === str2) {
        return true
    }
    return false
}

function largestPalindrome () {
    var res = 0
    var numbers
    for(x = 999; x > 0; x--) {
        for(y = 999; y > 0; y--) {
            var test = x*y
            if (isPalindrome(test) && test > res) {
                res = test
                numbers = {x: x, y:y}
    
            }                   
        }
    }
    console.log(numbers)
    return res
}

console.log(largestPalindrome())
