import timeit

# 1) sum of first n natural numbers is = n*(n+1)/2
# 2) sum of first n natural numbers idiviual squares is : : n*(n+1)*(2*n+1)/6

def hackerrank_euler6(n):
    sum_of_squares = n*(n+1)*(2*n+1)/6 
    square_of_the_sum = (n*(n+1)/2)**2
    print(int(square_of_the_sum-sum_of_squares))

def test_1 ():
    hackerrank_euler6(100)

timer = timeit.timeit(stmt=test_1, number=1)
print("In time: ", timer, 'secs')

# 25164150
# In time:  6.52919989079237e-05 secs
