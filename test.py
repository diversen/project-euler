def get_exp(n, num):
    p = 1
    while True:
        r = num**p
        if r > n:
            return p-1
        else:
            p += 1
            
t = get_exp(100000000000000, 3)
print(t)

# 3 6 9 12 15 18 21
# 1   2          3
