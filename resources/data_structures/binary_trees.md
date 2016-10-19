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

#### Binary Tree Representation
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
