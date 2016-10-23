# Arrays / Lists

#### 1. Print all Diagonals of a given matrix


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
