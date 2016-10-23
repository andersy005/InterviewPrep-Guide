# Arrays / Lists

#### 1. Find the number of Occurrences of a number in an array

Given a sorted(ascending order) array of integers, find out the number of Occurrences of a number in that array


#### Python Implementation

```python
def findOccurences(alist, x):

    count = 0
    startIndex = findFirstOccurrence(alist, x, 0, len(alist) - 1)
    if startIndex < 0:
        return -1

    lastIndex = findLastOccurrence(alist, x, 0, len(alist) - 1)
    count = lastIndex - startIndex + 1

    return count


def findFirstOccurrence(alist, x, start, end):
    if end >= start:
        mid = (start+end)/2

        if ( mid == 0 or alist[mid-1] < x ) and (alist[mid] == x):
            return mid

        elif alist[mid] < x:
            return findFirstOccurrence(alist, x, mid+1, end)

        else:
            return findFirstOccurrence(alist, x, start, mid-1)

    else:
        return -1


def findLastOccurrence(alist, x, start, end):
    if end >= start:
        mid = (start + end)/ 2

        if (mid == 0 or alist[mid+1] > x) and (alist[mid] == x):
            return mid

        elif alist[mid] > x:
            return findLastOccurrence(alist, x, start, mid-1)

        else:
            return findLastOccurrence(alist, x, mid+1, end)

    else:
        return -1


Array = [1,2,2,2,2,2,2,2,3,4,5,5,6]
x = 2

print "No of Occurrence is:", findOccurences(Array, x)
```
The output is : 7
Time Complexity is O(log n)

_____________________________________________________________________
