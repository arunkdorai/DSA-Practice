// Node class representing a single element in the linked list
class ListNode {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

// Singly Linked List class with methods to perform various operations
class SinglyLinkedList {
    constructor() {
        this.head = null;
    }

    // Method to add a node at the end
    addAtEnd(value) {
        const newNode = new ListNode(value);
        if (this.head === null) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = newNode;
        }
    }

    // Method to add a node at the beginning
    addAtBeginning(value) {
        const newNode = new ListNode(value);
        newNode.next = this.head;
        this.head = newNode;
    }

    // Method to delete a node by value
    deleteNode(value) {
        if (this.head === null) return;

        if (this.head.value === value) {
            this.head = this.head.next;
            return;
        }

        let current = this.head;
        while (current.next && current.next.value !== value) {
            current = current.next;
        }

        if (current.next) {
            current.next = current.next.next;
        }
    }

    // Method to insert a node after a node with specific value
    insertAfter(value, newValue) {
        let current = this.head;
        while (current && current.value !== value) {
            current = current.next;
        }

        if (current) {
            const newNode = new ListNode(newValue);
            newNode.next = current.next;
            current.next = newNode;
        }
    }

    // Method to insert a node before a node with specific value
    insertBefore(value, newValue) {
        if (this.head === null) return;

        if (this.head.value === value) {
            this.addAtBeginning(newValue);
            return;
        }

        let current = this.head;
        while (current.next && current.next.value !== value) {
            current = current.next;
        }

        if (current.next) {
            const newNode = new ListNode(newValue);
            newNode.next = current.next;
            current.next = newNode;
        }
    }

    // Method to print all elements in order
    printList() {
        let current = this.head;
        while (current) {
            console.log(current.value);
            current = current.next;
        }
    }

    // Method to print all elements in reverse order
    printListReverse(node = this.head) {
        if (node === null) return;
        this.printListReverse(node.next);
        console.log(node.value);
    }

    // Method to remove duplicates from a sorted linked list
    removeDuplicates() {
        let current = this.head;
        while (current && current.next) {
            if (current.value === current.next.value) {
                current.next = current.next.next;
            } else {
                current = current.next;
            }
        }
    }
}

// Example Usage
// const list = new SinglyLinkedList();
// list.addAtEnd(1);
// list.addAtEnd(2);
// list.addAtEnd(2);
// list.addAtEnd(3);
// list.addAtBeginning(0);
// list.insertAfter(2, 2.5);
// list.insertBefore(3, 2.75);
// list.printList();  // Output: 0, 1, 2, 2.5, 2.75, 2, 3
// list.removeDuplicates();
// console.log("After removing duplicates:");
// list.printList();  // Output: 0, 1, 2, 2.5, 2.75, 3
// console.log("Reverse order:");
// list.printListReverse();  // Output: 3, 2.75, 2.5, 2, 1, 0


function arrayToLinkedList(arr) {
    const list = new SinglyLinkedList();
    arr.forEach(element => list.addAtEnd(element));
    return list;
}

// Example Usage
const array = [1, 2, 3, 4];
const linkedList = arrayToLinkedList(array);
linkedList.printList();  // Output: 1, 2, 3, 4
