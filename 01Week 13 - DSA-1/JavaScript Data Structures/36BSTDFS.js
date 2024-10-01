/* Tree Traversal

Traversing a tree simply means visiting every node in the tree.

A hierarchical data structure like a tree can be traversed in different ways.
Generally there are two widely used ways for traversing trees:

1. Depth First Search (DFS)
2. Breadth First Search (BFS)

Steps for Depth First Search (DFS) tree traversal techniques:

### Overview of DFS
- **Definition**: DFS algorithm starts at the root node and explores as far as possible along each branch before backtracking.

- Visit the root node, visit all the nodes in the left subtree and visit all the nodes in the right subtree.

- Depending on the order in which we do this, there can be three types of DFS traversals
1. Preorder
2. Inorder
3. Postorder

### Types of DFS Traversals

1. **Pre-order Traversal**

   - Steps:
     - Visit the **current node**.(Read the data of the node)
     - Traverse the **left subtree**. (Visit the left subtree)
     - Traverse the **right subtree**. (Visit the right subtree)

2. **In-order Traversal**
   - Steps:
     - Traverse the **left subtree**. (Visit the left subtree)
     - Visit the **current node**. (Read the data of the node)
     - Traverse the **right subtree**. (Visit the right subtree)

3. **Post-order Traversal**
   - Steps:
     - Traverse the **left subtree**. (Visit the left subtree)
     - Traverse the **right subtree**. (Visit the right subtree)
     - Visit the **current node**. (Read the data of the node)

### Pre-order Traversal Example
- Given tree structure:
  ```
        10
       /  \
      5   15
     / \
    3   7
  ```
- Steps:
  1. Start at **10** (root): visit **10**.
  2. Move to **5** (left child): visit **5**.
  3. Move to **3** (left child): visit **3**.
  4. Backtrack to **5**, then visit **7** (right child of 5): visit **7**.
  5. Backtrack to **10**, then visit **15** (right child): visit **15**.
- Result: **10, 5, 3, 7, 15**

### In-order Traversal Example
- Given tree structure:
  ```
        10
       /  \
      5   15
     / \
    3   7
  ```
- Steps:
  1. Start at **10**: move to **5** (left child).
  2. Move to **3** (left child): visit **3**.
  3. Backtrack to **5**: visit **5**.
  4. Move to **7** (right child of 5): visit **7**.
  5. Backtrack to **10**: visit **10**.
  6. Move to **15** (right child): visit **15**.
- Result: **3, 5, 7, 10, 15**

### Post-order Traversal Example
- Given tree structure:
  ```
        10
       /  \
      5   15
     / \
    3   7
  ```
- Steps:
  1. Start at **10**: move to **5** (left child).
  2. Move to **3** (left child): visit **3**.
  3. Backtrack to **5**, move to **7** (right child): visit **7**.
  4. Backtrack to **5**: visit **5**.
  5. Backtrack to **10**, move to **15** (right child): visit **15**.
  6. Finally, visit **10**.
- Result: **3, 7, 5, 15, 10**

### Summary of Outputs
- **Pre-order**: 10, 5, 3, 7, 15
- **In-order**: 3, 5, 7, 10, 15
- **Post-order**: 3, 7, 5, 15, 10

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
bst.postOrder(bst.root) // Output: 3 7 5 15 10
