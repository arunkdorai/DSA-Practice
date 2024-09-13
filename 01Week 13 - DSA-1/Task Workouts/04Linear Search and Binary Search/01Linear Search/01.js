function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i;  // Return the index of the found element
        }
    }
    return -1;  // Element not found
}

// Example usage
const arr = [3, 5, 1, 9, 2];
console.log(linearSearch(arr, 9));  // Output: 3
console.log(linearSearch(arr, 7));  // Output: -1


// Find the first occurrence of a target value in an array

function findFirstOccurrence(arr, target) {
    return linearSearch(arr, target);
}

console.log(findFirstOccurrence([10, 20, 30, 40, 50], 30));  // Output: 2
console.log(findFirstOccurrence([1, 2, 3, 4, 5], 6));        // Output: -1
