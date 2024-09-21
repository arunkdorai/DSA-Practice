/* Stack

The stack data structure is a sequential collection of elements that follows the principle of Last In First Out(LIFO).

This means, the last element inserted into the stack is first element to be removed.

Ex: A stack of plates. The last plate placed on top of the stack is also the first plate removed from the stack.

Stack is an abstract data type. It is defined by its behavior rather than being a mathematical model.

The stack data structure supports two main operations
Push, which adds an element to the collection
Pop, which removes the most recently added element from the collection.

Stack Usage
-Browser history tracking
-Undo operation when typing
-Expression conversions
-Call stack in JavaScript runtime
*/

// Stack Using Array

class Stack {
    constructor() {
        this.items = [];
    }
    // Push: Add an element to the top of the stack
    push(element) {
        this.items.push(element);
    }

    // Pop: Remove an element from the top of the stack
    pop() {
        if (this.isEmpty()) {
            return "Stack is empty";
        }
        return this.items.pop();
    }

    // Peek: Get the top element of the stack
    peek() {
        if (this.isEmpty()) {
            return "Stack is empty";
        }
        return this.items[this.items.length - 1];
    }

    // isEmpty: Check if the stack is empty
    isEmpty() {
        return this.items.length === 0;
    }

    // Size: Get the number of elements in the stack
    size() {
        return this.items.length;
    }

    // Print: Display the stack elements
    print() {
        console.log(this.items.toString());
    }
}

// Create a new stack
const stack = new Stack();

// Push elements onto the stack
stack.push(1);
stack.push(2);
stack.push(3);

// Display the stack's content
console.log("Stack after push operations:");
stack.print(); // Output: 1,2,3

// Pop an element
const poppedElement = stack.pop()
console.log("Popped element:", poppedElement); // Output: 3

// Display the stack's content after pop
console.log("Stack after pop operation:");
stack.print(); // Output: 1,2

// Check if the stack is empty
console.log("Is the stack empty?", stack.isEmpty());


/* Stack Using Objects

class Stack {
  constructor() {
    this.items = {};
    this.head = 0;
  }

  push(element) {
    this.items[this.head] = element;
    this.head++;
  }

  pop() {
    const item = this.items[this.head - 1];
    delete this.items[this.head - 1];
    this.head--;
    return item;
  }

  peek() {
    return this.items[this.head - 1];
  }

  size() {
    return this.head;
  }

  isEmpty() {
    return this.head === 0;
  }

  print() {
    console.log(this.items);
  }
}

*/