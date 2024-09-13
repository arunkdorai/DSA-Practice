
// Queue using Two Stacks
// Problem: Implement a queue using two stacks.

class QueueUsingStacks {
    constructor() {
      this.stack1 = [];
      this.stack2 = [];
    }
  
    enqueue(element) {
      this.stack1.push(element);
    }
  
    dequeue() {
      if (this.stack2.length === 0) {
        while (this.stack1.length > 0) {
          this.stack2.push(this.stack1.pop());
        }
      }
      return this.stack2.pop();
    }
  
    front() {
      if (this.stack2.length === 0) {
        while (this.stack1.length > 0) {
          this.stack2.push(this.stack1.pop());
        }
      }
      return this.stack2[this.stack2.length - 1];
    }
  }
  
  // Sample Workout
  let q = new QueueUsingStacks();
  q.enqueue(1);
  q.enqueue(2);
  q.enqueue(3);
  console.log(q.front());  // 1
  q.dequeue();
  console.log(q.front());  // 2
  