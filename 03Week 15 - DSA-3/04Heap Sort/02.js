// Workout 2: Heap Sort in Descending Order Using Min-Heap

class MinHeap {
    constructor() {
        this.heap = [];
    }

    // Build a min-heap from an array of elements
    buildHeap(arr) {
        this.heap = arr;
        for (let i = Math.floor(this.heap.length / 2) - 1; i >= 0; i--) {
            this.heapifyDown(i);
        }
    }

    // Heapify down to maintain the min-heap property
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

    // Remove the minimum element (root)
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
            sorted.push(this.remove()); // Insert at the end for descending order
        }
        return sorted;
    }
}

// Test Workout 2
let arr = [7, 3, 1, 8, 5, 2, 6];
let heapSort = new MinHeap();
heapSort.buildHeap(arr);

console.log("Min-Heap built from array:", heapSort.heap);

let sortedArr = heapSort.heapSort();
console.log("Array sorted in descending order using Heap Sort:", sortedArr);
