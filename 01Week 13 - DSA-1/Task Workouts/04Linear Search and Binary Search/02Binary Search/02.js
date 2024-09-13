
// Find the last occurrence of a target value in a sorted array:

function findLastOccurrenceBinary(arr, target) {
    let left = 0;
    let right = arr.length - 1;
    let result = -1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (arr[mid] === target) {
            result = mid;  // Update result to current index
            left = mid + 1;  // Search in the right half for the last occurrence
        } else if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return result;
}

console.log(findLastOccurrenceBinary([1, 2, 2, 2, 3, 4, 5], 2));  // Output: 3
console.log(findLastOccurrenceBinary([1, 2, 3, 4, 5], 6));        // Output: -1
