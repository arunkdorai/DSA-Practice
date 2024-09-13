
// Count the occurrences of a target value in a sorted array:

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

// Count the occurrences of a target value in a sorted array:

function countOccurrencesBinary(arr, target) {
    const first = findFirstOccurrenceBinary(arr, target);
    if (first === -1) return 0;

    const last = findLastOccurrenceBinary(arr, target);
    return last - first + 1;
}

console.log(countOccurrencesBinary([1, 2, 2, 2, 3, 4, 5], 2));  // Output: 3
console.log(countOccurrencesBinary([1, 2, 3, 4, 5], 6));        // Output: 0

