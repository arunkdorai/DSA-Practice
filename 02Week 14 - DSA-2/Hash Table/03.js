
// Ransom Note
// Problem: Given two strings, ransomNote and magazine, determine if ransomNote can be constructed from magazine by using the letters from magazine.

function canConstruct(ransomNote, magazine) {
    let magazineCount = new Map();
  
    for (let char of magazine) {
      magazineCount.set(char, (magazineCount.get(char) || 0) + 1);
    }
  
    for (let char of ransomNote) {
      if (!magazineCount.has(char) || magazineCount.get(char) === 0) {
        return false;
      }
      magazineCount.set(char, magazineCount.get(char) - 1);
    }
  
    return true;
  }
  
  // Test cases
  console.log(canConstruct("a", "b"));           // false
  console.log(canConstruct("aa", "ab"));         // false
  console.log(canConstruct("aa", "aab"));        // true
  