function bubbleSort(arr) {
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
      for (let j = 0; j < n - i - 1; j++) {
        if (arr[j] > arr[j + 1]) {
          // Swap
          [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        }
      }
    }
    return arr;
  }

console.log(bubbleSort([64, 34, 25, 12, 22, 11, 90])); 
console.log(bubbleSort([5, 1, 4, 2, 8]));             
console.log(bubbleSort([100, 80, 60, 40, 20]));     