# Binary Search Trees

In BST, all the left subtree elements should be less than root data and all
the right subtree elements should be greater than root data. This is called
**binary search tree** property.

The time complexity for the following operations is O(n) for worst case scenario (skew Trees)


#### 1. Finding an Element in BST
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

#### 6. Find the lowest common ancestor (LCA)
Given two  pointers to two nodes in a BST, find the lowest common ancestor. Assume
that both values already exist in the tree.


In a given binary tree, The low­est com­mon ances­tor of two nodes n1 and n2 will be a node X such that node X will be the low­est node who has n1 and n2 as its descendants.

Approach:
- Start with the root(Traverse the BST in preorder)
- if root.data > n1.data and root.data > n2.data then lowest common ancestor will be in left subtree
- if root.data < n1.data and root.data < n2.data then lowest common ancestor will be in right subtree
- If step 2 and step 3 are false then we are at the root which is the lowest common ancestor, return it

Note: **n1.data < LCA.data < n2.data** or **n2.data < LCA.data < n1.data**

#### Python Implementation
```python
class Node():
  def __init__(self, data):
    self.data = data
    self.left = None
    self.right = None


def LCAIterative(root, n1, n2):
  while(root is not None):

    # If root > n1 and root > n2 then lowest common ancestor will be in left subtree

    if root.data > n1.data and root.data > n2.data:
      root = root.left

    # if root < n1 and root < n2 then lowest common ancestor will be in right subtree

    elif root.data < n1.data and root.data < n1.data:
      root = root.right

    # If I am here that means I am at the root which is lowest common ancestor

    else:
      return root





def LCARecursive(root, n1, n2):
  if root is None:
    return None

  # If root > n1 and root > n2 then lowest common ancestor will be in left subtree

  if root.data > n1.data and root.data > n1.data:
    return LCARecursive(root.left, n1, n2)

  # if root < n1 and root < n2 then lowest common ancestor will be in right subtree

  elif root.data < n1.data and root.data < n2.data:
    return LCARecursive(root.right, n1, n2)


  # If I am here that means I am at the root which is lowest common ancestor
  return root


```


#### Java Implementation
```java
public class LowestCommonAncestorBST {
	public Node LCA(Node root, Node n1, Node n2) {
		if (root == null) {
			return null;
		}
		// If root>n1 and root>n2 then lowest common ancestor will be in left
		// subtree.
		if (root.data > n1.data && root.data > n2.data) {
			return LCA(root.left, n1, n2);

		}
		// If root<n1 and root<n2 then lowest common ancestor will be in right
		// subtree.
		else if (root.data <= n1.data && root.data < n2.data) {
			return LCA(root.right, n1, n2);
		}
		// if I am here that means i am at the root which is lowest common
		// ancestor
		return root;
	}

	public Node LCA2(Node root, Node n1, Node n2) {
		while (root != null) {
			// If root>n1 and root>n2 then lowest common ancestor will be in
			// left
			// subtree.
			if (root.data > n1.data && root.data > n2.data) {
				root = root.left;
			}
			// If root<n1 and root<n2 then lowest common ancestor will be in
			// right
			// subtree.
			else if (root.data <= n1.data && root.data < n2.data) {
				root = root.right;
			}
			// if I am here that means i am at the root which is lowest common
			// ancestor
			else {
				return root;
			}
		}
		return root;
	}



class Node {
  	int data;
  	Node left;
  	Node right;

  	public Node(int data) {
  		this.data = data;
  		left = null;
  		right = null;
  	}
  }
```
_______________________________________________________________________________

#### 7. Given a sorted array, convert it to a BST

If we have to choose an array element to be the root of BST, which element should
we pick?

- The root of a BST should be the middle element from the sorted array.
- We would pick the middle element from the sorted array in each iteration.
- There are two array left - the one on its left and the one on its right. These
are subtrees of the current's node's left and right child.


```python
def BuildBST(a, left, right):


  current = Node()
  if not current:
    return

  if left == right:
    current.data = a[left]
    current.left = None
    current.right = None

  else:
    mid = left + (right-left)/2
    current.data = a[mid]
    current.left = BuildBST(a, left, mid - 1)
    current.right = BuildBST(a, mid + 1, right)

  return current

```
______________________________________________________________________________

### Balanced Binary Search Trees

In earlier sections we covered some BST operation whose worst case complexity is O(n) where n is the number of nodes in the tree. This happens when the trees are skew trees.

By imposing some restrictions on the heights, we can reduce this worst case complexity to O(log n).

In general, the height of balanced BST are represented with HB(k), where **k** is the difference between
left subtree height right subtree height. Sometimes k is called **balanced factor**.

In HB(k), if **k=0** then we call such BST as **full balanced BST**.

______________________________________________________________________________

### AVL(Adelson-Velskii and Landis) Trees

In HB(k), if **k=1**, such a BST is called an **AVL tree**.

#### 1. AVL Tree implementation
```python

class AVLNode:

  def __init__(self, data, balanceFactor, left, right):
    self.data = data
    self.balanceFactor = 0
    self.left = left
    self.right = right

```

______________________________________________________________________________


### Red-Black Trees

___________________________________________________________________________

### Splay Trees

__________________________________________________________________________

### B-Trees

__________________________________________________________________________

### Augmented Trees

__________________________________________________________________________
