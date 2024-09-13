
// Write a recursive function to calculate the factorial of a number.

function factorial(n) {
    // Base case: 0! = 1
    if (n === 0) {
        return 1;
    }
    // Recursive case: n! = n * (n-1)!
    return n * factorial(n - 1);
}

// Example usage
console.log(factorial(5));  // Output: 120
console.log(factorial(0));  // Output: 1
