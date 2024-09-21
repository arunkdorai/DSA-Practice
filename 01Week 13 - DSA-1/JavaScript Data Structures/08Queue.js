/* Queue

The queue data structure is a sequential collection of elements that follows the principle of First In First Out (FIFO).

The first element inserted into the queue is first element to be removed.

A queue of people. People enter the queue at one end (rear/tail) and leave the queue from the other end (front/head).

Queue is an abstract data type. It is defined by its behavior rather then being a mathematical model.

The Queue data structure supports two main operations 
-Enqueue, which adds an element to the rear/tail of the collection.
-Dequeue, which removes an element from the front/head of the collection.

Queue Usage
-Printers, when we try to print multiple documents
-CPU task scheduling 
-Callback queue in JavaScript runtime to determine the order in which our code executes.
*/

// Queue Using Arrays

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

    // Peek: Get the front element of the queue without removing it
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


/* V10 - Queue Implementation optimised

Queue Using Objects

class Queue {
  constructor() {
    this.items = {};
    this.front = 0;
    this.rear = 0;
  }

  enqueue(element) {
    this.items[this.rear] = element;
    this.rear++;
  }

  dequeue() {
    const item = this.items[this.front];
    delete this.items[this.front];
    this.front++;
    return item;
  }

  peek() {
    return this.items[this.front];
  }

  size() {
    return this.rear - this.front;
  }

  isEmpty() {
    return this.rear - this.front === 0;
  }

  print() {
    console.log(this.items);
  }
}

const queue = new Queue();
console.log(queue.isEmpty());
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
console.log(queue.size());
queue.print();
console.log(queue.dequeue());
console.log(queue.peek());
console.log(queue.isEmpty());
queue.print();


*/
