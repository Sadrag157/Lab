// increment 1
let number = 3
const inc = (x) => ++x
let incNumber = inc(number)
console.dir({number, incNumber})

// increment 2
let num = {n: 13}
const inc2 = (obj) => {obj.n++}
inc2(num)
console.dir(num)