/*

According to wikipeadia:
https://en.wikipedia.org/wiki/Binary_search_algorithm

1 Set L to 0 and R to n − 1.
2 If L > R, the search terminates as unsuccessful.
3 Set m (the position of the middle element) to the floor (the largest previous integer) of (L + R) / 2.
4 If Am < T, set L to m + 1 and go to step 2.
5 If Am > T, set R to m − 1 and go to step 2.
6 Now Am = T, the search is done; return m.

This function returns false if target is not found.
Else it will return the ary index where the element is found

Params e.g 
ary = [1, 4 ,7 ,9 ,12, 17 ,29, 39, 109]
T = target (int)
L = internal (left)
R = internal (right)
returns false or index of the found value
*/

function binarySearch(ary, T, L, R) {

	if (L === undefined) {
		L = 0  
	}	

	if (R === undefined) {
		R = ary.length - 1
	}

	if (L > R) {
		return false
	}

	// Middle
	var m = Math.floor( (L+R) /2)
	
	// Value less than T
	if (ary[m] < T) {
		L = m + 1
		return binarySearch(ary, T, L, R) 
	} 

	// Value larger than T
	if (ary[m] > T) {
		R = m - 1
		return binarySearch(ary, T, L, R) 
  }

	if (ary[m] === T) {
		return m
	}
}

module.exports = binarySearch
