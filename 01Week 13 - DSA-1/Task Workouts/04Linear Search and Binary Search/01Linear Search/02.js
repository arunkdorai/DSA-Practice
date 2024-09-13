
// Find the last occurrence of a target value in an array:

function findLastOccurrence(arr, target) {
    for (let i = arr.length - 1; i >= 0; i--) {
        if (arr[i] === target) {
            return i;  // Return the index of the last occurrence
        }
    }
    return -1;  // Element not found
}

console.log(findLastOccurrence([5, 3, 7, 3, 8], 3));  // Output: 3
console.log(findLastOccurrence([1, 2, 3, 4, 5], 6));  // Output: -1
