
// Problem: Write a function to insert an element at a specific position in an array.

function insertElement(arr, element, position) {
    // Check if position is within the array length
    if (position < 0 || position > arr.length) {
        return "Invalid position";
    }

    // Insert the element at the specified position
    arr.splice(position, 0, element);
    return arr;
}

// Sample array and insertion
const array2 = [1, 2, 3, 4, 5];
console.log(insertElement(array2, 99, 2));