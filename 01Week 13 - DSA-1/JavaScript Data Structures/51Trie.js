/* Trie

A Trie (pronounced as "try") is a type of tree data structure used for storing and searching strings, especially useful for tasks like auto-completion, spell-checking, and searching for words in a dictionary. The key feature of a Trie is that it exploits the common prefixes of strings, making it very efficient for prefix-based operations.

Trie (also known as a Prefix Tree), which is a type of tree data structure used to efficiently store and retrieve keys (such as strings). 

Key Properties of Trie:

Node Structure: Each node in a Trie represents a character of a word. The root node is usually empty, and every node contains a list of child nodes corresponding to characters.
Edges: Every edge between nodes represents a character in the string. Nodes with common prefixes share the same paths in the Trie.
End of Word: Each node may have a flag (boolean) to indicate if it's the end of a valid word.
Efficient Operations: Tries are particularly efficient for:
Inserting a word.
Searching for a word or prefix.
Prefix Matching: Quickly finding all words that start with a given prefix.

Operations in Trie:

Insert Operation:

Start from the root node.
For each character in the word, check if the child node exists. If not, create a new node.
Move to the child node and mark the last node as the end of the word.

Search Operation:

Start from the root node.
For each character in the word, check if the child node exists. If any character is missing, return false.
If all characters exist, check if the last node is marked as the end of the word.

StartsWith Operation:

Similar to search, but instead of checking for the end of the word, it checks if the prefix exists in the Trie.

### Key Concepts of Trie

- **Nodes:** Each node in a Trie represents a single character of a string. The root node is empty, and each path down the tree represents a word or a prefix of a word.
- **Edges:** Edges connect nodes, representing the sequence of characters in the stored strings.
- **End of Word Marker:** Some nodes are marked to indicate the end of a word.

### Trie Operations

1. **Insert:** Add a word to the Trie.
2. **Search:** Check if a word exists in the Trie.
3. **StartsWith:** Check if there is any word in the Trie that starts with a given prefix.
4. **Delete:** Remove a word from the Trie (optional and more complex).

Trie Use Cases:

Auto-completion: Efficiently suggest possible words based on input prefixes.
Spell Checking: Check if a word exists in a dictionary.
Search Engine: Implementing search suggestions based on prefixes.
Longest Prefix Matching: Finding the longest matching prefix from a set of strings.

*/


class TrieNode {
    constructor() {
      this.children = {};
      this.isEndOfWord = false;
    }
  }

  /* TrieNode Class:
This class represents a node in the Trie.

this.children = {};:
Each node has a children property, which is an object (or map). This object stores references to child nodes, with keys representing characters and values representing the child TrieNode corresponding to each character.
  */
  
  class Trie {
    constructor() {
      this.root = new TrieNode();
    }
  
    // Insert a word into the Trie
    insert(word) {
      let node = this.root;
      for (let char of word) {
        if (!node.children[char]) {
          node.children[char] = new TrieNode();
        }
        node = node.children[char];
      }
      node.isEndOfWord = true;
    }
  
    // Search for a word in the Trie
    search(word) {
      let node = this.root;
      for (let char of word) {
        if (!node.children[char]) {
          return false;
        }
        node = node.children[char];
      }
      return node.isEndOfWord;
    }
  
    // Check if any word in the Trie starts with the given prefix
    startsWith(prefix) {
      let node = this.root;
      for (let char of prefix) {
        if (!node.children[char]) {
          return false;
        }
        node = node.children[char];
      }
      return true;
    }
  }
  
  // Example usage:
  const trie = new Trie();
  trie.insert("apple");
  console.log(trie.search("apple"));   // true
  console.log(trie.search("app"));     // false
  console.log(trie.startsWith("app")); // true
  trie.insert("app");
  console.log(trie.search("app"));     // true