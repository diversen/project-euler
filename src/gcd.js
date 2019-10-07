/**
 * Euklid GCD
 * 
 * E.g: 6, 27. Find GCD
 * 
 * Take abs value and make m the largest number
 * 
 * remainder = 27 % 6 = 3
 * 
 * Check for 0, if 0 return remainder
 * 
 * If not 0 
 * 
 * Take the smallest value and run GCD with remainder
 * 
 * GCD(6, 3)
 *
 * remainder = 6 % 3 = 0
 * 
 * Check for 0, if 0 return remainder = 3
 * 
 * Return 3
 *  
 */

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
	