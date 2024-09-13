
// Find the First Non-Repeating Character
// Problem: Given a string, find the first non-repeating character using a hash table.

function firstNonRepeatingCharacter(str) {
    let charCount = new Map();
  
    for (let char of str) {
      charCount.set(char, (charCount.get(char) || 0) + 1);
    }
  
    for (let char of str) {
      if (charCount.get(char) === 1) {
        return char;
      }
    }
  
    return null;  // All characters are repeating
  }
  
  // Test Cases
  console.log(firstNonRepeatingCharacter("swiss"));  // w
  console.log(firstNonRepeatingCharacter("aabbcc")); // null
  console.log(firstNonRepeatingCharacter("loveleetcode")); // v
  