/* Concepts of Heap

Definition:
A heap is a special type of binary tree used for implementing priority queues. It satisfies the heap property:

Heap is a special tree-based data structure that satisfies the heap property:

Min-Heap: The value of the parent node is always less than or equal to the values of its children. ( or The value of each node is greater than or equal to the value of its parent. The smallest element is at the root.)

Max-Heap: The value of the parent node is always greater than or equal to the values of its children. ( or The value of each node is less than or equal to the value of its parent. The largest element is at the root.)

Heaps are typically represented as complete binary trees, where all levels are fully filled except possibly for the last level, which is filled from left to right.

Properties of Heaps:

The root node (first element) is either the minimum (in a min-heap) or maximum (in a max-heap).
Insertion and removal of elements in a heap follow strict rules to maintain the heap property.
Heaps are often implemented using arrays for efficient storage and access.

Operations on Heaps:

Insert: Add a new element while maintaining the heap property. This is done by placing the new element at the end and "bubbling up" if necessary.
Remove: Remove the root element (minimum in a min-heap, maximum in a max-heap), replace it with the last element, and "bubble down" to restore the heap property.
Build: Given an unsorted array, build a valid heap in an efficient manner using heapify.

Heapify:
A process to rearrange a binary tree (or array) to maintain the heap property. This can be done bottom-up to ensure efficiency.

Applications of Heaps:
Heaps are widely used in algorithms like Heap Sort, for implementing priority queues, and for finding the k-th largest/smallest element in a collection.



*/