
// Write a recursive function to calculate the nth Fibonacci number.

function fibonacci(n) {
    // Base cases
    if (n === 0) {
        return 0;
    }
    if (n === 1) {
        return 1;
    }
    // Recursive case
    return fibonacci(n - 1) + fibonacci(n - 2);
}

// Example usage
console.log(fibonacci(5));  // Output: 5
console.log(fibonacci(7));  // Output: 13
