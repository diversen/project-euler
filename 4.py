#!/bin/python3

import sys
import math

# counting iterations
d = {}
d['i'] = 0

def largest_multiple_of_two(n):
    """ Find largest multiple in a range """ 
    for i in reversed(range(1, 999)):

        d['i'] += 1
        if n / i > 999 or i*i < n:
            return False
        
        if n % i == 0:
            d['factor_1'] = n // i
            d['factor_2'] = i
            return True
    
    return False

def is_palin (s):
    """ is palindrome """
    r = s[::-1]
    if r == s:
        return True
    
    False

def largest_in_range(r):
    """ find largest palindrome in range """
    total_s = ''
    for i in reversed(range(r+1)):

        s = str(i)
        rev = s[::-1]
        s = s + rev

        m = largest_multiple_of_two(int(s))
        
        if m:
            # print(m)
            return int(s)

def largest_palindrome_half(n):
    """ get first half of largest palindrom in p <= n """
    ph = False
    for i in reversed(range(n + 1)):
        if not is_palin(str(i)):     
            continue
        else:
            i = str(i)
            ph = (i[0:3])
            break
    
    return int(ph)
 
t = int(input().strip())
for a0 in range(t):
    n = int(input().strip())

    if is_palin(str(n)):
        n -= 1

    ph = largest_palindrome_half(int(n))
    res = largest_in_range(ph)
    if res < n:
        print(res)

