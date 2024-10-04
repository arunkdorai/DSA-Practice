// Workout 1: Create a Min-Heap with Build, Insert, and Remove Functions

class MinHeap {
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

    // Remove the minimum element (root)
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

    // Heapify up to maintain the min-heap property
    heapifyUp(index) {
        let parentIndex = Math.floor((index - 1) / 2);
        while (index > 0 && this.heap[index] < this.heap[parentIndex]) {
            [this.heap[index], this.heap[parentIndex]] = [this.heap[parentIndex], this.heap[index]];
            index = parentIndex;
            parentIndex = Math.floor((index - 1) / 2);
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

    // Get the current heap
    getHeap() {
        return this.heap;
    }
}

// Test Workout 1
let minHeap = new MinHeap();
minHeap.buildHeap([3, 9, 2, 1, 4, 5]);

console.log("Min-Heap after building:", minHeap.getHeap());

minHeap.insert(0);
console.log("Min-Heap after insertion:", minHeap.getHeap());

minHeap.remove();
console.log("Min-Heap after removing the root:", minHeap.getHeap());
