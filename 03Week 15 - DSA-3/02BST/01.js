// Workout 1: Create a BST with Insertion, Contains, Deletion, and Traversals

class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    // Insert a node into the BST
    insert(value) {
        this.root = this._insertNode(this.root, value);
    }

    _insertNode(node, value) {
        if (node === null) {
            return new Node(value);
        }
        if (value < node.value) {
            node.left = this._insertNode(node.left, value);
        } else {
            node.right = this._insertNode(node.right, value);
        }
        return node;
    }

    // Check if a value exists in the BST
    contains(value) {
        return this._searchNode(this.root, value);
    }

    _searchNode(node, value) {
        if (node === null) {
            return false;
        }
        if (value < node.value) {
            return this._searchNode(node.left, value);
        } else if (value > node.value) {
            return this._searchNode(node.right, value);
        } else {
            return true;
        }
    }

    // Delete a node from the BST
    delete(value) {
        this.root = this._deleteNode(this.root, value);
    }

    _deleteNode(node, value) {
        if (node === null) return null;

        if (value < node.value) {
            node.left = this._deleteNode(node.left, value);
        } else if (value > node.value) {
            node.right = this._deleteNode(node.right, value);
        } else {
            // Node with only one child or no child
            if (node.left === null) return node.right;
            if (node.right === null) return node.left;

            // Node with two children: Get the inorder successor (smallest in the right subtree)
            node.value = this._minValue(node.right);
            node.right = this._deleteNode(node.right, node.value);
        }
        return node;
    }

    _minValue(node) {
        let min = node.value;
        while (node.left !== null) {
            min = node.left.value;
            node = node.left;
        }
        return min;
    }

    // Inorder Traversal: Left, Root, Right
    inorder(node) {
        if (node !== null) {
            this.inorder(node.left);
            console.log(node.value);
            this.inorder(node.right);
        }
    }

    // Preorder Traversal: Root, Left, Right
    preorder(node) {
        if (node !== null) {
            console.log(node.value);
            this.preorder(node.left);
            this.preorder(node.right);
        }
    }

    // Postorder Traversal: Left, Right, Root
    postorder(node) {
        if (node !== null) {
            this.postorder(node.left);
            this.postorder(node.right);
            console.log(node.value);
        }
    }
}

// Test Workout 1
let bst = new BinarySearchTree();
bst.insert(50);
bst.insert(30);
bst.insert(20);
bst.insert(40);
bst.insert(70);
bst.insert(60);
bst.insert(80);

console.log("Inorder Traversal:");
bst.inorder(bst.root);

console.log("Preorder Traversal:");
bst.preorder(bst.root);

console.log("Postorder Traversal:");
bst.postorder(bst.root);

console.log("Contains 40:", bst.contains(40));  // true
console.log("Contains 100:", bst.contains(100));  // false

bst.delete(20);
console.log("Inorder Traversal after deleting 20:");
bst.inorder(bst.root);
