// Workout 3: Finding the Degree of a Vertex
// In this workout, we find the degree of a given vertex (i.e., the number of edges connected to it).

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
        this.adjacencyList[vertex2].push(vertex1);
    }

    // Find the degree of a vertex
    degree(vertex) {
        return this.adjacencyList[vertex] ? this.adjacencyList[vertex].length : 0;
    }
}

// Test Workout 3
let graph = new Graph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addEdge("A", "B");
graph.addEdge("A", "C");
console.log(graph.degree("A"));  // 2
console.log(graph.degree("B"));  // 1
