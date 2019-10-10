# A number chain is created by continuously adding the square of the digits in
# a number to form a new number until it has been seen before.
#
# For example,
#
# 44 → 32 → 13 → 10 → 1 → 1
# 85 → 89 → 145 → 42 → 20 → 4 → 16 → 37 → 58 → 89
#
# Therefore any chain that arrives at 1 or 89 will become stuck in an endless loop. What is most amazing is that EVERY starting number will eventually arrive at 1 or 89.
#
# How many starting numbers below ten million will arrive at 89?

import itertools
import timeit

memo = {}

def get_next(num):
    """ Get the next num if not in memo """
    if (memo.get(num)):
        return memo[num]

    res = 0
    for n in str(num):
        res += int(n)**2

    memo[num] = res
    return res


def iterate(num):
    """ Iterate until 89 or 1 """
    while num != 89 and num != 1:
        num = get_next(num)
    return num


def fact (n):
    if (n == 0):
        return 1
    
    r = 1
    while(n):
        r *= n
        n -= 1

    return r

def multinomial(l, n):
    n = fact(n)

    for i in l:
        n //= fact(i) 
    
    return n


def euler92():

    c = 0

    """ max length of parmutation is 7 -> len('9999999') """
    
    max_length = 7 

    """ Get all combinations with replacement from the numbers from 0 to 9999999 
        Now it is just 11440 iterations """
    
    l = [list(t) for t in itertools.combinations_with_replacement([0, 1, 2, 3, 4, 5, 6, 7, 8, 9], max_length)]

    """ remove [0,0,0,0,0,0,0] """

    del l[0]

    print('Number of combinations to consider', len(l))

    for num_list in l:

        s = ''.join(str(x) for x in num_list)
        digits = [0 for n in range(10)]

        if iterate(s) == 89:

            d = digits.copy()
            for n in num_list:
                d[n] += 1 

            r = multinomial(d, max_length)
            c += r
        

    print('Result', c)


timer = timeit.timeit(stmt=euler92, number=1)
print("In time: ", timer, 'secs')

"""
-> Number of combinations to consider 11439
-> Result 8581146
-> In time:  0.133517513 secs
"""
