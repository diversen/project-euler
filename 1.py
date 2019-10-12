import timeit

def nth_term (nth_term, begin, step):
    return begin+(nth_term - 1)*step

def sum_terms(n_1, n_n, begin, step):
    nth_1 = nth_term(n_1, begin, step)
    nth_n = nth_term(n_n, begin, step)
    return (n_n*(nth_1 + nth_n))//2 
    
def sum_to(upto, step):
    return sum_terms(1, upto//step, step, step)

def euler1_hackerrank (n):
    res = sum_to(n-1, 3) + sum_to(n-1, 5) - sum_to(n-1, 15)
    return res

"""
Above will work with very large numbers
For the formulaes and explaination: 
https://www.youtube.com/watch?v=xWHfQGBzgbc
"""

def test_1():
    print('Sum of numbers below 1000', euler1_hackerrank(1000))

def test_2 ():
    print('Sum of numbers below 10^1000', euler1_hackerrank(10**1000))

timer = timeit.timeit(stmt=test_1, number=1)
print("In time: ", timer, 'secs')

timer = timeit.timeit(stmt=test_2, number=1)
print("In time: ", timer, 'secs')