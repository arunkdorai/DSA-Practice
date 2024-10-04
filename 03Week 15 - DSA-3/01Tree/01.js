 // Workout 1: Binary Tree with Inorder, Preorder, and Postorder Traversals

 // Define a Node class for the binary tree
class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

// Define the BinaryTree class
class BinaryTree {
    constructor() {
        this.root = null;
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

// Create the binary tree
let tree = new BinaryTree();
tree.root = new Node(1);
tree.root.left = new Node(2);
tree.root.right = new Node(3);
tree.root.left.left = new Node(4);
tree.root.left.right = new Node(5);

console.log("Inorder Traversal:");
tree.inorder(tree.root);

console.log("Preorder Traversal:");
tree.preorder(tree.root);

console.log("Postorder Traversal:");
tree.postorder(tree.root);
