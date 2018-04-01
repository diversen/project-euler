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
