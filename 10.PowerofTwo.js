// function isPowerOfTwo(n) {
//     if(n<1){
//         return false
//     }
//     while(n>2) {
//         if(n%2!==0) {
//             return false
//         }
//         n=n/2
//     }
//     return true
// }

// console.log(isPowerOfTwo(1))
// console.log(isPowerOfTwo(2))
// console.log(isPowerOfTwo(5))

// Big-O = O(log n)

function isPowerOfTwoBitwise(n){
    if(n<1){
        return false
    }
    return (n & (n-1)) === 0
}

console.log(isPowerOfTwoBitwise(1))
console.log(isPowerOfTwoBitwise(2))
console.log(isPowerOfTwoBitwise(5))

// Big-O = O(1)