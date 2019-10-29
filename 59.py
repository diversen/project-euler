import itertools
import numpy as np

def get_file_as_int_chunks():
    """ open cipher file """
    with open('./resources/p059_cipher.txt', 'r') as f:
        t = f.read()
        numbers = t.split(',')

        ints = []
        for n in numbers:
            ints.append(int(n))

        item = chunks(ints, 3)
        return list(item)

def cartesian_product(n):
    """ Permutate all possible products """
    keys = list(itertools.product([i for i in range(97, 123)], repeat=n))
    return keys

def chunks(l, n):
    for i in range(0, len(l), n):
        yield l[i:i+n]

def decipher(key, chunks):
    res = [] 
    for c in chunks:
        res.append(np.bitwise_xor(c, key))

    print(res)
    return res


keys = cartesian_product(3)
# print(len(keys))
# quit()
int_chunks = get_file_as_int_chunks()

print(int_chunks)
quit()

for k in keys:
    res = decipher(k, int_chunks)


t = decipher(keys[0], int_chunks)
print(t, int_chunks)

# decipher(keys[0])




    