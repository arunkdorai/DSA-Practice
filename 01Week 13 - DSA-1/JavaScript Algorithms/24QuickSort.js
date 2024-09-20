/* Quick Sort

Idea behind Quick Sort:

We begin by identifying the pivot element in the array

We can, pick first element as pivot or 
Pick last element as pivot (Our approach) or 
Pick a random element as pivot or
Pick median as pivot

Put everything that's smaller than the pivot into a 'left' array and everything that's greater than the pivot into a 'right' array.

Repeat the process for the individual 'left' and 'right' arrays till you have an array of length 1 which is sorted by definition.

Repeatedly concatenate the left array, pivot and right array till one sorted array remains.

*/

function quickSort(arr) {
    if(arr.length < 2) {
        return arr
    }
    let pivot = arr[arr.length-1]
    let left= []
    let right= []
    for(let i=0; i<arr.length-1; i++) {
        if(arr[i]<pivot) {
            left.push(arr[i])
        } else {
            right.push(arr[i])
        }        
    }
    return [...quickSort(left), pivot, ...quickSort(right)]
}

const arr = [8, 20, -2, 4, -6]
console.log(quickSort(arr))

// Worst case - O(n^2)
// Avg case - O(nlogn)