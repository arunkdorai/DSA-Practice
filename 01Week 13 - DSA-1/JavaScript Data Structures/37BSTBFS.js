/* Steps for the Breadth-First Search (BFS) algorithm for tree traversal:

### Steps for Breadth-First Search (BFS)

1. **Create a Queue**
   - Initialize an empty queue to keep track of the nodes to be explored.

2. **Enqueue the Root Node**
   - Add the root node of the tree to the queue.

3. **Iterate While the Queue is Not Empty**
   - Perform the following steps as long as there are nodes in the queue:

   1. **Dequeue the Front Node**
      - Remove the node at the front of the queue and store it in a temporary variable (e.g., `current`).

   2. **Read the Node's Value**
      - Process the current node (e.g., print its value).

   3. **Enqueue Left Child (if it exists)**
      - If the current node has a left child, add it to the back of the queue.

   4. **Enqueue Right Child (if it exists)**
      - If the current node has a right child, add it to the back of the queue.

4. **Repeat**
   - Continue the process until the queue is empty, indicating that all nodes have been visited.

### Visualization Example
- Start with a binary search tree (BST) that has five nodes.
- Initially, the queue is empty. 
- After enqueuing the root node, dequeue it, read its value, and enqueue its children.
- Repeat for each node in the queue until it's empty.

### Final Note
- This BFS traversal explores nodes level by level, ensuring all nodes at a given depth are visited before moving on to deeper levels.

Let’s go through a Breadth-First Search (BFS) example step-by-step using a simple binary search tree (BST).

### Example Binary Search Tree

```
         10
       /    \
      5      15
     / \     / \
    3   7   13  20
```

### Steps for BFS Traversal

1. **Create a Queue**
   - Initialize an empty queue: `queue = []`.

2. **Enqueue the Root Node**
   - Add the root node (10) to the queue: `queue = [10]`.

3. **Iterate While the Queue is Not Empty**

   - **First Iteration:**
     1. **Dequeue the Front Node**
        - Dequeue 10: `current = 10`.
     2. **Read the Node's Value**
        - Print `10`.
     3. **Enqueue Left Child (if it exists)**
        - Enqueue left child (5): `queue = [5]`.
     4. **Enqueue Right Child (if it exists)**
        - Enqueue right child (15): `queue = [5, 15]`.

   - **Second Iteration:**
     1. **Dequeue the Front Node**
        - Dequeue 5: `current = 5`.
     2. **Read the Node's Value**
        - Print `5`.
     3. **Enqueue Left Child (if it exists)**
        - Enqueue left child (3): `queue = [15, 3]`.
     4. **Enqueue Right Child (if it exists)**
        - Enqueue right child (7): `queue = [15, 3, 7]`.

   - **Third Iteration:**
     1. **Dequeue the Front Node**
        - Dequeue 15: `current = 15`.
     2. **Read the Node's Value**
        - Print `15`.
     3. **Enqueue Left Child (if it exists)**
        - Enqueue left child (13): `queue = [3, 7, 13]`.
     4. **Enqueue Right Child (if it exists)**
        - Enqueue right child (20): `queue = [3, 7, 13, 20]`.

   - **Fourth Iteration:**
     1. **Dequeue the Front Node**
        - Dequeue 3: `current = 3`.
     2. **Read the Node's Value**
        - Print `3`.
     3. **Enqueue Left Child (if it exists)**
        - No left child; nothing to enqueue.
     4. **Enqueue Right Child (if it exists)**
        - No right child; nothing to enqueue.
     - Queue remains: `queue = [7, 13, 20]`.

   - **Fifth Iteration:**
     1. **Dequeue the Front Node**
        - Dequeue 7: `current = 7`.
     2. **Read the Node's Value**
        - Print `7`.
     3. **Enqueue Left Child (if it exists)**
        - No left child; nothing to enqueue.
     4. **Enqueue Right Child (if it exists)**
        - No right child; nothing to enqueue.
     - Queue remains: `queue = [13, 20]`.

   - **Sixth Iteration:**
     1. **Dequeue the Front Node**
        - Dequeue 13: `current = 13`.
     2. **Read the Node's Value**
        - Print `13`.
     3. **Enqueue Left Child (if it exists)**
        - No left child; nothing to enqueue.
     4. **Enqueue Right Child (if it exists)**
        - No right child; nothing to enqueue.
     - Queue remains: `queue = [20]`.

   - **Seventh Iteration:**
     1. **Dequeue the Front Node**
        - Dequeue 20: `current = 20`.
     2. **Read the Node's Value**
        - Print `20`.
     3. **Enqueue Left Child (if it exists)**
        - No left child; nothing to enqueue.
     4. **Enqueue Right Child (if it exists)**
        - No right child; nothing to enqueue.
     - Queue is now empty: `queue = []`.

### Final Output
The values printed in order are:
```
10
5
15
3
7
13
20
```

### Summary
This BFS traversal visits all nodes level by level, confirming the breadth-first nature of the algorithm.

*/

