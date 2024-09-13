
 // Maximum Element
 // Problem: Implement a stack that supports finding the maximum element.

 class MaxStack {
    constructor() {
      this.stack = [];
      this.maxStack = [];
    }
  
    push(element) {
      this.stack.push(element);
      if (this.maxStack.length === 0 || element >= this.getMax()) {
        this.maxStack.push(element);
      }
    }
  
    pop() {
      let removedElement = this.stack.pop();
      if (removedElement === this.getMax()) {
        this.maxStack.pop();
      }
      return removedElement;
    }
  
    getMax() {
      return this.maxStack[this.maxStack.length - 1];
    }
  }
  
  // Sample Workout
  let s = new MaxStack();
  s.push(5);
  s.push(2);
  s.push(8);
  console.log(s.getMax());  // 8
  s.pop();
  console.log(s.getMax());  // 5
  