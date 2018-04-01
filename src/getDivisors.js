function getDivisors(number) {
	var divisors = [];
	var newMax = number;
	for (let i = 2; i < newMax; ++i) {
		if (number % i == 0) {
			let divisor2 = number / i;
			divisors.push(i);
			if (divisor2 != i) {
				divisors.push(number / i);
			}
			newMax = number / i;
		}
	}
	return divisors;
}

module.exports = getDivisors