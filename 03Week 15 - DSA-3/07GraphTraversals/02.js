// Workout 2: Depth-First Search (DFS) - Iterative
// This implementation of DFS uses an explicit stack to explore nodes in depth-first order.

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

    // Depth-First Search (DFS) - Iterative
    dfs(start) {
        let stack = [start]; // Initialize stack with the start vertex
        let visited = {}; // To keep track of visited vertices
        let result = []; // To store the order of visited vertices
        visited[start] = true; // Mark the start vertex as visited

        while (stack.length > 0) {
            let vertex = stack.pop(); // Remove the last vertex from the stack
            result.push(vertex); // Add it to the result list

            // Visit all unvisited neighbors
            this.adjacencyList[vertex].forEach(neighbor => {
                if (!visited[neighbor]) {
                    visited[neighbor] = true; // Mark neighbor as visited
                    stack.push(neighbor); // Push neighbor onto the stack
                }
            });
        }
        return result; // Return the order of visited vertices
    }
}

// Test Workout 2
let graph = new Graph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.addEdge("B", "D");
graph.addEdge("C", "D");

console.log(graph.dfs("A")); // Example output: ['A', 'C', 'D', 'B'] or ['A', 'B', 'D', 'C']
