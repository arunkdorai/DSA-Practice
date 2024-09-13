
class Stack {
    constructor() {
      this.stack = [];
    }
  
    // Push element into the stack
    push(element) {
      this.stack.push(element);
    }
  
    // Pop element from the stack
    pop() {
      if (this.stack.length === 0) {
        return "Stack is empty";
      }
      return this.stack.pop();
    }
  
    // Display stack elements
    display() {
      return this.stack.length > 0 ? this.stack : "Stack is empty";
    }
  }
  
  // Sample Workouts for Stack
  let myStack = new Stack();
  myStack.push(10);
  myStack.push(20);
  myStack.push(30);
  console.log("Stack after push: ", myStack.display());  // Workout 1
  
  myStack.pop();
  console.log("Stack after pop: ", myStack.display());   // Workout 2
  
  myStack.push(40);
  console.log("Stack after push again: ", myStack.display());  // Workout 3
  