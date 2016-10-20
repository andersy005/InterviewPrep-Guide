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
