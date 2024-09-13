
// Problem: Write a function that counts the number of vowels and consonants in a given string.


function countVowelsAndConsonants(str) {
    const vowels = 'aeiouAEIOU';
    let vowelCount = 0;
    let consonantCount = 0;

    for (let char of str) {
        if (vowels.includes(char)) {
            vowelCount++;
        } else if (char.toLowerCase() >= 'a' && char.toLowerCase() <= 'z') {
            consonantCount++;
        }
    }

    return {
        vowels: vowelCount,
        consonants: consonantCount
    };
}

// Example usage
const result = countVowelsAndConsonants("Hello World!");
console.log(result);  // Output: { vowels: 3, consonants: 7 }
