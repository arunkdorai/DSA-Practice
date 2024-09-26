function isValid(s) {
    const stack = []
    const map = {
        ']' : '[',
        '}' : '{',
        ')' : '(',
    }

    for(let i = 0; i < s.length; i++) {
        const char = s[i]
        if(char === '[' || char === '{' || char === '(') {
            stack.push(char)
        } else if(char === ']' || char === '}' || char === ')') {
            if(stack.length === 0 || stack.pop() !== map[char]) {
                return false
            }
        }
    }
    return stack.length === 0
}

const s = '()'
console.log(isValid(s))