
// Write a recursive function to find the sum of all elements in an array.

function sumArray(arr) {
    // Base case: empty array
    if (arr.length === 0) {
        return 0;
    }
    // Recursive case
    return arr[0] + sumArray(arr.slice(1));
}

// Example usage
console.log(sumArray([1, 2, 3, 4, 5]));  // Output: 15
console.log(sumArray([]));               // Output: 0
