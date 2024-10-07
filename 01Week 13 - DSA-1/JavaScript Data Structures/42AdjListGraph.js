/* Adjacency list representation of a graph, broken down into key points:

### What is an Adjacency List?
- **Definition**: An adjacency list is a collection of lists or arrays that represent a graph. Each vertex maps to a list of its adjacent vertices.
- **Data Structure**: Typically implemented using a map-like structure (like an object in JavaScript) where:
  - Each key is a vertex.
  - Each value is an array of adjacent vertices.

### Example Graph
Consider a simple undirected graph with three vertices: A, B, and C. The connections are:
- A is connected to B
- B is connected to A and C
- C is connected to B

### Adjacency List Representation
For the graph described above, the adjacency list can be represented as follows:

```javascript
const adjacencyList = {
    A: ['B'],      // A is connected to B
    B: ['A', 'C'], // B is connected to A and C
    C: ['B']       // C is connected to B
};
```

### Explanation of the Adjacency List
- **Vertex A**:
  - Adjacency list: `['B']` (A connects to B)
  
- **Vertex B**:
  - Adjacency list: `['A', 'C']` (B connects to A and C)
  
- **Vertex C**:
  - Adjacency list: `['B']` (C connects to B)

### Accessing the Adjacency List
You can easily access the list of nodes connected to each vertex:

```javascript
console.log(adjacencyList['A']); // Output: ['B']
console.log(adjacencyList['B']); // Output: ['A', 'C']
console.log(adjacencyList['C']); // Output: ['B']
```

### Pros and Cons of Adjacency List vs. Adjacency Matrix
1. **Space Efficiency**:
   - **Adjacency List**: Stores only the edges that exist, making it more space-efficient, especially for sparse graphs.
   - **Adjacency Matrix**: Stores values for all possible edges (including non-existent ones), which can waste space.

2. **Time Complexity for Operations**:
   - **Adjacency List**:
     - Inserting and finding adjacent nodes is typically O(1) (constant time).
   - **Adjacency Matrix**:
     - Finding adjacent nodes can take O(V) time (linear time), where V is the number of vertices.

3. **Additional Information**:
   - **Adjacency List**: Can easily store additional information about edges (like weights) within the lists.
   - **Adjacency Matrix**: Would require an external structure to hold additional edge information.

### Conclusion
- The adjacency list is a flexible and efficient way to represent graphs, particularly for sparse graphs.
- In the next video, you will learn how to implement an undirected graph data structure in JavaScript using the adjacency list representation.

### Summary
- An adjacency list maps each vertex to its adjacent vertices, making it efficient in terms of storage and operations.
- Understanding this representation is crucial for graph algorithms and applications.

*/