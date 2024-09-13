
// Josephus Problem using Queue
// Problem: Given n people standing in a circle, eliminate every k-th person until only one remains. Simulate this process using a queue.

function josephus(n, k) {
    let queue = [];
    
    // Fill the queue with people 1 to n
    for (let i = 1; i <= n; i++) {
      queue.push(i);
    }
  
    while (queue.length > 1) {
      // Move the first k-1 people to the back of the queue
      for (let i = 1; i < k; i++) {
        queue.push(queue.shift());
      }
      // Eliminate the k-th person
      queue.shift();
    }
  
    return queue[0];  // The last remaining person
  }
  
  // Sample Workout
  console.log(josephus(7, 3));  // 4
  console.log(josephus(5, 2));  // 3
  