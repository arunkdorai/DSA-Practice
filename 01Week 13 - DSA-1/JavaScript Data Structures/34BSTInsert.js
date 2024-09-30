/* Here’s a detailed and simplified breakdown of how to add a new node to a binary search tree (BST):

### Step 1: Create a New Node
- **Define the Insert Method**: 
  - Create a method called `insert` that takes a value as a parameter.
- **Instantiate a New Node**:
  - Within the method, create a new node using the Node class, passing in the value.
  - This new node will have:
    - The specified value.
    - Left and right pointers set to `null`.

### Step 2: Insert a Node When the Tree is Empty
- **Check if the Tree is Empty**:
  - Use the `isEmpty` method of the binary search tree to see if it has no nodes.
- **Set the Root Node**:
  - If the tree is empty, assign the new node as the root of the tree.
  - This means that the root pointer of the tree will now point to this new node.

### Step 3: Insert a Node If the Tree is Not Empty
- **Handle Non-Empty Tree**:
  - If the tree already has nodes (i.e., it’s not empty), you need to place the new node in the correct position.
- **Call a Helper Method**:
  - Call a new method named `insertNode`, passing in the current root node and the new node as arguments.

### Step 4: Define the `insertNode` Method
- **Accept Parameters**:
  - The `insertNode` method takes two parameters: the current node (root of the subtree) and the new node to be inserted.
- **Compare Values**:
  - Check if the value of the new node is less than the current node’s value:
    - **If Yes**:
      - Check if the current node has a left child:
        - **If Left Child is Empty**:
          - Insert the new node as the left child of the current node.
        - **If Left Child Exists**:
          - Recursively call `insertNode`, passing the left child as the new current node and the new node.
    - **If No** (meaning the new node’s value is greater):
      - Check if the current node has a right child:
        - **If Right Child is Empty**:
          - Insert the new node as the right child of the current node.
        - **If Right Child Exists**:
          - Recursively call `insertNode`, passing the right child as the new current node and the new node.

### Final Steps
- **Test the Insert Functionality**:
  - Call the `insert` method on the binary search tree instance to add values, for example: 
    ```javascript
    bst.insert(10);
    bst.insert(5);
    bst.insert(15);
    ```
- **Plan for Next Steps**:
  - Consider implementing a search method in the next video to check if specific values are present in the tree after insertion.

This method ensures that the properties of the binary search tree are maintained while inserting new nodes. Each node's left child will always have a lesser value, and the right child will have a greater value than the node itself.

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
}

const bst = new BinarySearchTree()
console.log('Tree is empty?', bst.isEmpty())