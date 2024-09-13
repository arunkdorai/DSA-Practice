
function quickSort(arr) {
    if (arr.length <= 1) return arr;
    
    let pivot = arr[arr.length - 1];
    let left = [], right = [];
    
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] < pivot) {
        left.push(arr[i]);
      } else {
        right.push(arr[i]);
      }
    }
    
    return [...quickSort(left), pivot, ...quickSort(right)];
  }
  
  console.log(quickSort([10, 7, 8, 9, 1, 5]));         
  console.log(quickSort([64, 25, 12, 22, 11]));        
  console.log(quickSort([38, 27, 43, 3, 9, 82, 10]));  
  