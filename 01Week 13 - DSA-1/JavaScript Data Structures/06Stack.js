

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