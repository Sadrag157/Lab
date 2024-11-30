const pipe = (...fns) => {
    if(fns.some((arg) => typeof arg !=='function')) {throw 'All args must be functions'}
    result = (x) => fns.reduce((f1, f2) => f2(f1), x)
    return result
}
const inc = x => ++x;
const twice = x => x * 2;
const cube = x => x ** 3;

const f = pipe(inc, twice, cube);
console.log(f(5))