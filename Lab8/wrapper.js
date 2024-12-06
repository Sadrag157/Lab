const contract = (fn, ...types) => (...args) => {
    args.forEach((arg, i) => {
        const type = types[i].name.toLowerCase()
        if (typeof arg !== type) {
            throw new TypeError(`Wrong argument!`);
        }
    });
  
    const result = fn(...args);
    const def = types[types.length - 1].name.toLowerCase()
    if (typeof result !== def) {
        throw new TypeError(`Wrong result!`);
    }
  
    return result;
};

const add = (a, b) => a + b;
const addNumbers = contract(add, Number, Number, Number);
const res = addNumbers(2, 3);
console.dir(res); // Output: 5

const concat = (s1, s2) => s1 + s2;
const concatStrings = contract(concat, String, String, String);
const res1 = concatStrings('Hello ', 'world!');
console.dir(res1); // Output: Hello world!