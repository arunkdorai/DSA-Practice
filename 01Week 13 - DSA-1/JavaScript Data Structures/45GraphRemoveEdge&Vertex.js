/* Graph Remove Edge and Vertex

How to implement methods to delete an edge and a vertex from a graph:

### Methods to Remove Edge and Vertex from Graph

#### 1. Remove Edge Method
- **Purpose**: To delete an edge (connection) between two vertices.
- **Method Name**: `removeEdge(vertex1, vertex2)`
- **Implementation Steps**:
  1. Use the `delete` method on the Set data structure to remove `vertex2` from the adjacency list of `vertex1`.
  2. Similarly, remove `vertex1` from the adjacency list of `vertex2` to maintain the undirected nature of the graph.

**Code Implementation**:
```javascript
removeEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1]?.delete(vertex2);
    this.adjacencyList[vertex2]?.delete(vertex1);
}
```

**Example Usage**:
```javascript
const graph = new Graph();
graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addEdge('A', 'B');
graph.addEdge('B', 'C');

// Remove edge between A and B
graph.removeEdge('A', 'B');
graph.display();
// Output:
// A -> []
// B -> [C]
// C -> [B]
```

### 2. Remove Vertex Method
- **Purpose**: To delete a vertex and all its associated edges from the graph.
- **Method Name**: `removeVertex(vertex)`
- **Implementation Steps**:
  1. Check if the vertex exists in the adjacency list. If not, return from the method.
  2. Iterate over all adjacent vertices of the vertex to remove edges using the `removeEdge` method.
  3. After removing all edges, delete the vertex from the adjacency list.

**Code Implementation**:
```javascript
removeVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
        return; // Vertex does not exist
    }

    // Remove edges with all adjacent vertices
    for (let adjacentVertex of this.adjacencyList[vertex]) {
        this.removeEdge(vertex, adjacentVertex);
    }

    // Finally, remove the vertex itself
    delete this.adjacencyList[vertex];
}
```

**Example Usage**:
```javascript
const graph = new Graph();
graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addEdge('A', 'B');
graph.addEdge('B', 'C');

// Remove vertex B
graph.removeVertex('B');
graph.display();
// Output:
// A -> []
// C -> []
```

### Summary
- The `removeEdge()` method allows you to delete the connection between two vertices, ensuring that the graph structure remains valid.
- The `removeVertex()` method effectively removes a vertex and all associated edges, maintaining the integrity of the graph.
- After implementing these methods, the graph is capable of dynamic changes, allowing for the removal of vertices and edges as needed.

### Complete Example
Here’s how both methods can be integrated into the `Graph` class:

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

    removeEdge(vertex1, vertex2) {
        this.adjacencyList[vertex1]?.delete(vertex2);
        this.adjacencyList[vertex2]?.delete(vertex1);
    }

    removeVertex(vertex) {
        if (!this.adjacencyList[vertex]) {
            return; // Vertex does not exist
        }

        // Remove edges with all adjacent vertices
        for (let adjacentVertex of this.adjacencyList[vertex]) {
            this.removeEdge(vertex, adjacentVertex);
        }

        // Finally, remove the vertex itself
        delete this.adjacencyList[vertex];
    }

    display() {
        for (let vertex in this.adjacencyList) {
            console.log(`${vertex} -> [${[...this.adjacencyList[vertex]]}]`);
        }
    }
}

// Usage
const graph = new Graph();
graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addEdge('A', 'B');
graph.addEdge('B', 'C');

graph.display(); // Show current state
graph.removeEdge('A', 'B');
graph.display(); // Show state after edge removal
graph.removeVertex('B');
graph.display(); // Show state after vertex removal
```

### Next Steps
- With all the methods implemented, your graph data structure is now complete and functional! The next video will suggest possible extensions or applications for your newly created graph structure.

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
        if(!this.adjacencyList[vertex1]) {
            this.addVertex(vertex2)
        }
        this.adjacencyList[vertex1].add(vertex2)
        this.adjacencyList[vertex2].add(vertex1)
    }

    hasEdge(vertex1, vertex2) {
        return (
            this.adjacencyList[vertex1].has(vertex2) &&
            this.adjacencyList[vertex2].has(vertex1)
        )
    }

    removeEdge(vertex1, vertex2) {
        this.adjacencyList[vertex1].delete(vertex2)
        this.adjacencyList[vertex2].delete(vertex1)
    }

    removeVertex(vertex) {
        if(!this.adjacencyList[vertex]) {
            return
        }
        for(let adjacentVertex of this.adjacencyList[vertex]) {
            this.removeEdge(vertex, adjacentVertex)
        }
        delete this.adjacencyList[vertex]
    }

    display() {
        for(let vertex in this.adjacencyList) {
            console.log(vertex + " -> " + [...this.adjacencyList[vertex]])
        }
    }
}

const graph = new Graph()
graph.addVertex("A")
graph.addVertex("B")
graph.addVertex("C")

graph.addEdge("A", "B")
graph.addEdge("B", "C")

graph.display()

console.log(graph.hasEdge("A", "B"))
console.log(graph.hasEdge("A", "C"))

// graph.removeEdge("A", "B")
// graph.display()

graph.removeVertex("B")
graph.display()