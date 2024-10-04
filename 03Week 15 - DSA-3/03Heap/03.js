// Workout 3: Heap Sort using Max-Heap

class MaxHeap {
    constructor() {
        this.heap = [];
    }

    // Build a heap from an array of elements
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
            sorted.push(this.remove());
        }
        return sorted;
    }
}

// Test Workout 3
let arr = [3, 9, 2, 1, 4, 5];
let heapSort = new MaxHeap();
heapSort.buildHeap(arr);

console.log("Max-Heap built from array:", heapSort.heap);

let sortedArr = heapSort.heapSort();
console.log("Array after Heap Sort (descending order):", sortedArr);
