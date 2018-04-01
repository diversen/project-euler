var euklid = require('./src/euklidsExtendedAlgorithm')
var gcd = require('./src/gcd')

 /**
 * Pells equation
 * 
 * Example: solve
 * 
 * a^2 - 61b^2 = 1
 * 
 * Begin with 
 * 
 * a^2 - 61b^2 = k 
 * 
 * 8^2 - 61*1^2 = 3
 * 
 * (a, b, k) = (8, 1, 3)
 * 
 * composing it with: 
 * 
 * (m, 1, m^2 - 61) gives the triple
 * 
 * (8m + 61, 8 + m, 3(m^2 - 61))
 * 
 * which is scaled down (or Bhaskara's lemma is directly used) to get:
 * 
 * (8m + 61) / 3, (8 + m) / 3, (m^2 - 61) / 3
 * 
 */