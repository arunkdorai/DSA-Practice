/* DFS in Graph
 The provided code implements **Depth-First Search (DFS)**, which is a graph traversal algorithm used to explore vertices as deep as possible before backtracking to explore other branches. This approach uses a **stack** to explore nodes in a last-in, first-out (LIFO) manner.

Let’s break down the code step by step:

### 1. **`dfs(start)` Method**:
This method performs a DFS traversal starting from the `start` vertex. DFS dives deep into the graph by visiting neighbors of a vertex before moving to other unvisited vertices at the same level.

#### Parameters:
- `start`: This is the starting vertex from where the DFS traversal will begin.

#### Variables:
- **`stack = [start];`**:
  - A stack is initialized with the `start` vertex. The stack is used to keep track of the vertices that need to be explored next. DFS uses a stack to explore nodes deeply by popping the last added vertex, exploring its neighbors, and then backtracking.

- **`visited = {};`**:
  - This object keeps track of which vertices have been visited to prevent revisiting them, which could cause infinite loops, especially in cyclic graphs.

- **`visited[start] = true;`**:
  - The starting vertex is marked as visited by setting `visited[start] = true`.

- **`result = [];`**:
  - This array stores the order in which vertices are visited during the DFS traversal.

### 2. **`while (stack.length > 0)` Loop**:
The loop continues as long as there are vertices in the stack to be explored.

#### Step-by-step Breakdown:
- **`let vertex = stack.pop();`**:
  - The `pop()` method removes the last vertex from the stack (the most recently added vertex) and assigns it to `vertex`. This ensures that the traversal goes as deep as possible into the graph before backtracking.
  
- **`result.push(vertex);`**:
  - The current `vertex` is added to the `result` array, which keeps track of the order in which vertices are visited.

- **`this.adjacencyList[vertex].forEach(neighbor => {...})`**:
  - The neighbors of the current `vertex` are retrieved from the adjacency list (`this.adjacencyList[vertex]`), and for each neighbor, the following checks and actions are performed:
  
  - **`if (!visited[neighbor]) {...}`**:
    - This checks if the `neighbor` has already been visited. If it hasn't been visited yet:
    
    - **`visited[neighbor] = true;`**:
      - The `neighbor` is marked as visited to ensure it is not revisited later.

    - **`stack.push(neighbor);`**:
      - The `neighbor` is added to the stack, meaning it will be explored next (after the current branch is fully explored).

### 3. **Return the Result**:
Once all vertices have been explored (i.e., the stack is empty), the `while` loop ends, and the DFS traversal is complete. The method then returns the `result` array, which contains the vertices in the order they were visited.

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

Now, let's assume the `dfs()` method is called with `start = 'A'`.

1. **Initial State**:
   - `stack = ['A']`
   - `visited = { A: true }`
   - `result = []`
   
2. **Iteration 1**:
   - `vertex = 'A'`
   - `stack = []` (since 'A' was popped from the stack)
   - `result = ['A']` (add 'A' to result)
   - Neighbors of 'A' are ['B', 'C'].
     - Mark 'B' and 'C' as visited: `visited = { A: true, B: true, C: true }`
     - Push 'B' and 'C' to the stack: `stack = ['B', 'C']`

3. **Iteration 2**:
   - `vertex = 'C'` (since it's the last item added, it's popped from the stack)
   - `stack = ['B']`
   - `result = ['A', 'C']` (add 'C' to result)
   - Neighbors of 'C' are ['A', 'F'].
     - 'A' is already visited, so skip it.
     - Mark 'F' as visited: `visited = { A: true, B: true, C: true, F: true }`
     - Push 'F' to the stack: `stack = ['B', 'F']`

4. **Iteration 3**:
   - `vertex = 'F'`
   - `stack = ['B']`
   - `result = ['A', 'C', 'F']` (add 'F' to result)
   - Neighbors of 'F' are ['C'], but 'C' is already visited, so skip.

5. **Iteration 4**:
   - `vertex = 'B'`
   - `stack = []`
   - `result = ['A', 'C', 'F', 'B']` (add 'B' to result)
   - Neighbors of 'B' are ['A', 'D', 'E'].
     - 'A' is already visited, so skip.
     - Mark 'D' and 'E' as visited: `visited = { A: true, B: true, C: true, F: true, D: true, E: true }`
     - Push 'D' and 'E' to the stack: `stack = ['D', 'E']`

6. **Iteration 5**:
   - `vertex = 'E'`
   - `stack = ['D']`
   - `result = ['A', 'C', 'F', 'B', 'E']` (add 'E' to result)
   - Neighbors of 'E' are ['B'], but 'B' is already visited, so skip.

7. **Iteration 6**:
   - `vertex = 'D'`
   - `stack = []`
   - `result = ['A', 'C', 'F', 'B', 'E', 'D']` (add 'D' to result)
   - Neighbors of 'D' are ['B'], but 'B' is already visited, so skip.

Now, the `stack` is empty, and all vertices have been visited, so the method returns the result:

```javascript
['A', 'C', 'F', 'B', 'E', 'D']
```

### Summary of DFS:
- **DFS** explores vertices as deep as possible in the graph before backtracking.
- It uses a **stack** to store the vertices that need to be explored next.
- DFS is useful for problems involving connected components, pathfinding, and exploring all possible paths in a graph.

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