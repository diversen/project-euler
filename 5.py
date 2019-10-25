import timeit
# https://www.geeksforgeeks.org/python-program-for-sieve-of-eratosthenes/
def SieveOfEratosthenes(n): 
      
    # Create a boolean array "prime[0..n]" and initialize 
    # all entries it as true. A value in prime[i] will 
    # finally be false if i is Not a prime, else true. 
    primes_res = []
    prime = [True for i in range(n+1)] 
    p = 2
    while (p * p <= n): 
          
        # If prime[p] is not changed, then it is a prime 
        if (prime[p] == True): 
              
            # Update all multiples of p 
            for i in range(p * p, n+1, p): 
                prime[i] = False
        p += 1
      
    # Print all prime numbers 
    for p in range(2, n): 
        if prime[p]: 
            primes_res.append(p) 

    return primes_res

def lowest_factor_that_divides(res, d, divide_all_upto):
    primes = SieveOfEratosthenes(divide_all_upto + 1)
    """ multiply res with lowest factor so it will do a division wthout reminder """
    for i in primes:
        if (res*i) % d == 0:
            return i


def hackerrank_euler005 (divide_all_upto):
    res = 1
    while True:

        ok = True
        for d in range(2, divide_all_upto + 1):

            if res % d != 0:
                res = lowest_factor_that_divides(res, d, divide_all_upto) * res
                ok = False

        if ok:
            break

    if res != divide_all_upto:
        print(res)

def test_1 ():
    hackerrank_euler005(20)

timer = timeit.timeit(stmt=test_1, number=1)
print("In time: ", timer, 'secs')

# 232792560
# In time:  0.0002112560032401234 secs

# Still very fast with very large numbers
# e.g. 1000
