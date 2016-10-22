# Binary Search Trees

In BST, all the left subtree elements should be less than root data and all
the right subtree elements should be greater than root data. This is called
**binary search tree** property.

#### 1.Finding an Element in BST
Start with the root moving left or right using the BST property. If the data we
are searching is same as nodes data then we return current node.

If data is greater than the root data, we recur for the right subtree of root node.
Otherwise we recur for left subtree.

```python

# A class that represents an individual node in a BST
class Node:
    def __init__(self, data):
        self.left = None
        self.right = None
        self.val = data



def search(root, data):

  if root is None or root.val == data:
    return root

  # data is greater than root's data
  if root.val < data:
    return search(root.right, data)

  # data is smaller than root's data
  return search(root.left, data)


```

______________________________________________________________________________


#### 2. Insertion

```python
# A function to insert a new node with the given data
def insert(root, node):
  if root is None:
    root = node


  else:
    if root.val < node.val:
      if root.right is None:
        root.right = node

      else:
        insert(root.right, node)

    else:
      if root.left is None:
        root.left = node

      else:
        insert(root.left, node)


```

___________________________________________________________________________

#### 3. Deletion
- 1) **Node to be deleted is leaf**: Simply remove from the tree.
- 2) **Node to be deleted has only one child**: Copy the child to the node and delete the child
- 3) **Node to be deleted has two children:** Find inorder successor of the node. Copy contents of the inorder successor to the node and delete the inorder successor. Note that inorder predecessor can also be used.


The important thing to note is, inorder successor is needed only when right child is not empty. In this particular case, inorder successor can be obtained by finding the minimum value in right child of the node.

```python
# Given a binary search tree and a key,
# delete the key and returns the new root
```


___________________________________________________________________________


#### 4. Find the minimum element
```python

def findMin(root):

  if root is None:
    return None

  current = root

  while current.left:
    current = current.left

  return current
```


____________________________________________________________________________

#### 5. Find the maximum element

```python

def findMax(root):

  if root is None:
    return None

  current = root

  while current.right:
    current = current.right

  return current
```


______________________________________________________________________________
