class MaxHeap {
    constructor() {
        this.heap = []
    }

    parentIndex(index) {
        return Math.floor((index - 1) / 2)
    }

    leftChildIndex(index) {
        return 2 * index + 1
    }

    rightChildIndex(index) {
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
        let parent = this.parentIndex(index)
        while(index > 0 && this.heap[index] > this.heap[parent]) {
            this.swap(index, parent)
            index = parent
            parent = this.parentIndex(index)
        }
    }

    remove() {
        if(this.heap.length === 0) return null
        if(this.heap.length === 1) return this.heap.pop()

        let root = this.heap[0]
        this.heap[0] = this.heap.pop()
        this.heapifyDown(0)
        return root
    }

    heapifyDown(index) {
        let left = this.leftChildIndex(index)
        let right = this.rightChildIndex(index)
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

    getHeap() {
        return this.heap
    }
}

const maxHeap = new MaxHeap()

maxHeap.insert(50)
maxHeap.insert(43)
maxHeap.insert(21)
maxHeap.insert(4)
maxHeap.insert(56)
maxHeap.insert(36)

console.log(maxHeap.getHeap())

maxHeap.remove()

console.log(maxHeap.getHeap())

maxHeap.buildHeap([100, 130, 44, 53, 23, 47, 64])


console.log(maxHeap.getHeap())