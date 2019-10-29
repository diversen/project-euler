def get_matrix():
    with open('resources/p081_matrix.txt') as fp:
        l = []
        line = fp.readline().strip()
        
        a = line.split(',')
        a = map(int, a)
        l.append(a)

        while line:
            line = fp.readline().strip()
            if len(line) == 0:
                continue
            a = line.split(',')
            a = map(int, a)
            l.append(a)

    return l


# matrix
m = get_matrix()

# solution
solution = m[:]

# first row - add column before
for i in range(1, len(m)):
    solution[0][i] += solution[0][i-1] 

# first column - add row above
for j in range(1, len(m)):
    solution[j][0] += solution[j-1][0] 

for i in range(1, len(m)):
    for j in range(1, len(m)):
        
        # previous row current column
        up = solution[i-1][j]
        
        # current row previous column
        left = solution[i][j-1]

        if up < left:
            solution[i][j] += up
        else:
            solution[i][j] += left


print(solution[79][79])

# pointer can only go left and right

