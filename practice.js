function secondSmallest(arr) {
    // Sort the array in ascending order
    const sortedArray = arr.sort((a, b) => a - b);
    
    // Remove duplicates
    const uniqueSortedArray = [...new Set(sortedArray)];

    // Check if there are at least two unique numbers
    if (uniqueSortedArray.length < 2) {
        return null; // or any value you prefer to indicate there's no second smallest
    }

    // Return the second smallest number
    return uniqueSortedArray[1];
}

// Example usage:
const numbers = [5, 3, 1, 4, 2, 1];
const result = secondSmallest(numbers);
console.log(result); // Output: 2