# Queues

#### 1. Implement Queue Using Stacks

Algorithm:
- Take 2 stacks, stack1 and stack2
- Stack1 will be used as the back of the Queues
- Stack2 will be used as Front of the Queue
- Enqueue() operation will be done on Stack1
- Peek() and Dequeue() operations will be done on Stack2
- when Peek() and Dequeue() are called, check if Stack2 is empty, if yes then move all the elements from Stack1 and push them into Stack2.

#### Python Implementation
```python
class QueueUsingStacks():
  def __init__(self):
    self.stack1 = []
    self.stack2 = []

  # Push into stack1
  def Enqueue(self, item):
    self.stack1.append(item)

  def peek(self):
    if len(self.stack2) == 0:
      self.moveItems(self.stack1, self.stack2)
    return self.stack2[-1]   # return the top element in stack2

  def Dequeue(self):
    if len(self.stack2) == 0:
      self.moveItems(self.stack1, self.stack2)
    return self.stack2.pop()  # Return the top element in stack2 and remove it from stack2

  def moveItems(self, stack1, stack2):
    length = len(self.stack1)
    while(length != 0):
      # Move all the elements from stack1 to stack2
      self.stack2.append(self.stack1.pop())

      length -= 1


s = QueueUsingStacks()
s.Enqueue(10)
s.Enqueue(20)
print(s.peek())
print(s.Dequeue())
print(s.Dequeue())



```

#### Java Implementation
```java
import java.util.Stack;

public class QueueUsingStacks {

	Stack<Integer> stack1 = new Stack<>(); //act as  back of the Queue
	Stack<Integer> stack2 = new Stack<>(); // act as the front of the Queue

	public void Enqueue(int x) {  // push into stack 1
		stack1.push(x);
	}

	public int peek() {
		if (stack2.isEmpty()) {
			moveItems(stack1, stack2);
		}
		return stack2.peek(); // return the top element in stack2
	}

	public int Dequeue() {
		if (stack2.isEmpty()) {
			moveItems(stack1, stack2);
		}
		return stack2.pop(); // return the top element in stack2
	}

	public void moveItems(Stack<Integer> s1, Stack<Integer> s2) {
		while (!stack1.isEmpty()) {
			s2.push(s1.pop()); // move all the elements from stack 1 to stack 2
		}
	}


}
```
