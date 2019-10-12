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
    i = 1 # this fib serie starts at 1
    s = 0
    e = 0
    while True:
        f = fib(i)
        
        if is_even(f):
            s += f
            e += 1
            
        
        if (i == n):
            return s
        
        i += 1


def euler2_hackerrank (n):
    res = sum_even(n)
    if res >= 4* 10**16:
        return ''
    else:
        return res


print(euler2_hackerrank(2))
print(euler2_hackerrank(20))
# print(euler2_hackerrank(100))