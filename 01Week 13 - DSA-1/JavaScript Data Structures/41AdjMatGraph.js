/* How to represent a graph using an adjacency matrix, broken down into key points:

### What is an Adjacency Matrix?
- **Definition**: An adjacency matrix is a 2D array (matrix) that represents a graph, where each cell indicates whether pairs of vertices are connected by an edge.
- **Size**: The matrix is of size \( V \times V \), where \( V \) is the number of vertices in the graph.
- **Rows and Columns**: Each row and each column correspond to a vertex in the graph.

### How it Works
- **Connection Representation**:
  - If the matrix element at position \( \text{Matrix}[i][j] \) is **1**, it indicates that there is an edge connecting vertex \( i \) to vertex \( j \).
  - If the element is **0**, it means there is no edge between the two vertices.

### Example Graph
Consider a simple undirected graph with three vertices: A, B, and C. The connections are:
- A is connected to B
- B is connected to A (since it’s undirected)
- B is connected to C
- C is connected to B
- A is not connected to C
- No self-loops (A does not connect to A, B does not connect to B, and C does not connect to C)

### Adjacency Matrix Representation
For the graph described above, the adjacency matrix looks like this:

|   | A | B | C |
|---|---|---|---|
| A | 0 | 1 | 0 |
| B | 1 | 0 | 1 |
| C | 0 | 1 | 0 |

### Explanation of the Matrix
- **Row A**:
  - **Matrix[0][0]**: 0 (A is not connected to A)
  - **Matrix[0][1]**: 1 (A is connected to B)
  - **Matrix[0][2]**: 0 (A is not connected to C)
  
- **Row B**:
  - **Matrix[1][0]**: 1 (B is connected to A)
  - **Matrix[1][1]**: 0 (B is not connected to itself)
  - **Matrix[1][2]**: 1 (B is connected to C)
  
- **Row C**:
  - **Matrix[2][0]**: 0 (C is not connected to A)
  - **Matrix[2][1]**: 1 (C is connected to B)
  - **Matrix[2][2]**: 0 (C is not connected to itself)

### Implementing the Adjacency Matrix in JavaScript
Here’s how you can represent the adjacency matrix in JavaScript:

```javascript
const matrix = [
    // A   B   C
    [0,  1,  0], // A
    [1,  0,  1], // B
    [0,  1,  0]  // C
];

// Example of checking connections
console.log(matrix[0][1]); // Output: 1 (A is connected to B)
console.log(matrix[1][2]); // Output: 1 (B is connected to C)
console.log(matrix[0][0]); // Output: 0 (A does not connect to itself)
```

### Key Points
- **Storage**: An adjacency matrix uses more space, especially for sparse graphs (graphs with fewer edges), since it always requires \( V^2 \) space.
- **Access**: Checking if two vertices are connected is fast (O(1)), but adding edges can be less efficient than other methods, especially for large graphs.

### Summary
- An adjacency matrix is a straightforward way to represent a graph using a 2D array.
- It clearly indicates whether vertices are connected, but may use more space than necessary for sparse graphs.
- In the next video, you will learn about the adjacency list representation, which can be more efficient in certain scenarios.

*/