
// Problem: Write a function to delete an element by its value from an array.

function deleteElementByValue(arr, value) {
    const index = arr.indexOf(value);

    // Check if the value exists in the array
    if (index > -1) {
        arr.splice(index, 1);
    } else {
        console.log("Element not found in the array");
    }
    return arr;
}

// Sample array and deletion
const array3 = [1, 2, 3, 4, 5];
console.log(deleteElementByValue(array3, 3));