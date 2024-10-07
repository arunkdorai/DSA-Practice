/* Graph Display and HasEdge

How to implement two helper methods for the graph data structure in JavaScript: one to display the adjacency list and another to check if an edge exists between two vertices.

### Helper Methods for Graph Class

#### 1. Display Method
- **Purpose**: To print the adjacency list of the graph, showing each vertex and its adjacent vertices.
- **Method Name**: `display()`
- **Implementation Steps**:
  1. Use a `for...in` loop to iterate over each vertex in the adjacency list.
  2. For each vertex, log the vertex followed by its adjacent vertices.
  3. Use the spread operator to convert the set of adjacent vertices into an array for easy logging.

**Code Implementation**:
```javascript
display() {
    for (let vertex in this.adjacencyList) {
        console.log(`${vertex} -> [${[...this.adjacencyList[vertex]]}]`);
    }
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

graph.display();
// Output:
// A -> [B]
// B -> [A, C]
// C -> [B]
```

### 2. Has Edge Method
- **Purpose**: To check if there is an edge (connection) between two given vertices.
- **Method Name**: `hasEdge(vertex1, vertex2)`
- **Implementation Steps**:
  1. Use the `has` method of the Set data structure to check if `vertex2` exists in the adjacency list of `vertex1`.
  2. Also check if `vertex1` exists in the adjacency list of `vertex2` (for undirected graphs).
  3. Return `true` if both conditions are met, otherwise return `false`.

**Code Implementation**:
```javascript
hasEdge(vertex1, vertex2) {
    return this.adjacencyList[vertex1]?.has(vertex2) && this.adjacencyList[vertex2]?.has(vertex1);
}
```

**Example Usage**:
```javascript
console.log(graph.hasEdge('A', 'B')); // Output: true
console.log(graph.hasEdge('A', 'C')); // Output: false
```

### Summary
- The `display()` method provides a clear visualization of the graph’s structure by showing each vertex and its connections.
- The `hasEdge()` method allows you to easily check if there is a connection between two vertices, confirming the graph's undirected nature by checking both directions.
- With these methods, you can effectively manage and interact with the graph data structure, enhancing its usability.

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

    display() {
        for (let vertex in this.adjacencyList) {
            console.log(`${vertex} -> [${[...this.adjacencyList[vertex]]}]`);
        }
    }

    hasEdge(vertex1, vertex2) {
        return this.adjacencyList[vertex1]?.has(vertex2) && this.adjacencyList[vertex2]?.has(vertex1);
    }
}

// Usage
const graph = new Graph();
graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addEdge('A', 'B');
graph.addEdge('B', 'C');

graph.display(); // Shows the adjacency list
console.log(graph.hasEdge('A', 'B')); // true
console.log(graph.hasEdge('A', 'C')); // false
```

### Next Steps
- In the following video, you'll implement methods to remove an edge and remove a vertex from the graph, enhancing the graph's functionality even further!

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