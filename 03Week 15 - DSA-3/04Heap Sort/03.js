// Workout 3: Sorting a Nearly Sorted Array Using Heap Sort

class MinHeap {
    constructor() {
        this.heap = [];
    }

    // Insert an element into the heap
    insert(value) {
        this.heap.push(value);
        this.heapifyUp(this.heap.length - 1);
    }

    // Heapify up to maintain the heap property after insert
    heapifyUp(index) {
        let parentIndex = Math.floor((index - 1) / 2);
        while (index > 0 && this.heap[index] < this.heap[parentIndex]) {
            [this.heap[index], this.heap[parentIndex]] = [this.heap[parentIndex], this.heap[index]];
            index = parentIndex;
            parentIndex = Math.floor((index - 1) / 2);
        }
    }

    // Remove and return the root (smallest element) from the heap
    remove() {
        const root = this.heap[0];
        const end = this.heap.pop();
        if (this.heap.length > 0) {
            this.heap[0] = end;
            this.heapifyDown(0);
        }
        return root;
    }

    // Heapify down to maintain the heap property after removal
    heapifyDown(index) {
        let smallest = index;
        const leftChild = 2 * index + 1;
        const rightChild = 2 * index + 2;

        if (leftChild < this.heap.length && this.heap[leftChild] < this.heap[smallest]) {
            smallest = leftChild;
        }
        if (rightChild < this.heap.length && this.heap[rightChild] < this.heap[smallest]) {
            smallest = rightChild;
        }
        if (smallest !== index) {
            [this.heap[index], this.heap[smallest]] = [this.heap[smallest], this.heap[index]];
            this.heapifyDown(smallest);
        }
    }

    // Sort a nearly sorted array where each element is at most k positions away from its sorted position
    heapSortKSorted(arr, k) {
        let result = [];
        this.buildHeap(arr.slice(0, k + 1));  // Initialize the heap with first k+1 elements

        for (let i = k + 1; i < arr.length; i++) {
            result.push(this.remove());       // Remove the smallest element from the heap
            this.insert(arr[i]);              // Insert the next element from the array
        }

        // Extract remaining elements from the heap
        while (this.heap.length > 0) {
            result.push(this.remove());
        }

        return result;
    }

    // Build the heap from an array
    buildHeap(arr) {
        this.heap = arr;
        for (let i = Math.floor(this.heap.length / 2) - 1; i >= 0; i--) {
            this.heapifyDown(i);
        }
    }
}

// Test Workout 3: Sort a nearly sorted array
let nearlySortedArr = [3, 2, 6, 5, 4, 8];
let heapSort = new MinHeap();

let k = 2;  // Each element is at most 2 positions away from its sorted position
let sortedArr = heapSort.heapSortKSorted(nearlySortedArr, k);

console.log("Array sorted using Heap Sort (for k-sorted array):", sortedArr);
