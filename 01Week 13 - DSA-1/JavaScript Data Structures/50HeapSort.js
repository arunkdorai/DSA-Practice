/* Heap Sort

Heap Sort is a comparison-based sorting algorithm that uses a binary heap data structure to sort elements. 

It works by building a heap (either min-heap or max-heap) from the input data, then repeatedly extracting the root of the heap (the maximum or minimum element) and adjusting the heap to maintain its structure.

It works in two main phases:
1. **Building a Max Heap** (or Min Heap for descending order)
2. **Extracting the Maximum Element** repeatedly from the heap and rebuilding the heap to maintain the heap property.

### Steps of Heap Sort

1. **Build a Max Heap** from the input data.
2. **Swap** the root (maximum element) with the last element of the heap.
3. **Reduce the heap size** by one, effectively removing the last element (sorted part).
4. **Heapify** the new root to maintain the max heap property.
5. Repeat steps 2-4 until all elements are sorted.

Heapify:
Heapify is the process of ensuring that the binary tree satisfies the heap property. In max-heapify, we ensure that every parent node is larger than its children.

Time Complexity:
Heap Sort runs in O(n log n) time, making it efficient and suitable for large datasets. The heap construction takes O(n) time, and removing each element from the heap takes O(log n) time, leading to the overall time complexity.

In-place Sorting:
Heap Sort is an in-place algorithm, meaning it doesn’t require extra memory to store temporary arrays, unlike other algorithms like Merge Sort.

Stability:
Heap Sort is not a stable sort. The relative order of equal elements may not be preserved during the sorting process.

*/

class MaxHeap {
    constructor() {
        this.heap = [];
    }

    // Build a max-heap from an array of elements
    buildHeap(arr) {
        this.heap = arr;
        for (let i = Math.floor(this.heap.length / 2) - 1; i >= 0; i--) {
            this.heapifyDown(i);
        }
    }

    // Heapify down to maintain the max-heap property
    heapifyDown(index) {
        let largest = index;
        const leftChild = 2 * index + 1;
        const rightChild = 2 * index + 2;

        if (leftChild < this.heap.length && this.heap[leftChild] > this.heap[largest]) {
            largest = leftChild;
        }
        if (rightChild < this.heap.length && this.heap[rightChild] > this.heap[largest]) {
            largest = rightChild;
        }
        if (largest !== index) {
            [this.heap[index], this.heap[largest]] = [this.heap[largest], this.heap[index]];
            this.heapifyDown(largest);
        }
    }

    // Remove the maximum element (root)
    remove() {
        const root = this.heap[0];
        const end = this.heap.pop();
        if (this.heap.length > 0) {
            this.heap[0] = end;
            this.heapifyDown(0);
        }
        return root;
    }

    // Heap Sort Algorithm
    heapSort() {
        const sorted = [];
        while (this.heap.length > 0) {
            sorted.unshift(this.remove()); // Insert at the beginning for ascending order
        }
        return sorted;
    }
}

// Test Workout 1
let arr = [7, 3, 1, 8, 5, 2, 6];
let heapSort = new MaxHeap();
heapSort.buildHeap(arr);

console.log("Max-Heap built from array:", heapSort.heap);

let sortedArr = heapSort.heapSort();
console.log("Array sorted in ascending order using Heap Sort:", sortedArr);
