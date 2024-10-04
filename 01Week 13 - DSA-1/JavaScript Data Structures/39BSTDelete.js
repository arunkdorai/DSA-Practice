/* Steps to delete a node from a binary search tree (BST):

### Steps to Delete a Node from a BST

1. **Understand the Scenarios**:
   - There are three scenarios when deleting a node:
     - **Scenario 1**: The node is a **leaf node** (no children).
     - **Scenario 2**: The node has **one child**.
     - **Scenario 3**: The node has **two children**.

### Scenario 1: Deleting a Leaf Node

- **Action**: Simply remove the node.
- **Example**: 
  - If you want to delete **3** from the following tree:
  
    ```
            10
           /  \
          5    15
         /
        3
    ```
  - **Result**: The tree becomes:
  
    ```
            10
           /  \
          5    15
    ```

### Scenario 2: Deleting a Node with One Child

- **Action**: Remove the node and replace it with its child.
- **Example**:
  - If you want to delete **5**:
  
    ```
            10
           /  \
          5    15
         /
        3
    ```
  - Remove **5** and replace it with **3** (its child):
  
    ```
            10
           /  \
          3    15
    ```

### Scenario 3: Deleting a Node with Two Children

- **Action**: 
  1. Find the **in-order successor** (smallest value in the right subtree).
  2. Replace the value of the node to be deleted with the in-order successor's value.
  3. Delete the in-order successor.
- **Example**:
  - If you want to delete **10**:
  
    ```
            10
           /  \
          5    15
         /
        3
    ```
  - The in-order successor is **15** (smallest value in the right subtree).
  - Replace **10** with **15**:
  
    ```
            15
           /  \
          5    (null)
         /
        3
    ```
  - Delete **15** from its original position (which is now empty):
  
    ```
            15
           /  \
          5    (null)
         /
        3
    ```

### Implementation Steps

1. **Create the `delete` Method**:
   - Accept a value to delete from the tree.
   - Call a recursive helper function (e.g., `deleteNode`).

2. **Define the `deleteNode` Function**:
   - Check if the tree is empty. If it is, return the root.
   - Use recursion to find the node with the specified value.
   - Depending on the node's children (leaf, one child, or two children), implement the corresponding deletion logic.

3. **Return the Updated Root**:
   - After deletion, return the updated root of the tree.

### Example Code Snippet

```javascript
delete(value) {
    this.root = this.deleteNode(this.root, value);
}

deleteNode(root, value) {
    if (root === null) return root;

    if (value < root.value) {
        root.left = this.deleteNode(root.left, value);
    } else if (value > root.value) {
        root.right = this.deleteNode(root.right, value);
    } else {
        // Node found
        if (!root.left && !root.right) { // Leaf node
            return null;
        } else if (!root.left) { // One child (right)
            return root.right;
        } else if (!root.right) { // One child (left)
            return root.left;
        } else { // Two children
            const minRight = this.min(root.right);
            root.value = minRight.value; // Replace value
            root.right = this.deleteNode(root.right, minRight.value); // Delete successor
        }
    }
    return root;
}
```

### Testing the Delete Function

1. **Call the Delete Method**:
   - For example, `bst.delete(3)` to delete a leaf node.
   - Check the tree structure afterwards to verify correctness.

2. **Expected Output**:
   - After deleting nodes like **3**, **5**, and **10**, check the updated BST structure using a traversal method (like level order).

### Conclusion

- Deleting nodes in a BST involves different strategies based on the node's child configuration. Understanding these scenarios and their implementations is key to mastering BST operations. If you find it complex, rewatch the content and practice with examples to reinforce your understanding!

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

    delete(value) {
        this.root = this.deleteNode(this.root, value)
    }

    deleteNode(root, value) {
        if(root === null) {
            return root
        }
        if(value < root.value) {
            root.left = this.deleteNode(root.left, value)
        } else if (value > root.value) {
            root.right = this.deleteNode(root.right, value)
        } else {
            if(!root.left && !root.right) {
                return null
            }
            if(!root.left) {
                return root.right
            } else if (!root.right) {
                return root.left
            }
            root.value = this.min(root.right)
            root.right = this.deleteNode(root.right, root.value)
        }
        return root
    }
 }
 
 const bst = new BinarySearchTree()
 console.log('Is the tree empty?', bst.isEmpty())
 
 bst.insert(10)
 bst.insert(5)
 bst.insert(15)
 bst.insert(3)
 
//  console.log(bst.search(bst.root, 10))
//  console.log(bst.search(bst.root, 5))
//  console.log(bst.search(bst.root, 15))
//  console.log(bst.search(bst.root, 20))
 // bst.preOrder(bst.root) // Output: 10 5 3 7 15
 // bst.inOrder(bst.root) // Output: 3 5 7 10 15
 // bst.postOrder(bst.root) // Output: 3 7 5 15 10
//  bst.levelOrder()

// console.log(bst.min(bst.root))
// console.log(bst.max(bst.root))

bst.levelOrder()
console.log('-----------')

// bst.delete(3)
// bst.levelOrder()

// bst.delete(15)
// bst.levelOrder()

bst.delete(10)
bst.levelOrder()