
class Stack {
    constructor() {
        this.items = []
    }
    
    push(element) {
        this.items.push(element)
    }

    pop() {
        if(this.isEmpty()) {
            return "Stack is empty"
        }
        return this.items.pop()
    }

    peek() {
        if(this.isEmpty()) {
            return "Stack is empty"
        }
        return this.items[this.items.length - 1]
    }

    isEmpty() {
        return this.items.length === 0
    }

    size() {
        return this.items.length
    }

    print() {
        console.log(this.items.toString())
    }
}

const stack = new Stack

stack.push(1)
stack.push(2)
stack.push(3)
stack.print()
size()

stack.pop()
stack.print()
size()

peek()