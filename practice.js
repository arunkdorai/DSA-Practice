function ss(arr) {
    const sarr = arr.sort((a, b)=>a-b)

    const usarr = [...new Set(sarr)]

    if(usarr.length < 2) {
        return null
    }

    return usarr[1]
}

console.log(ss([22, 34, 54, 10, 5, 12]))