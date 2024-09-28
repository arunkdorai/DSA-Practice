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
        let mid
        mid = Math.floor(this.items.length / 2)
        return this.items[mid] = undefined
    }

    isEmpty() {
        return this.items.length === 0
    }

    print() {
        console.log(this.items.toString())
    }


}

const stack = new Stack()

stack.push(1)
stack.push(2)
stack.push(3)

console.log(stack.pop())

stack.print()