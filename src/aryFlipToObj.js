function aryFlipToObj (ary) {

    var flipped = {}
    for(let i = 0; i < ary.length; i++) {
        flipped[ary[i]] = i
    }
    return flipped
}

module.exports = aryFlipToObj