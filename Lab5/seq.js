const seq = (func) => (inputData) => typeof inputData === "number" ? func(inputData) : seq(x => func(inputData(x)))

console.log(seq(x => x + 3)(x => x * 4)(10))  // 43
console.log(seq(x => x * 2)(x => x + 7)(5)) // 24
console.log(seq(x => x + 1)(x => x * 15)(x => x / 3)(x => x - 7)(7)) // 1