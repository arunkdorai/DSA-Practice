
function selectionSort(arr) {
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
      let minIdx = i;
      for (let j = i + 1; j < n; j++) {
        if (arr[j] < arr[minIdx]) {
          minIdx = j;
        }
      }
      [arr[i], arr[minIdx]] = [arr[minIdx], arr[i]];
    }
    return arr;
  }
  
  console.log(selectionSort([64, 25, 12, 22, 11]));    
  console.log(selectionSort([29, 10, 14, 37, 13]));   
  console.log(selectionSort([20, 40, 10, 50, 30]));   
  