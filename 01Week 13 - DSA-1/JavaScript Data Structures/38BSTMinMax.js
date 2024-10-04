/* Steps to find the minimum and maximum values in a binary search tree (BST):

### Steps to Find Minimum Value

1. **Understand the BST Structure**:
   - In a BST, the left child's value is always less than its parent's value.

2. **Create the `min` Function**:
   - Define a function called `min` that takes the root node as a parameter.

3. **Check for Left Child**:
   - If the root node has no left child:
     - **Return** the root node's value as the minimum.
   - If the root node has a left child:
     - **Recursively call** the `min` function on the left child.

4. **Base Case**:
   - The recursion stops when a node with no left child is reached, returning that node's value.

### Steps to Find Maximum Value

1. **Understand the BST Structure**:
   - In a BST, the right child's value is always greater than its parent's value.

2. **Create the `max` Function**:
   - Define a function called `max` that takes the root node as a parameter.

3. **Check for Right Child**:
   - If the root node has no right child:
     - **Return** the root node's value as the maximum.
   - If the root node has a right child:
     - **Recursively call** the `max` function on the right child.

4. **Base Case**:
   - The recursion stops when a node with no right child is reached, returning that node's value.

### Example

#### Given BST Structure:

```
        10
       /  \
      5    15
     / \     \
    3   7     20
```

- **Minimum Value**:
  - Start at the root (10).
  - Move to the left child (5).
  - Move to the left child again (3).
  - Since 3 has no left child, **return 3** as the minimum value.

- **Maximum Value**:
  - Start at the root (10).
  - Move to the right child (15).
  - Move to the right child again (20).
  - Since 20 has no right child, **return 20** as the maximum value.

### Testing the Functions

1. **Call the Functions**:
   - Use `console.log(bst.min(bst.root))` to print the minimum value.
   - Use `console.log(bst.max(bst.root))` to print the maximum value.

2. **Expected Output**:
   - For the above example:
     - Minimum: **3**
     - Maximum: **20**

### Conclusion

- The `min` function will find the leftmost node, and the `max` function will find the rightmost node in the BST, both using recursion effectively. 

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

    min(root) {
        if(!root.left) {
            return root.value
        } else {
            return this.min(root.left)
        }
    }

    max(root) {
        if(!root.right) {
            return root.value
        } else {
            return this.max(root.right)
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
//  bst.levelOrder()

console.log(bst.min(bst.root))
console.log(bst.max(bst.root))