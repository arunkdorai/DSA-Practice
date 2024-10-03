/* Breadth First Search (BFS)

With BFS algorithm, we explore all nodes at the present depth prior to moving on to the nodes at the next depth level.

BFS Traversal Approach
1. Create a queue
2. Enqueue the root node
3. As long as a node exists in the queue:
   a. Dequeue the node from the front
   b. Read the node's value
   c. Enqueue the node's left child if it exists
   d. Enqueue the node's right child if it exists

Steps for the Breadth-First Search (BFS) algorithm for tree traversal:

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

class Node {
   constructor(value) {
       this.value = value
       this.left = null
       this.right = null
   }
}

class BinarySearchTree {
   constructor() {
       this.root = null
   }

   isEmpty() {
       return this.root === null
   }

   insert(value) {
       const newNode = new Node(value)
       if(this.isEmpty()) {
           this.root = newNode
       } else {
           this.insertNode(this.root, newNode)
       }
   }

   insertNode(root, newNode) {
       if(newNode.value < root.value) {
           if(root.left === null) {
               root.left = newNode
           } else {
               this.insertNode(root.left, newNode)
           }
       } else {
           if(root.right === null) {
               root.right = newNode
           } else {
               this.insertNode(root.right, newNode)
           }
       }
   }

   search(root, value) {
       if(!root) {
           return false
       } else {
           if(value === root.value) {
               return true
           } else if(value < root.value) {
               return this.search(root.left, value)
           } else {
               return this.search(root.right, value)
           }
       }
   }

   preOrder(root) {
       if(root) {
           console.log(root.value)
           this.preOrder(root.left)
           this.preOrder(root.right)
       }
   }

   inOrder(root) {
       if(root) {
           this.inOrder(root.left)
           console.log(root.value)
           this.inOrder(root.right)
       }
   }

   postOrder(root) {
       if(root) {
           this.postOrder(root.left)
           this.postOrder(root.right)
           console.log(root.value)
       }
   }

   levelOrder() { // The method is called as level order since we travel one level at a time.
      // Use the optimised queue implementation (using objects).
      // As relying on array operations can lead to a higher time complexity.
      const queue = []
      queue.push(this.root)
      while(queue.length) {
         let curr = queue.shift()
         console.log(curr.value)
         if(curr.left) {
            queue.push(curr.left)
         }
         if(curr.right) {
            queue.push(curr.right)
         }
      }
   }
}

const bst = new BinarySearchTree()
console.log('Is the tree empty?', bst.isEmpty())

bst.insert(10)
bst.insert(5)
bst.insert(15)
bst.insert(3)
bst.insert(7)

console.log(bst.search(bst.root, 10))
console.log(bst.search(bst.root, 5))
console.log(bst.search(bst.root, 15))
console.log(bst.search(bst.root, 20))
// bst.preOrder(bst.root) // Output: 10 5 3 7 15
// bst.inOrder(bst.root) // Output: 3 5 7 10 15
// bst.postOrder(bst.root) // Output: 3 7 5 15 10
bst.levelOrder()