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

______________________________________________________________________

#### 1. Binary Tree Representation
```python
# (Python)
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

```java
// (Java)
class Node
{
  int data;
  Node left, right;

  public Node(int key)
  {
    data = key;
    left = right = null;
  }
}

//...
Node root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
```

```C++
// (C++)
struct node 
{
  int data;
  struct node *left, *right;
};

int main()
{
  node *root = new node;
  root->data = 1;
  root->left = new node; root->left.data = 2;
  root->right = new node; root->right.data = 3;

  return 0;
}
```
______________________________________________________________________
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
# (Python)
# A python function to do Inorder Traversal
def Inorder(root):
  if root is None:
    return None

  # First recur on left child
  Inorder(root.left)

  # then print the data of node
  print(root.val)

  # now recur on right child
  Inorder(root.right)
```

```java
// (Java)
public void inOrder(Node root)
{
  if (root == null)
    return null;

  // Traverse the left subtree
  inOrder(root.left);

  // Print the node data
  System.out.println(root.data);

  // Traverse the right subtree
  inOrder(root.right);
}
```

```C++
#include <iostream>

// (C++)
void inOrder(node* root)
{
  if (root == NULL)
    return NULL;

  // Traverse the left subtree
  inOrder(root->left);

  // Print the node data
  std::cout << root->data << "\n";

  // Traverse the right subtree
  inOrder(root->right);
}
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
  print(root.val)

  # Then recur on left child
  Preorder(root.left)

  # now recur on right child
  Preorder(root.right)
```

```java
// (Java)
public void preorder(Node root)
{
  if (root == null)
    return null;

  // Print the node's data
  System.out.println(root.data);

  // Traverse the left subtree
  preorder(root.left);

  // Traverse the right subtree 
  preorder(root.right);
}
```

```c++
#include <iostream>

// (C++)
void preorder(node* root)
{
  // Print the node's data
  std::cout << root->data << "\n";

  // Traverse the left subtree
  preorder(root->left);

  // Traverse the right subtree
  preorder(root->right);
}
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
  print(root.val)
```

```java
// (Java)
public void postorder(Node root)
{
  // Traverse the left subtree
  postorder(root.left);

  // Traverse the right subtree
  postorder(root.right);

  // Print the node's data
  System.out.println(root.data);
}
```

```c++
#include <iostream>

// (C++)
void postorder(node* root)
{
  // Traverse the left subtree
  postorder(root->left);

  // Traverse the right subtree
  postorder(root->right);

  // Print the node's data
  std::cout << node->data << "\n";
}
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
    print(queue[0].data)

    node = queue.pop(0)

    # Enqueue left child
    if node.left is not None:
      queue.append(node.left)

    # Enqueue right child
    if node.right is not None:
      queue.append(node.right):
```

```java
// (Java)
import java.util.*;

//...

public void printLevelOrder(Node root)
{
  // Create an empty list/queue for level order traversal 
  ArrayDeque<Node> queue = new ArrayDeque<Node>();

  // Enqueue the root
  queue.addLast(root);

  while (!queue.isEmpty())
  {
    // Print the front of the queue and remove it from queue
    System.out.println(queue.peekLast().data);
    Node node = queue.pop();

    // Enqueue left child
    if (node.left != null)
      queue.addLast(node.left);

    // Enqueue right child
    if (node.right != null)
      queue.addLast(node.right);
  }
}
```

```c++
// (C++)
#include <iostream>
#include <deque>

//...

void printLevelOrder(node* root)
{
  // Create an empty queue for level order traversal
  deque<node*> q;

  // Enqueue the root
  q.push_back(root);

  while (!q.empty())
  {
    // Print the front of the queue and remove it from the queue
    node *n = q.front();
    q.pop_front();

    // Enqueue left child
    if (n->left != NULL)
      q.push_back(n->left);

    // Enqueue right child
    if (n->right != NULL)
      q.push_back(n->right);
  }
}
```


**Time Complexity:** O(n) where n is number of nodes in the binary tree

[References](http://en.wikipedia.org/wiki/Breadth-first_traversal)


_________________________________________________________

#### 3. Determine if Two Trees are identical

Two trees are identical when they have same data and arrangement of data is also same.

To identify if two trees are identical, we need to traverse both trees simultaneously, and while traversing we need to compare data and children of the trees.

```python
# (Python)

# Python Program to determine if two trees are identical
# Given two trees, return true if they are structurally identical
def identicalTrees(T1, T2):
  # Both Empty
  if T1 is None and T2 is None:
    return True

  # Both non-empty - > compare them
  if T1 is not None and T2 is not None:
    return ((T1.data == T2.data) and
              identicalTrees(T1.left, T2.left) and
              identicalTrees(T1.right, T2.right))


    # One empty, one root -- false
  return False
```

```java
// (Java)
public bool identicalTrees(Node t1, Node t2)
{
  // Both empty?
  if (t1 == null && t2 == null)
    return true;

  // Both non-empty -> compare them
  if (t1 != null && t2 != null)
    return ((t1.data == t2.data) &&
      identicalTrees(t1.left, t2.left) && 
      identicalTrees(t1.right, t2.right));

  // One empty, one not --> false
  return false;
}
```

```c++
// (C++)
bool identicalTrees(node* t1, node* t2)
{
  // Both empty?
  if (t1 == NULL && t2 == NULL)
    return true;

  // Both non-empty -> compare them
  if (t1 != NULL && t2 != NULL)
    return ((t1->data == t2->data) && 
      identicalTrees(t1->left, t2->left) && 
      identicalTrees(t1->right, t2->right));

  // One empty and the other not?
  return false;
}
```


________________________________________________________________

#### 4. Find the maximum depth or height of a tree
```python
# (Python)

# Compute the maxDepth of a tree -- the number of nodes along the longest path
# from the root node down to the farthest leaf node

def maxDepth(root):
  if root is None:
    return 0

  # Compute the depth of each subtree
  leftDepth = maxDepth(root.left)
  rightDepth = maxDepth(root.right)

  # return max + 1
  return max(leftDepth, rightDepth) + 1
```

```java
// (Java)
public int maxDepth(Node root)
{
  if (root == null)
    return 0;

  // Compute the depth of each subtree
  int leftDepth = maxDepth(root.left);
  int rightDepth = maxDepth(root.right);

  // Return max + 1
  return Math.max(leftDepth, rightDepth);
}
```

```c++
// (C++)
#include <algorithm>

int maxDepth(node* root)
{
  if (root == NULL)
    return 0;

  // Compute the depth of each subtree
  int leftDepth = maxDepth(root->left);
  int rightDepth = maxDepth(root->right);

  // Return max + 1
  return std::max(leftDepth, rightDepth);
}
```

___________________________________________________________________

#### 5. Delete a Tree

```python
# (Python)
# Function traverses tree in postorder to delete each and every node of the tree
def deleteTree(root):
  if node is None:
    return

  # first delete both subtrees
  deleteTree(root.left)
  deleteTree(root.right)
```

```java
// (Java)
public void deleteTree(Node root)
{
  if (root == null)
    return;

  // First delete both subtrees
  deleteTree(root.left);
  deleteTree(root.right);
}
```

```c++
// (C++)
void deleteTree(node* root)
{
  if (root == NULL)
    return;

  // Delete both subtrees
  deleteTree(root->left);
  deleteTree(root->right);
}
```

__________________________________________________________________

#### 6. Convert a Tree into its mirror Tree

Mirror of a Binary Tree T is another Binary Tree M(T) with left and right children of
all non-leaf nodes interchanged.

```python
# (Python)
def mirror(root):
  if root is None:
    return

  mirror(root.left)
  mirror(root.right)

  # swap the pointer in this nodes
  temp = root.left
  root.left = root.right
  root.right = temp 
```

```java
// (Java)
public void mirror(Node root)
{
  if (root == null)
    return;

  mirror(root.left);
  mirror(root.right);

  // Swap the pointer in this node
  Node temp = root.left;
  root.left = root.right;
  root.right = temp;
}
```

```c++
// (C++)
void mirror(node* root)
{
  if (root == NULL)
    return;

  mirror(root->left);
  mirror(root->right);

  // Swap the pointer in this node
  node *temp = root->left;
  root->left = root->right;
  root->right = temp;
}
```
