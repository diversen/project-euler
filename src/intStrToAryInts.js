function intStrToAryInts (str) {
    let ary = str.split('')
    ary = ary.map (v => parseInt(v))
	return ary
}

module.exports = intStrToAryInts