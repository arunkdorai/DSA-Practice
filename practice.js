class MaxHeap {
    constructor() {
        this.heap = []
    }

    parent(index) {
        return Math.floor((index - 1) / 2)
    }

    left(index) {
        return 2 * index + 1
    }

    right(index) {
        return 2 * index + 2
    }

    swap(index1, index2) {
        [this.heap[index1], this.heap[index2]] = [this.heap[index2], this.heap[index1]]
    }

    insert(value) {
        this.heap.push(value)
        this.heapifyUp(this.heap.length - 1)
    }

    heapifyUp(index) {
        let parent = this.parent(index)
        while(index > 0 && this.heap[index] > this.heap[parent]) {
            this.swap(index, parent)
            index = parent
            parent = this.parent(index)
        }
    }

    remove() {
        if(this.heap.length === 0) return null
        if(this.heap.length === 1) return this.heap.pop()

        const root = this.heap[0]
        this.heap[0] = this.heap.pop()
        this.heapifyDown(0)
        return root
    }

    heapifyDown(index) {
        let left = this.left(index)
        let right = this.right(index)
        let largest = index

        if(left < this.heap.length && this.heap[left] > this.heap[largest]) {
            largest = left
        }
        if(right < this.heap.length && this.heap[right] > this.heap[largest]) {
            largest = right
        }
        if(largest !== index) {
            this.swap(index, largest)
            this.heapifyDown(largest)
        }
    }

    buildHeap(array) {
        this.heap = array
        for(let i = Math.floor(this.heap.length / 2) - 1; i >= 0; i--) {
            this.heapifyDown(i)
        }
    }

    heapSort() {
        let sorted = []
        while(this.heap.length > 0) {
            sorted.unshift(this.remove())
        }
        return sorted
    }
}

const hsort = new MaxHeap()

let arr = [7, 3, 1, 8, 5, 2, 6];

hsort.buildHeap(arr)

console.log("Max-Heap built from array:", hsort.heap);

let sortedArr = hsort.heapSort();
console.log("Array sorted in ascending order using Heap Sort:", sortedArr)