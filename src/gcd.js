function gcd (m, n) {

	if (m < 0) {
		m = Math.abs(m)
	}
	if (n < 0) {
		n = Math.abs(n)
	}

	if (n > m) {
		let tmp = m
		m = n
		n = tmp
	}
	let r = m % n
	if (r === 0) {
		return n
	}
	return gcd(n, r)
}

module.exports = gcd
	

