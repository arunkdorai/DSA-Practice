
// First Non-Repeating Character in a Stream
// Problem: Given a stream of characters, find the first non-repeating character at each insertion.

function firstNonRepeating(stream) {
    let queue = [];
    let charCount = new Map();
  
    for (let char of stream) {
      charCount.set(char, (charCount.get(char) || 0) + 1);
      queue.push(char);
  
      while (queue.length && charCount.get(queue[0]) > 1) {
        queue.shift();
      }
  
      if (queue.length) {
        console.log(queue[0]);  // First non-repeating character
      } else {
        console.log(-1);  // All characters are repeating
      }
    }
  }
  
  // Sample Workout
  firstNonRepeating("aabc");  
  