// Workout 3: Depth-First Search (DFS) - Recursive
// In this implementation, we use recursion to perform a depth-first search.

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

    // Depth-First Search (DFS) - Recursive
    dfsRecursive(start, visited = {}, result = []) {
        visited[start] = true; // Mark the start vertex as visited
        result.push(start); // Add it to the result list

        // Visit all unvisited neighbors recursively
        this.adjacencyList[start].forEach(neighbor => {
            if (!visited[neighbor]) {
                this.dfsRecursive(neighbor, visited, result); // Recursive call
            }
        });
        return result; // Return the order of visited vertices
    }
}

// Test Workout 3
let graph = new Graph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.addEdge("B", "D");
graph.addEdge("C", "D");

console.log(graph.dfsRecursive("A")); // Example output: ['A', 'B', 'D', 'C'] or ['A', 'C', 'D', 'B']
