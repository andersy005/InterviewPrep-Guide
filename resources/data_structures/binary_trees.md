# Binary Tree Introduction

Unlike other linear data structures namely arrays, linked lists, stacks and queues, trees are hierarchical data structures.


Some definitions:
- Root of a tree - is the node with no parents. There can be at most one root node in a tree.
- Edge - refers to the link from parent to child
- Depth of a node - is the length of the path from the root to the node
- Height of a node - is the length of the path from that node to the deepest node
- Height of the tree - is the maximum height among all the nodes in the tree.
- Depth of the tree - is the maximum depth among all the nodes in a tree.

A tree is called **binary tree** if:
- each node has zero child
- one child or two children

### Types  of Binary trees:
- **Strict Binary Tree** : each node has exactly two children or no children.
- **Full Binary Tree** : each node has exactly two children and all leaf nodes are at the same level.
In a Full Binary, number of leaf nodes is number of internal nodes plus 1
       L = I + 1
Where L = Number of leaf nodes, I = Number of internal nodes

- **Complete Binary Tree**: all leaf nodes are at height h or h-1.
- **Balanced Binary Tree**:
A binary tree is balanced if height of the tree is O(Log n) where n is number of nodes. For Example, AVL tree maintain O(Log n) height by making sure that the difference between heights of left and right subtrees is 1. Red-Black trees maintain O(Log n) height by making sure that the number of Black nodes on every root to leaf paths are same and there are no adjacent red nodes. Balanced Binary Search trees are performance wise good as they provide O(log n) time for search, insert and delete.



### Why Trees?
1. One reason to use trees might be because you want to store information that naturally forms a hierarchy. For example, the file system on a computer:
file system

2. Trees (with some ordering e.g., BST) provide moderate access/search (quicker than Linked List and slower than arrays).
3. Trees provide moderate insertion/deletion (quicker than Arrays and slower than Unordered Linked Lists).
4. Like Linked Lists and unlike Arrays, Trees don’t have an upper limit on number of nodes as nodes are linked using pointers.


### Main applications of trees include:
1. Manipulate hierarchical data.
2. Make information easy to search (see tree traversal).
3. Manipulate sorted lists of data.
4. As a workflow for compositing digital images for visual effects.
5. Router algorithms
6. Form of a multi-stage decision-making.
7. Expression trees are used in compilers.
8. Huffman coding trees that are used in data compression algorithms.
_______________________

#### 1. Binary Tree Representation
```python

# A python class that represents an individual node in a Binary Tree
class Node:
  def __init__(self, key):
    self.val = key
    self.left = None
    self.right = None

# Create root
root = Node(1)
root.left = Node(2)
root.right = Node(3)
```
_____________________
#### 2. Tree Traversals

*Depth First Traversals*:
- Inorder
- Preorder
- Postorder


**Inorder Traversal:**

Algorithm Inorder(tree)
   1. Traverse the left subtree, i.e., call Inorder(left-subtree)
   2. Visit the root.
   3. Traverse the right subtree, i.e., call Inorder(right-subtree)

```python
# A python function to do Inorder Traversal
def Inorder(root):
  if root is None:
    return None

  # First recur on left child
  Inorder(root.left)

  # then print the data of node
  print root.val

  # now recur on right child
  Inorder(root.right)
```

Uses of Inorder

In case of binary search trees (BST), Inorder traversal gives nodes in non-decreasing order. To get nodes of BST in non-increasing order, a variation of Inorder traversal where Inorder itraversal s reversed, can be used.


**Preorder Traversal:**

Algorithm Preorder(tree)
   1. Visit the root.
   2. Traverse the left subtree, i.e., call Preorder(left-subtree)
   3. Traverse the right subtree, i.e., call Preorder(right-subtree)

```python
# A python function to do Preorder tree traversal
def Preorder(root):
  if root is None:
    return None

  # First print the data of node
  print root.val

  # Then recur on left child
  Preorder(root.left)

  # now recur on right child
  Preorder(root.right)

```

Uses of Preorder

- Preorder traversal is used to create a copy of the tree.
- Preorder traversal is also used to get prefix expression on of an expression tree. Please see [Polish_notation](http://en.wikipedia.org/wiki/Polish_notation) to know why prefix expressions are useful.

**Postorder Traversal:**

Algorithm Postorder(tree)
   1. Traverse the left subtree, i.e., call Postorder(left-subtree)
   2. Traverse the right subtree, i.e., call Postorder(right-subtree)
   3. Visit the root.

```python
# A python function to do Postorder tree traversal
def Postorder(root):
  if root is None:
    return None

  # First recur on left child
  Postorder(root.left)

  # Then recur on Right child
  Postorder(root.right)

  # Finally print the data of the node
  print root.val
```

Uses of Postorder

- Postorder traversal is used to delete the tree.
- Postorder traversal is also useful to get the postfix expression of an expression tree. Please see [Reverse_Polish_notation](http://en.wikipedia.org/wiki/Reverse_Polish_notation) to for the usage of postfix expression.

*Breadth First or Level Order Traversal*

For each node, first the node is visited and then it’s child nodes are put in a FIFO queue.

printLevelorder(tree)

1. Create an empty queue q
2. temp_node = root /*start from root*/
3. Loop while temp_node is not NULL
    - print temp_node->data.
    - Enqueue temp_node’s children (first left then right children) to q
    - Dequeue a node from q and assign it’s value to temp_node


```python
def printLevelorder(root):
  # Base Case
  if root is None:
    return

  # Create an empty queue for level order traversal
  queue = []

  # Enqueue root
  queue.append(root)

  while (len(queue) > 0):
    # Print front of queue and remove it form queue
    print queue[0].data

    node = queue.pop(0)

    # Enqueue left child
    if node.left is not None:
      queue.append(node.left)

    # Enqueue right child
    if node.right is not None:
      queue.append(node.right):



```
**Time Complexity:** O(n) where n is number of nodes in the binary tree

[References](http://en.wikipedia.org/wiki/Breadth-first_traversal)
