/* Bubble sort
 
Problem - Given an array of integers, sort the array.

With bubble sort, we compare adjacent elements in the array and swap the positions if they are not in the intended order.

Repeat the instruction as you step through each element in the array.

Once you step through the whole array with no swaps, the array is sorted. */

function bubblesort(arr) {
    let swapped
    do {
        swapped = false
    for(let i=0; i<arr.length-1; i++) {
        if(arr[i]>arr[i+1]) {
            let temp = arr[i]
            arr[i] = arr[i+1]
            arr[i+1] = temp
            swapped = true
        }
    }
  } while(swapped)
}

const arr = [5, 4, 3, 2, 1]
bubblesort(arr)
console.log(arr)

// Big-O = O(n^2)