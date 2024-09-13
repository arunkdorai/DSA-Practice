
class Queue {
    constructor() {
      this.queue = [];
    }
  
    // Enqueue element into the queue
    enqueue(element) {
      this.queue.push(element);
    }
  
    // Dequeue element from the queue
    dequeue() {
      if (this.queue.length === 0) {
        return "Queue is empty";
      }
      return this.queue.shift();
    }
  
    // Display queue elements
    display() {
      return this.queue.length > 0 ? this.queue : "Queue is empty";
    }
  }
  
  // Sample Workouts for Queue
  let myQueue = new Queue();
  myQueue.enqueue(1);
  myQueue.enqueue(2);
  myQueue.enqueue(3);
  console.log("Queue after enqueue: ", myQueue.display());  // Workout 1
  
  myQueue.dequeue();
  console.log("Queue after dequeue: ", myQueue.display());   // Workout 2
  
  myQueue.enqueue(4);
  console.log("Queue after enqueue again: ", myQueue.display());  // Workout 3
  