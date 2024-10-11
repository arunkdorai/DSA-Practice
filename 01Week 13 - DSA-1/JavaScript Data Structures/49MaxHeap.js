/* Max-Heap: The value of the parent node is always greater than or equal to the values of its children. ( or The value of each node is less than or equal to the value of its parent. The largest element is at the root.)

Mapping the elements of a heap into an array is trivial: if a node is stored at index k, then its left child is stored at index 2k + 1 and its right child at index 2k + 2.

How is Max Heap represented? 
A-Max Heap is a Complete Binary Tree. A-Max heap is typically represented as an array. The root element will be at Arr[0]. Below table shows indexes of other nodes for the ith node, i.e., Arr[i]: 


Arr[(i-1)/2] Returns the parent node. 
Arr[(2*i)+1] Returns the left child node. 
Arr[(2*i)+2] Returns the right child node.

Operations of Heap Data Structure:

Heapify: a process of creating a heap from an array.
Insertion: process to insert an element in existing heap time complexity O(log N).
Deletion: deleting the top element of the heap or the highest priority element, and then organizing the heap and returning the element with time complexity O(log N).
Peek: to check or find the most prior element in the heap, (max or min element for max and min heap).

Explanation: Now let us understand how the various helper methods maintain the order of the heap

The helper methods like rightChild, leftChild, parent  help us to get the element and its children at the specified index.
The add() and remove() methods handle the insertion and deletion process
The heapifyDown() method maintains the heap structure when an element is deleted.
The heapifyUp() method maintains the heap structure when an element is added to the heap. 
The peek() method returns the root element of the heap and swap() method interchanges value at two nodes.
 
*/


class MaxHeap {
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
      while (index > 0 && this.heap[index] > this.heap[parent]) {
        this.swap(index, parent);
        index = parent;
        parent = this.parentIndex(index);
      }
    }
  
    // Remove the root (maximum element)
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
      let largest = index;
  
      if (left < this.heap.length && this.heap[left] > this.heap[largest]) {
        largest = left;
      }
      if (right < this.heap.length && this.heap[right] > this.heap[largest]) {
        largest = right;
      }
      if (largest !== index) {
        this.swap(index, largest);
        this.heapifyDown(largest);
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
  

// Test Workout 2
const maxHeap = new MaxHeap();

maxHeap.buildHeap([3, 9, 2, 1, 4, 5]);

console.log("Max-Heap after building:", maxHeap.getHeap());

maxHeap.insert(10);
console.log("Max-Heap after insertion:", maxHeap.getHeap());

maxHeap.remove();
console.log("Max-Heap after removing the root:", maxHeap.getHeap());
