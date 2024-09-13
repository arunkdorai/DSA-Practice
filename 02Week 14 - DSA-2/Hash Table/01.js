
// Two Sum
// Problem: Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

function twoSum(nums, target) {
    let map = new Map();
    
    for (let i = 0; i < nums.length; i++) {
      let complement = target - nums[i];
      if (map.has(complement)) {
        return [map.get(complement), i];
      }
      map.set(nums[i], i);
    }
    
    return [];
  }
  
  // Test Cases
  console.log(twoSum([2, 7, 11, 15], 9));   // [0, 1]
  console.log(twoSum([3, 2, 4], 6));        // [1, 2]
  console.log(twoSum([3, 3], 6));           // [0, 1]
  