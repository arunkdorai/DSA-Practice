
// Valid Parentheses
// Problem: Given a string containing just the characters (, ), {, }, [, and ], determine if the input string is valid.

function isValid(s) {
    const stack = [];
    const map = {
      ')': '(',
      '}': '{',
      ']': '['
    };
  
    for (let char of s) {
      if (char === '(' || char === '{' || char === '[') {
        stack.push(char);
      } else if (stack.pop() !== map[char]) {
        return false;
      }
    }
    return stack.length === 0;
  }
  
  // Test cases
  console.log(isValid("()[]{}"));  // true
  console.log(isValid("([)]"));    // false
  console.log(isValid("{[]}"));    // true
  