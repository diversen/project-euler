
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


