
// Problem: Write a function that reverses the given string.

function reverseString(str) {
    return str.split('').reverse().join('');
}

// Example usage
console.log(reverseString("Hello World!"));  // Output: "!dlroW olleH"
console.log(reverseString("JavaScript"));    // Output: "tpircSavaJ"
