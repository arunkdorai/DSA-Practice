/* Graph Overview:

### What is a Graph?
- **Definition**: A graph is a nonlinear data structure consisting of a finite number of vertices (nodes) connected by edges (lines).
- **Comparison with Trees**: Trees are a specific type of graph, typically hierarchical and top-down, while graphs have no specific hierarchy.

### Types of Graphs
1. **Directed Graphs (Digraphs)**:
   - **Definition**: A graph where edges have a direction.
   - **Representation**: Edges are shown as arrows pointing from one node to another.
   - **Traversal**: You can only move in the direction of the arrows.
   - **Example**: If you have nodes A, B, and C with edges A → B and B → C, you can traverse A → B → C, but not C → B → A.

2. **Undirected Graphs**:
   - **Definition**: A graph where edges do not have a direction.
   - **Representation**: Edges are shown as simple lines without arrows.
   - **Traversal**: You can move in either direction along the edges.
   - **Example**: If you have nodes A, B, and C with edges A — B and B — C, you can traverse A → B → C or C → B → A.

### Graph Characteristics
- **Vertices Without Edges**: A graph can have nodes that are not connected.
- **Multiple Edges**: A single node can have multiple edges connecting it to other nodes.
- **Cycles**: A path where you can return to the starting node.
- **Self Loops**: An edge that connects a node to itself.
- **Disconnected Graph**: Parts of the graph that are not connected to each other.
- **Weighted Edges**: Edges can have weights representing the cost to traverse them.

### Real-World Applications
- **Navigation Systems**: Google Maps uses graphs to represent cities (vertices) and roads (edges) for navigation.
- **Social Networks**: Platforms like Facebook and LinkedIn use graphs to show user connections (vertices) and relationships (edges).

### Example of Graph Representation in Code
Here’s a simple example of how to represent an undirected graph in JavaScript:

```javascript
class Graph {
    constructor() {
        this.adjacencyList = {};
    }

    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) {
            this.adjacencyList[vertex] = [];
        }
    }

    addEdge(vertex1, vertex2) {
        this.adjacencyList[vertex1].push(vertex2);
        this.adjacencyList[vertex2].push(vertex1); // Undirected edge
    }

    getVertices() {
        return Object.keys(this.adjacencyList);
    }

    getEdges(vertex) {
        return this.adjacencyList[vertex];
    }
}

// Example Usage
const graph = new Graph();
graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addEdge('A', 'B');
graph.addEdge('B', 'C');

console.log(graph.getVertices()); // Output: ['A', 'B', 'C']
console.log(graph.getEdges('B'));  // Output: ['A', 'C']
```

### Summary
- Graphs are versatile data structures used in various applications, from navigation to social networking.
- They can be directed or undirected, and they have various characteristics that make them suitable for different use cases.
- Understanding how to implement and manipulate graphs in code is essential for leveraging their potential in programming.

*/