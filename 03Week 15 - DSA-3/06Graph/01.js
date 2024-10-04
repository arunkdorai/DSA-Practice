// Workout 1: Graph Representation using Adjacency List
// In this workout, we'll represent a graph using an adjacency list.

class Graph {
    constructor() {
        this.adjacencyList = {};
    }

    // Add a vertex
    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) {
            this.adjacencyList[vertex] = [];
        }
    }

    // Add an edge (undirected graph)
    addEdge(vertex1, vertex2) {
        this.adjacencyList[vertex1].push(vertex2);
        this.adjacencyList[vertex2].push(vertex1);
    }

    // Display the graph
    display() {
        for (let vertex in this.adjacencyList) {
            console.log(`${vertex} -> ${this.adjacencyList[vertex].join(", ")}`);
        }
    }
}

// Test Workout 1
let graph = new Graph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.addEdge("B", "C");
graph.display();
