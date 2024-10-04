// Workout 3: Tree Representation of a File System and File Search

// Node class for the File System Tree
class FileSystemNode {
    constructor(name, isFile = false) {
        this.name = name;
        this.isFile = isFile;
        this.children = [];
    }

    // Add a child node
    addChild(child) {
        this.children.push(child);
    }
}

// FileSystem class to manage the directory structure
class FileSystem {
    constructor() {
        this.root = new FileSystemNode('root');
    }

    // Method to search for a file in the system
    searchFile(node, fileName) {
        if (node.isFile && node.name === fileName) {
            console.log(`File ${fileName} found`);
            return true;
        }

        for (let child of node.children) {
            if (this.searchFile(child, fileName)) {
                return true;
            }
        }

        return false;
    }
}

// Create a File System Tree
let fileSystem = new FileSystem();
let documents = new FileSystemNode('documents');
let music = new FileSystemNode('music');
let file1 = new FileSystemNode('file1.txt', true);
let file2 = new FileSystemNode('song1.mp3', true);

fileSystem.root.addChild(documents);
fileSystem.root.addChild(music);
documents.addChild(file1);
music.addChild(file2);

// Searching for files
console.log("Searching for file1.txt:");
fileSystem.searchFile(fileSystem.root, 'file1.txt'); // Output: File file1.txt found

console.log("Searching for song2.mp3:");
fileSystem.searchFile(fileSystem.root, 'song2.mp3'); // Output: No output (file not found)
