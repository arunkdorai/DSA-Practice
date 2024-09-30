/* ### Steps to Implement the Search Method in a binary search tree, broken down into simple bullet points:

1. **Add Search Method**:
   - Create a method called `search` in the binary search tree class.
   - The method will take two parameters: the root node and the value to search for.

2. **Check If Tree is Empty**:
   - If the root node is `null`, return `false`. This indicates the tree is empty and the value does not exist.

3. **Check If Value Equals Root**:
   - If the value to search is equal to the root node's value, return `true`. This means the value exists in the tree.

4. **Decide Which Subtree to Search**:
   - If the value is less than the root node's value:
     - Recursively call the `search` method on the left subtree (i.e., the left child of the root).
   - If the value is greater than the root node's value:
     - Recursively call the `search` method on the right subtree (i.e., the right child of the root).

5. **Return Results**:
   - Ensure that each recursive call returns its result, allowing the original call to return `true` or `false` based on the findings.

### Testing the Search Method

1. **Insert Nodes**:
   - In a previous step, ensure nodes have been inserted into the tree (e.g., 10, 5, 15).

2. **Test Search Functionality**:
   - Use `console.log` to test the search method with values that exist in the tree (e.g., 10, 5, 15) and expect `true`.
   - Test with a value that does not exist (e.g., 20) and expect `false`.

3. **Run the Code**:
   - Execute the code and verify the output to ensure that the `search` method works as expected.

### Conclusion

- Confirm that both the `insert` and `search` methods are functioning correctly.
- Prepare for the next steps, such as learning how to traverse the binary search tree.

By following these steps, you can successfully implement and test the search functionality in a binary search tree!

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
}

const bst = new BinarySearchTree()
console.log('Is the tree empty?', bst.isEmpty())

bst.insert(10)
bst.insert(5)
bst.insert(15)

console.log(bst.search(bst.root, 10))
console.log(bst.search(bst.root, 5))
console.log(bst.search(bst.root, 15))
console.log(bst.search(bst.root, 20))