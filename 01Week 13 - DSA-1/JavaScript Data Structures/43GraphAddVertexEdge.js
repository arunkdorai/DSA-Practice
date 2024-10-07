/* Graph Add Vertex and Edge

How to implement a graph data structure in JavaScript, specifically focusing on creating a graph class with methods to add vertices and edges.

### Graph Class Implementation

#### Step 1: Create the Graph Class
- **Define the Class**: Create a class named `Graph`.
- **Constructor**: Inside the class, initialize an adjacency list as an empty object.
  
  ```javascript
  class Graph {
      constructor() {
          this.adjacencyList = {}; // Initialize an empty adjacency list
      }
  }
  ```

#### Step 2: Add Vertex Method
- **Method Name**: `addVertex(vertex)`
- **Purpose**: To add a new vertex to the graph.
- **Steps**:
  1. Check if the vertex already exists in the adjacency list.
  2. If it doesn't exist, add it as a key in the adjacency list with an empty set as its value (to store adjacent vertices).
  
  ```javascript
  addVertex(vertex) {
      if (!this.adjacencyList[vertex]) {
          this.adjacencyList[vertex] = new Set(); // Create a new entry with an empty set
      }
  }
  ```

#### Step 3: Instantiate the Graph and Add Vertices
- **Creating an Instance**: You can now create an instance of the graph and add vertices.
  
  ```javascript
  const graph = new Graph();
  graph.addVertex('A');
  graph.addVertex('B');
  graph.addVertex('C');
  ```

#### Step 4: Add Edge Method
- **Method Name**: `addEdge(vertex1, vertex2)`
- **Purpose**: To create a connection (edge) between two vertices.
- **Steps**:
  1. Check if both vertices exist in the graph.
  2. If either vertex does not exist, add it using the `addVertex` method.
  3. Add each vertex to the other's adjacency list to represent an undirected edge.
  
  ```javascript
  addEdge(vertex1, vertex2) {
      // Check and add vertex1 if it doesn't exist
      if (!this.adjacencyList[vertex1]) {
          this.addVertex(vertex1);
      }
      // Check and add vertex2 if it doesn't exist
      if (!this.adjacencyList[vertex2]) {
          this.addVertex(vertex2);
      }
      // Add vertex2 to the adjacency list of vertex1
      this.adjacencyList[vertex1].add(vertex2);
      // Add vertex1 to the adjacency list of vertex2 (undirected graph)
      this.adjacencyList[vertex2].add(vertex1);
  }
  ```

#### Step 5: Using the Add Edge Method
- **Adding Edges**: You can now create edges between the vertices.
  
  ```javascript
  graph.addEdge('A', 'B');
  graph.addEdge('B', 'C');
  ```
  
- **Result**: This creates edges:
  - From A to B
  - From B to A
  - From B to C
  - From C to B

### Example Code

Here’s the complete example of the Graph class:

```javascript
class Graph {
    constructor() {
        this.adjacencyList = {};
    }

    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) {
            this.adjacencyList[vertex] = new Set();
        }
    }

    addEdge(vertex1, vertex2) {
        if (!this.adjacencyList[vertex1]) {
            this.addVertex(vertex1);
        }
        if (!this.adjacencyList[vertex2]) {
            this.addVertex(vertex2);
        }
        this.adjacencyList[vertex1].add(vertex2);
        this.adjacencyList[vertex2].add(vertex1);
    }
}

// Usage
const graph = new Graph();
graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addEdge('A', 'B');
graph.addEdge('B', 'C');

console.log(graph.adjacencyList);
```

### Summary
- You created a `Graph` class with methods to add vertices and edges.
- The adjacency list is represented using an object, where each vertex maps to a set of adjacent vertices.
- This implementation allows you to easily manage and visualize connections in an undirected graph. In the next step, you can add methods to visualize the adjacency list or perform graph algorithms!

*/

class Graph {
    constructor() {
        this.adjacencyList = {}
    }

    addVertex(vertex) {
        if(!this.adjacencyList[vertex]) {
            this.adjacencyList[vertex] = new Set()
        }
    }

    addEdge(vertex1, vertex2) {
        if(!this.adjacencyList[vertex1]) {
            this.addVertex(vertex1)
        }
        if(!this.adjacencyList[vertex2]) {
            this.addVertex(vertex2)
        }
        this.adjacencyList[vertex1].add(vertex2)
        this.adjacencyList[vertex2].add(vertex1)
    }
}

const graph = new Graph()
graph.addVertex("A")
graph.addVertex("B")
graph.addVertex("C")

graph.addEdge("A", "B")
graph.addEdge("B", "C")