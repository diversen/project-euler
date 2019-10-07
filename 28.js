/** 
 * Starting with the number 1 and moving to the right in a clockwise direction a
 * 5 by 5 spiral is formed as follows:
 *
 * 21 22 23 24 25
 * 20  7  8  9 10
 * 19  6  1  2 11
 * 18  5  4  3 12
 * 17 16 15 14 13
 *
 * It can be verified that the sum of the numbers on the diagonals is 101.
 *
 * What is the sum of the numbers on the diagonals in a 1001 by 1001 spiral
 * formed in the same way?
*/

var example = 
`21 22 23 24 25
20  7  8  9 10
19  6  1  2 11
18  5  4  3 12
17 16 15 14 13`

function generateSpiral (sizeSpiral) {

    var square = 1
    var size = 1
    var lastSize = 0
    var sum = 1
    while(true) {

        lastSize += size
        square += 2
        size = (square * square) - lastSize

        sum += getDiagonals(square, size + lastSize)
        if (square === sizeSpiral) {            
            console.log(sum)
            break
        }
    }
}

function getDiagonals (square, lastSize ) {
    let ne = lastSize,
        nw = ne - square + 1
        sw = nw - square + 1
        se = sw - square + 1
    
    let res = ne + nw + sw + se
    return res

}

generateSpiral(1001)