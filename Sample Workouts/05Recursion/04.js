
// Write a recursive function to reverse a string.

function reverseString(str) {
    // Base case: empty string
    if (str === "") {
        return "";
    }
    // Recursive case
    return reverseString(str.substring(1)) + str.charAt(0);
}

// Example usage
console.log(reverseString("hello"));  // Output: "olleh"
console.log(reverseString("recursion"));  // Output: "noisrucer"
