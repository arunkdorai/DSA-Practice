
// Problem: Write a function that replaces each alphabet in the given string with another alphabet occurring at the n-th position from each of them. Assume the alphabet wraps around from 'z' to 'a'.

function shiftStringByN(str, n) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    const alphabetLength = alphabet.length;

    // Function to shift character by n positions
    function shiftCharacter(char) {
        const isUpperCase = char === char.toUpperCase();
        char = char.toLowerCase();
        const index = alphabet.indexOf(char);

        if (index === -1) {
            return char;  // return non-alphabet characters unchanged
        }

        let newIndex = (index + n) % alphabetLength;
        if (newIndex < 0) {
            newIndex += alphabetLength;
        }

        return isUpperCase ? alphabet[newIndex].toUpperCase() : alphabet[newIndex];
    }

    return str.split('').map(shiftCharacter).join('');
}

// Example usage
console.log(shiftStringByN("Hello World!", 2));  // Output: "Jgnnq Yqtnf!"
console.log(shiftStringByN("abcd xyz", -3));     // Output: "xyza uvw"
