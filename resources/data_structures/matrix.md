# Matrices / 2D Arrays

#### 1. Search in a row wise and column wise sorted matrix

Given an n x n matrix, where every row and column is sorted in increasing order.
Given a number x, how to decide whether this x is in the matrix.
The designed algorithm should have linear time complexity.


```python
'''Searches the element x in mat[][]. If the element is found,
    then prints its position and returns true, otherwise prints
    "not found" and returns false'''
def search(a, element):

    rows = len(a)
    columns = len(a[0])

    # set indexes for top right element
    i = 0
    j = columns - 1

    while( i < rows and j >= 0):
        # return its position if they are equal
        if a[i][j] == element:
            print 'found at', i, j
            return

        # move to the left if the element is less than a[i][j]
        if a[i][j] > element:
            j -= 1

        # move down if the element is greater than a[i][j]
        else:
            i += 1

    print 'not found'


a = [[1,2,3],
     [4,5,6],
     [7,8,9]]
search(a, 5)
```

__________________________________________________________________________________

#### 2. A Boolean Matrix

Given a boolean matrix mat[M][N] of size M X N, modify it such that if a matrix cell
mat[i][j]is 1 (or true) then make all the cells of ith row and jth column as 1.

```python
def modifyMatrix(a):

    rows = len(a) - 1
    cols = len(a[0]) - 1


    rowFlag = False
    colFlag = False

    # Scan the first row and set rowFlag to indicate whether we need to set all 1s in the first row or not

    for i in range(cols + 1):
        if a[0][i] == 1:
            rowFlag = True
            break



    # Scan the first col and set colFlag

    for i in range(rows + 1):
        if a[i][0] == 1:
            colFlag = True
            break


    """Use first row and first column as the auxiliary arrays row[] and col[] respectively,
    consider the matrix as submatrix starting from
    econd row and second column and apply method 1"""
    for i in range(1, rows + 1):

        for j in range(1, cols + 1):

            if a[i][j]:

                a[i][0] = 1
                a[0][j] = 1


    # Finally, using rowFlag and colFlag, update first row and first column if needed
    for i in range(1, rows+1):

        for  j in range(1, cols+1):

            if a[i][0]  or a[0][j]:
                a[i][j] = 1


    if rowFlag:
        for i in range(rows+1):
            a[i][0]=1

    if colFlag:
        for i in range(cols+1):
            a[0][i]=1

    return a


a = [[0,0,0],
     [0,0,1]]
print(modifyMatrix(a))


```

_______________________________


#### 3. Print all Diagonals of a given matrix


```python
"""
ex:  a = [[1,2,3,4],
          [5,6,7,8],
          [9,10,11,12],
          [13,14,15,16]]


answer is:
1
5 2
9 6 3
13 10 7 4
14 11 8
15 12
16
"""


def PrintDiagonals(alist):

    # Print first half
    row = 0

    while(row < len(alist)):

        col = 0
        rowTemp = row

        while (rowTemp >= 0):
            print alist[rowTemp][col],
            rowTemp -= 1
            col += 1

        print""    
        row += 1

    # Print second half
    col = 1

    while(col < len(alist[0])):
        colTemp = col
        row = len(alist) - 1

        while(colTemp <= len(alist[0])- 1):
            print alist[row][colTemp],

            row -= 1
            colTemp += 1

        print""   
        col += 1



a = [[1,2,3,4],
      [5,6,7,8],
      [9,10,11,12],
      [13,14,15,16]]


PrintDiagonals(a)
```
