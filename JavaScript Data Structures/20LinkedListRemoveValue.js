
class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

class LinkedList {
    constructor() {
        this.head = null
        this.size = 0
    }

    isEmpty() {
        return this.size === 0
    }

    getSize() {
        return this.size
    }

    prepend(value) { // O(1) time complexity
        const node = new Node(value)
        if(this.isEmpty()) {
            this.head = node
        } else {
            node.next = this.head
            this.head = node
        }
        this.size++
    }

    append(value) { // O(n) time complexity
        const node = new Node(value)
        if(this.isEmpty()) {
            this.head = node
        } else {
            let prev = this.head
            while(prev.next) {
                prev = prev.next
            }
            prev.next = node
        }
        this.size++
    }

    insert(value, index) {
        if(index < 0 || index > this.size) {            
            return console.log('Invalid Index. Index entered in less than 0 or greater than the Linked list index available')
        }
        if(index === 0) {
            this.prepend(value)
        } else {
            const node = new Node(value)
            let prev = this.head
            for(let i=0; i < index-1; i++) {
                prev = prev.next
            }
            node.next = prev.next
            prev.next = node
            this.size++
        }
    }

    removeFrom(index) {
        if(index < 0 || index >= this.size) {
            console.log('Invalid Index. Index entered in less than 0 or greater than the Linked list index available')
            return null
        }
        let removedNode
        if(index === 0) {
            removedNode = this.head
            this.head = this.head.next
        } else {
            let prev = this.head
            for(let i = 0; i< index - 1; i++) {
                prev = prev.next
            }
            removedNode = prev.next
            prev.next = removedNode.next
        }
        this.size--
        return removedNode.value
    }

    removeValue(value) {
        if(this.isEmpty()) {
            return null
        }
        if(this.head.value === value) {
            this.head = this.head.next
            this.size--
            return value
        } else {
            let prev = this.head
            while(prev.next && prev.next.value !== value) {
                prev = prev.next
            }
            if(prev.next) {
                const removedNode = prev.next
                prev.next = removedNode.next
                this.size--
                return value
            }
            return null
        }
    }

    print() {
        if(this.isEmpty()) {
            console.log('List is empty')
        } else {
            let curr = this.head
            let listValues = ''
            while (curr) {
                listValues += `${curr.value} `
                curr = curr.next
            }
            console.log(listValues)
        }
    }
}

const list = new LinkedList()
console.log('List is empty? ', list.isEmpty())
console.log('List size ', list.getSize())
list.print()

list.insert(10, 0)
list.print()

list.insert(20, 0)
list.print()

list.insert(30, 1)
list.print()

list.insert(40, 2)
list.print()
console.log(list.getSize())

list.insert(50, 4)
list.print()
console.log(list.getSize())

list.insert(60, 6)
list.insert(70, -1)

console.log(list.removeValue(40))
list.print()

console.log(list.removeValue(20))
list.print()

console.log(list.removeValue(60))
list.print()
console.log(list.getSize())

