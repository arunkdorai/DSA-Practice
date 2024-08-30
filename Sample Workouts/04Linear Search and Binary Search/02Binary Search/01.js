
function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (arr[mid] === target) {
            return mid;  // Return the index of the found element
        }

        if (arr[mid] < target) {
            left = mid + 1;  // Search in the right half
        } else {
            right = mid - 1;  // Search in the left half
        }
    }

    return -1;  // Element not found
}

// Example usage
const sortedArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(binarySearch(sortedArr, 6));  // Output: 5
console.log(binarySearch(sortedArr, 10)); // Output: -1

// Find the first occurrence of a target value in a sorted array:

function findFirstOccurrenceBinary(arr, target) {
    let left = 0;
    let right = arr.length - 1;
    let result = -1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (arr[mid] === target) {
            result = mid;  // Update result to current index
            right = mid - 1;  // Search in the left half for the first occurrence
        } else if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return result;
}

console.log(findFirstOccurrenceBinary([1, 2, 2, 2, 3, 4, 5], 2));  // Output: 1
console.log(findFirstOccurrenceBinary([1, 2, 3, 4, 5], 6));        // Output: -1
