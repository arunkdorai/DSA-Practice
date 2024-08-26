// Video 11 has Recursion explanation

function recursiveFibonacci(n) {
    if (n<2) {
        return n
    }
    return recursiveFibonacci(n-1) + recursiveFibonacci(n-2)
}

console.log(recursiveFibonacci(0))
console.log(recursiveFibonacci(1))
console.log(recursiveFibonacci(6))
console.log(recursiveFibonacci(8))

// O(2^n) - for this Recursive fibonacci
// It is O(n) - for Iterative fibonacci in problem 7.FibonacciSequence.js