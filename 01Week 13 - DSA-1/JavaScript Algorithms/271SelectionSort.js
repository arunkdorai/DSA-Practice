/* Selection Sort

Selection Sort divides the list into a sorted and unsorted part and repeatedly selects the smallest element from the unsorted part 
and places it at the beginning.

or Selection Sort repeatedly selects the minimum element from the unsorted portion of the list and moves it to the end of the sorted portion.

*/

function selectionSort(arr) {
    let n = arr.length
    for(let i=0; i<n-1; i++) {
        let minIndex = i
        for(let j=i+1; j<n; j++) {
            if(arr[j] < arr[minIndex]) {
                minIndex = j
            }
        }
        [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]]
    }
    return arr
}

const arr = [3, 5, 2, 1, 4]
console.log(selectionSort(arr))