// Workout 2: Binary Search Tree (BST) Insertion, Deletion, and Validation

// Node class for Binary Search Tree
class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

// BST class with insert, delete, and validation methods
class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    // Insert a node
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

    // Validate if the tree is a BST
    isBST() {
        return this._validateBST(this.root, null, null);
    }

    _validateBST(node, min, max) {
        if (node === null) return true;
        if ((min !== null && node.value <= min) || (max !== null && node.value >= max)) {
            return false;
        }
        return this._validateBST(node.left, min, node.value) &&
               this._validateBST(node.right, node.value, max);
    }

    // Deleting a node
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
            if (node.left === null) return node.right;
            if (node.right === null) return node.left;
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
}

// Create a Binary Search Tree
let bst = new BinarySearchTree();
bst.insert(50);
bst.insert(30);
bst.insert(20);
bst.insert(40);
bst.insert(70);
bst.insert(60);
bst.insert(80);

console.log("Is the tree a valid BST? ", bst.isBST()); // Output: true

bst.delete(20);  // Delete a leaf node
bst.delete(30);  // Delete a node with one child
bst.delete(50);  // Delete a node with two children

console.log("Is the tree a valid BST after deletions? ", bst.isBST()); // Output: true
