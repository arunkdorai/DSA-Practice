
// Count occurrences of a target value in an array:

function countOccurrences(arr, target) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            count++;
        }
    }
    return count;
}

console.log(countOccurrences([1, 2, 2, 3, 4, 2], 2));  // Output: 3
console.log(countOccurrences([1, 2, 3, 4, 5], 6));     // Output: 0
