// Workout 2: Create a Max-Heap with Build, Insert, and Remove Functions

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

    // Insert an element into the heap
    insert(value) {
        this.heap.push(value);
        this.heapifyUp(this.heap.length - 1);
    }

    // Remove the maximum element (root)
    remove() {
        if (this.heap.length === 0) return null;
        const root = this.heap[0];
        const end = this.heap.pop();
        if (this.heap.length > 0) {
            this.heap[0] = end;
            this.heapifyDown(0);
        }
        return root;
    }

    // Heapify up to maintain the max-heap property
    heapifyUp(index) {
        let parentIndex = Math.floor((index - 1) / 2);
        while (index > 0 && this.heap[index] > this.heap[parentIndex]) {
            [this.heap[index], this.heap[parentIndex]] = [this.heap[parentIndex], this.heap[index]];
            index = parentIndex;
            parentIndex = Math.floor((index - 1) / 2);
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

    // Get the current heap
    getHeap() {
        return this.heap;
    }
}

// Test Workout 2
let maxHeap = new MaxHeap();
maxHeap.buildHeap([3, 9, 2, 1, 4, 5]);

console.log("Max-Heap after building:", maxHeap.getHeap());

maxHeap.insert(10);
console.log("Max-Heap after insertion:", maxHeap.getHeap());

maxHeap.remove();
console.log("Max-Heap after removing the root:", maxHeap.getHeap());
