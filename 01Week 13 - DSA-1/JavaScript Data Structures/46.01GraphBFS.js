/*  BFS in Graph

    // Breadth-First Search (BFS)
    bfs(start) {
        let queue = [start];
        let visited = {};
        visited[start] = true;
        let result = [];

        while (queue.length > 0) {
            let vertex = queue.shift();
            result.push(vertex);

            this.adjacencyList[vertex].forEach(neighbor => {
                if (!visited[neighbor]) {
                    visited[neighbor] = true;
                    queue.push(neighbor);
                }
            });
        }
        return result;
    }

The provided code implements the **Breadth-First Search (BFS)** algorithm, which is a traversal technique used to explore the vertices of a graph or tree level by level. In BFS, we start at a given vertex, visit all its neighbors, then visit the neighbors of those neighbors, and so on, ensuring that vertices closer to the starting vertex are visited before those further away.

Let's break down the code:

### 1. **`bfs(start)` Method**:
This method performs a BFS traversal starting from the `start` vertex. It traverses the graph by exploring the nearest vertices (in terms of edge count) before moving on to more distant vertices.

#### Parameters:
- `start`: This is the starting vertex from where the BFS traversal will begin.

#### Variables:
- **`queue = [start];`**:
  - The `queue` is initialized with the `start` vertex. The queue is used to keep track of vertices that need to be explored. BFS uses a queue to explore vertices in a **first-in, first-out (FIFO)** manner, ensuring that the vertices are explored level by level.
  
- **`visited = {};`**:
  - This object is used to keep track of the vertices that have been visited. This prevents revisiting the same vertex, which could lead to infinite loops in the case of cyclic graphs.

- **`visited[start] = true;`**:
  - The `start` vertex is marked as visited by setting `visited[start] = true`.

- **`result = [];`**:
  - This array stores the order in which vertices are visited during the BFS traversal.

### 2. **`while (queue.length > 0)` Loop**:
The loop continues running as long as there are vertices in the `queue` to explore. Here's what happens inside the loop:

#### Step-by-step Breakdown:
- **`let vertex = queue.shift();`**:
  - The `shift()` method removes the first vertex from the queue and stores it in the variable `vertex`. This ensures that the next vertex to be explored is the one that was added to the queue first (FIFO behavior).
  
- **`result.push(vertex);`**:
  - The current `vertex` is added to the `result` array, which records the order of traversal.

- **`this.adjacencyList[vertex].forEach(neighbor => {...})`**:
  - The neighbors (adjacent vertices) of the current `vertex` are retrieved from the adjacency list (`this.adjacencyList[vertex]`), and for each neighbor, the following steps are taken:
  
  - **`if (!visited[neighbor]) {...}`**:
    - This checks whether the `neighbor` has been visited or not. If it hasn't been visited, the following occurs:
    
    - **`visited[neighbor] = true;`**:
      - The `neighbor` is marked as visited to ensure it won't be explored again later.

    - **`queue.push(neighbor);`**:
      - The `neighbor` is added to the `queue`, meaning it will be explored later once all vertices closer to the `start` vertex have been processed.

### 3. **Return the Result**:
- After all vertices have been visited, the loop ends, and the BFS traversal is complete. The `result` array, which now contains the vertices in the order they were visited, is returned.

### Example Walkthrough:

Suppose we have the following graph:

```
    A
   / \
  B   C
 / \   \
D   E   F
```

This graph can be represented with an adjacency list like this:

```javascript
{
  A: ['B', 'C'],
  B: ['A', 'D', 'E'],
  C: ['A', 'F'],
  D: ['B'],
  E: ['B'],
  F: ['C']
}
```

Now, let's assume the `bfs()` method is called with `start = 'A'`.

1. **Initial State**:
   - `queue = ['A']`
   - `visited = { A: true }`
   - `result = []`
   
2. **Iteration 1**:
   - `vertex = 'A'`
   - `queue = []` (since 'A' was removed)
   - `result = ['A']` (add 'A' to result)
   - Neighbors of 'A' are ['B', 'C'].
     - Mark 'B' and 'C' as visited: `visited = { A: true, B: true, C: true }`
     - Add 'B' and 'C' to the queue: `queue = ['B', 'C']`
   
3. **Iteration 2**:
   - `vertex = 'B'`
   - `queue = ['C']`
   - `result = ['A', 'B']` (add 'B' to result)
   - Neighbors of 'B' are ['A', 'D', 'E'].
     - 'A' is already visited, so skip.
     - Mark 'D' and 'E' as visited: `visited = { A: true, B: true, C: true, D: true, E: true }`
     - Add 'D' and 'E' to the queue: `queue = ['C', 'D', 'E']`
   
4. **Iteration 3**:
   - `vertex = 'C'`
   - `queue = ['D', 'E']`
   - `result = ['A', 'B', 'C']` (add 'C' to result)
   - Neighbors of 'C' are ['A', 'F'].
     - 'A' is already visited, so skip.
     - Mark 'F' as visited: `visited = { A: true, B: true, C: true, D: true, E: true, F: true }`
     - Add 'F' to the queue: `queue = ['D', 'E', 'F']`
   
5. **Iteration 4**:
   - `vertex = 'D'`
   - `queue = ['E', 'F']`
   - `result = ['A', 'B', 'C', 'D']` (add 'D' to result)
   - Neighbors of 'D' are ['B'], but 'B' is already visited, so skip.
   
6. **Iteration 5**:
   - `vertex = 'E'`
   - `queue = ['F']`
   - `result = ['A', 'B', 'C', 'D', 'E']` (add 'E' to result)
   - Neighbors of 'E' are ['B'], but 'B' is already visited, so skip.

7. **Iteration 6**:
   - `vertex = 'F'`
   - `queue = []`
   - `result = ['A', 'B', 'C', 'D', 'E', 'F']` (add 'F' to result)
   - Neighbors of 'F' are ['C'], but 'C' is already visited, so skip.

Now the `queue` is empty, and all vertices have been visited, so the method returns the result:

```javascript
['A', 'B', 'C', 'D', 'E', 'F']
```

### Summary of BFS:
- **BFS** explores all neighbors of a vertex before moving on to the next level of neighbors.
- The algorithm uses a **queue** to track the vertices that need to be visited.
- BFS is typically used to find the shortest path in an unweighted graph, detect connected components, and explore nodes level by level.


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

        // Breadth-First Search (BFS)
        bfs(start) {
            let queue = [start];
            let visited = {};
            visited[start] = true;
            let result = [];
    
            while (queue.length > 0) {
                let vertex = queue.shift();
                result.push(vertex);
    
                this.adjacencyList[vertex].forEach(neighbor => {
                    if (!visited[neighbor]) {
                        visited[neighbor] = true;
                        queue.push(neighbor);
                    }
                });
            }
            return result;
        }
}

const graph = new Graph()

graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");

graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.addEdge("B", "D");
graph.addEdge("B", "E");
graph.addEdge("C", "F");

graph.display()

console.log(graph.bfs("A"))