/* Min-Heap: The value of the parent node is always less than or equal to the values of its children. ( or The value of each node is greater than or equal to the value of its parent. The smallest element is at the root.)

Mapping the elements of a heap into an array is trivial: if a node is stored an index k, then its left child is stored at index 2k + 1 and its right child at index 2k + 2.

How is Min Heap represented? 
Let us go through the representation of Min heap. So basically Min Heap is a complete binary tree. A Min heap is typically represented as an array. The root element will be at Arr[0]. For any ith node, i.e., Arr[i] 


Arr[(i -1) / 2] returns its parent node.
Arr[(2 * i) + 1] returns its left child node.
Arr[(2 * i) + 2] returns its right child node.

Operations of Heap Data Structure:

Heapify: a process of creating a heap from an array.
Insertion: process to insert an element in existing heap time complexity O(log N).
Deletion: deleting the top element of the heap or the highest priority element, and then organizing the heap and returning the element with time complexity O(log N).
Peek: to check or find the most prior element in the heap, (max or min element for max and min heap).
Explanation: Now let us understand how the various helper methods maintain the order of the heap

The helper methods like rightChild, leftChild, and parent help us to get the element and its children at the specified index.
The add() and remove() methods handle the insertion and deletion process
The heapifyDown() method maintains the heap structure when an element is deleted.
The heapifyUp() method maintains the heap structure when an element is added to the heap. 
The peek() method returns the root element of the heap and swap() method interchanges value at two nodes.

*/


class MinHeap {
    constructor() {
      this.heap = [];
    }
  
    // Helper methods
    parentIndex(index) {
      return Math.floor((index - 1) / 2);
    }
  
    leftChildIndex(index) {
      return 2 * index + 1;
    }
  
    rightChildIndex(index) {
      return 2 * index + 2;
    }
  
    swap(index1, index2) {
      [this.heap[index1], this.heap[index2]] = [this.heap[index2], this.heap[index1]];
    }
  
    // Insert an element into the heap
    insert(value) {
      this.heap.push(value);
      this.heapifyUp(this.heap.length - 1);
    }
  
    // Heapify up to maintain heap property after insertion
    heapifyUp(index) {
      let parent = this.parentIndex(index);
      while (index > 0 && this.heap[index] < this.heap[parent]) {
        this.swap(index, parent);
        index = parent;
        parent = this.parentIndex(index);
      }
    }
  
    // Remove the root (minimum element)
    remove() {
      if (this.heap.length === 0) return null;
      if (this.heap.length === 1) return this.heap.pop();
  
      const root = this.heap[0];
      this.heap[0] = this.heap.pop();
      this.heapifyDown(0);
      return root;
    }
  
    // Heapify down to maintain heap property after removal
    heapifyDown(index) {
      let left = this.leftChildIndex(index);
      let right = this.rightChildIndex(index);
      let smallest = index;
  
      if (left < this.heap.length && this.heap[left] < this.heap[smallest]) {
        smallest = left;
      }
      if (right < this.heap.length && this.heap[right] < this.heap[smallest]) {
        smallest = right;
      }
      if (smallest !== index) {
        this.swap(index, smallest);
        this.heapifyDown(smallest);
      }
    }
  
    // Build a heap from an array
    buildHeap(array) {
      this.heap = array;
      for (let i = Math.floor(this.heap.length / 2) - 1; i >= 0; i--) {
        this.heapifyDown(i);
      }
    }
  
    // Get the heap as an array
    getHeap() {
      return this.heap;
    }
  }
  
  const minHeap = new MinHeap();
  
  // Insert values into the heap
  minHeap.insert(10);
  minHeap.insert(5);
  minHeap.insert(20);
  minHeap.insert(3);
  minHeap.insert(8);
  
  console.log("Heap after insertions:", minHeap.getHeap()); // Should print the heap structure
  
  // Remove the minimum element (root)
  console.log("Removed element:", minHeap.remove()); // Should remove the minimum (3)
  console.log("Heap after removal:", minHeap.getHeap()); // Should print the heap structure
  
  // Build a heap from an array
  minHeap.buildHeap([15, 5, 20, 1, 17, 10]);
  console.log("Heap after building from array:", minHeap.getHeap()); // Should print the heap structure
  