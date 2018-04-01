/** 
 * If the numbers 1 to 5 are written out in words: one, two, three, four, five,
 * then there are 3 + 3 + 5 + 4 + 4 = 19 letters used in total.
 *
 * If all the numbers from 1 to 1000 (one thousand) inclusive were written out
 * in words, how many letters would be used?
 *
 *
 * NOTE: Do not count spaces or hyphens. For example, 342 (three hundred and
 * forty-two) contains 23 letters and 115 (one hundred and fifteen) contains 20
 * letters. The use of "and" when writing out numbers is in compliance with
 * British usage.
*/

var converter = require('number-to-words')

var length = 1000
var sum = 0
for(let i = 1; i <= length; i++) {
    let str = converter.toWords(i).replace(/[ \-]/g,"")

    
    let l = str.length

    // Add 'and' +3 as this is not in the 'number-to-words' lib
    if (i >= 100) {
        l += 3
        
    }

    // No and in e.g. 100
    if (i % 100 === 0) {
        l -= 3
        
    }

    sum += l
}

console.log('Result is: ' + sum)
