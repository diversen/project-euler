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
console.log(sum)
