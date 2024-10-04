// Workout 2: Detecting if a Graph is Connected
// In this workout, we check if all vertices in the graph are connected.

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

    // DFS to check if the graph is connected
    isConnected(start) {
        let visited = {};
        this.dfs(start, visited);
        return Object.keys(visited).length === Object.keys(this.adjacencyList).length;
    }

    dfs(vertex, visited) {
        if (!vertex) return;
        visited[vertex] = true;
        this.adjacencyList[vertex].forEach(neighbor => {
            if (!visited[neighbor]) {
                this.dfs(neighbor, visited);
            }
        });
    }
}

// Test Workout 2
let graph = new Graph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addEdge("A", "B");
graph.addEdge("A", "C");
console.log(graph.isConnected("A"));  // true
