// Node class for a doubly linked list
class DoublyListNode {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

// Doubly Linked List class with methods to perform various operations
class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    // Method to add a node at the end
    addAtEnd(value) {
        const newNode = new DoublyListNode(value);
        if (this.head === null) {
            this.head = this.tail = newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
    }

    // Method to add a node at the beginning
    addAtBeginning(value) {
        const newNode = new DoublyListNode(value);
        if (this.head === null) {
            this.head = this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;
        }
    }

    // Method to delete a node by value
    deleteNode(value) {
        if (this.head === null) return;

        if (this.head.value === value) {
            this.head = this.head.next;
            if (this.head) this.head.prev = null;
            else this.tail = null;
            return;
        }

        let current = this.head;
        while (current && current.value !== value) {
            current = current.next;
        }

        if (current) {
            if (current === this.tail) {
                this.tail = current.prev;
                this.tail.next = null;
            } else {
                current.prev.next = current.next;
                current.next.prev = current.prev;
            }
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
    printListReverse() {
        let current = this.tail;
        while (current) {
            console.log(current.value);
            current = current.prev;
        }
    }
}

// Example Usage
const dlist = new DoublyLinkedList();
dlist.addAtEnd(1);
dlist.addAtEnd(2);
dlist.addAtBeginning(0);
dlist.deleteNode(1);
dlist.printList();  // Output: 0, 2
dlist.printListReverse();  // Output: 2, 0
