// Workout 3: Auto-Completion
// In this workout, we will implement an auto-complete feature that returns all words in the Trie that start with a given prefix.

class TrieNode {
    constructor() {
        this.children = {};
        this.isEndOfWord = false;
    }
}

class Trie {
    constructor() {
        this.root = new TrieNode();
    }

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

    startsWith(prefix) {
        let node = this.root;
        for (let char of prefix) {
            if (!node.children[char]) {
                return null;
            }
            node = node.children[char];
        }
        return node;
    }

    // Helper function to collect all words starting from a given node
    collectWords(node, prefix, words) {
        if (node.isEndOfWord) {
            words.push(prefix);
        }
        for (let char in node.children) {
            this.collectWords(node.children[char], prefix + char, words);
        }
    }

    // Auto-complete function to find all words that start with a given prefix
    autoComplete(prefix) {
        let node = this.startsWith(prefix);
        if (!node) {
            return [];
        }
        let words = [];
        this.collectWords(node, prefix, words);
        return words;
    }
}

// Test Workout 3: Auto-completion
let trie = new Trie();
trie.insert("apple");
trie.insert("app");
trie.insert("application");
trie.insert("apply");

console.log(trie.autoComplete("app"));  // ['app', 'apple', 'application', 'apply']
console.log(trie.autoComplete("appl")); // ['apple', 'application', 'apply']
console.log(trie.autoComplete("ban"));  // []


