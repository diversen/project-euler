/**
 * The cube, 41063625 (345^3), can be permuted to produce two other cubes:
 * 56623104 (384^3) and 66430125 (405^3). In fact, 41063625 is the smallest cube
 * which has exactly three permutations of its digits which are also cube.
 *
 * Find the smallest cube for which exactly five permutations of its digits are
 * cube.
 */

// Helper function to sort digits
var sortDigits = require('./src/sortDigits')

// Keep time
var timer = require('./src/timer')

function cube(num) {
    return Math.pow(num, 3)
}

var map = {}
var numbersMap = {}

/**
 * Create hashmap of sorted digits of the cube numbers
 */

for (let i = 0; i < 10000; i++) {

    // Identify permuation of number
    let permIdentifier = sortDigits(cube(i))

    // Intialize if not initialized
    if (!map[permIdentifier]) {
        map[permIdentifier] = 0
        numbersMap[permIdentifier] = []

    }

    // Increment
    map[permIdentifier] += 1
    numbersMap[permIdentifier].push(cube(i))

    if (map[sortDigits(cube(i))] == 5) {
        console.log('Permutated numbers with 5 cubes found. The numbers are: ')
        console.log(numbersMap[permIdentifier])
        console.log('Result is: ' + numbersMap[permIdentifier][0])
        console.log('Found in seconds: ' + timer.getTime() / 1000)
        break
    }
}

/**
 * Permutated numbers with 5 cubes found. The numbers: [ 127035954683,
 * 352045367981, 373559126408, 569310543872, 589323567104 ] 
 * Found in seconds: 0.128
 */
