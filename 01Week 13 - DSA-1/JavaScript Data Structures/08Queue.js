
class Queue {
    constructor() {
        this.items = [];
    }

    // Enqueue: Add an element to the back of the queue
    enqueue(element) {
        this.items.push(element);
    }

    // Dequeue: Remove an element from the front of the queue
    dequeue() {
        if (this.isEmpty()) {
            return "Queue is empty";
        }
        return this.items.shift();
    }

    // Peek: Get the front element of the queue
    peek() {
        if (this.isEmpty()) {
            return "Queue is empty";
        }
        return this.items[0];
    }

    // isEmpty: Check if the queue is empty
    isEmpty() {
        return this.items.length === 0;
    }

    // Size: Get the number of elements in the queue
    size() {
        return this.items.length;
    }

    // Print: Display the queue elements
    print() {
        console.log(this.items.toString());
    }
}

// Example usage:
const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.print(); // Output: 1,2,3
console.log(queue.dequeue()); // Output: 1
queue.print(); // Output: 2,3

