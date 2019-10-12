import timeit

memo = {}

def fib (n):

    if (memo.get(n)):
        return memo[n]
    
    if n == 0 or n == 1:
        return 1
    else:
        res = fib(n-1) + fib(n-2)
        memo[n] = res
        return res

def is_even(n):
    if n%2 == 0:
        return True
    else:
        return False



def sum_even (n):
    """ get sum first n even numbers in fib serie """ 

    if n < 10 or n > 4* 10**16:
        return 0

    i = 1 # this fib serie starts at 1
    s = 0
    e = 0
    while True:
        f = fib(i)

        if (f > n):
            return s

        
        if is_even(f):
            s += f
            e += 1
        
        i += 1


def euler2_hackerrank (n):
    res = sum_even(n)
    return res

def test_1():
    print('Upto 4000000. Result: ', euler2_hackerrank(4000000))

def test_2():
    print('Upto 4*10^16. Result: ', euler2_hackerrank(4*10^16))

timer = timeit.timeit(stmt=test_1, number=1)
print("In time: ", timer, 'secs')

timer = timeit.timeit(stmt=test_2, number=1)
print("In time: ", timer, 'secs')

"""
Upto 4000000. Result:  4613732
In time:  9.297100768890232e-05 secs
Upto 4*10^16. Result:  49597426547377748
In time:  0.00010000501060858369 secs
"""