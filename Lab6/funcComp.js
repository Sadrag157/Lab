const handlers = []
const pipe = (...fns) => {
    if (fns.some((arg) => typeof arg !== 'function')) {throw 'All args must be functions'}
    const catcher = (x) => {
        try {
            result = fns.reduceRight((f1, f2) => f2(f1), x)
            return result
        } catch (error) {
            for (const handler of handlers) {
                handler(error);
            }
            return undefined
        }
    }
    return catcher
};
pipe.on = (name, handler) => {
    if (name === 'error') handlers.push(handler);
}

const inc = x => x++;
const twice = x => { throw 'no' };
const cube = x => x ** 3;
const div = x => x / 2;

const func = pipe(inc,twice, cube, div);
const func2 = pipe(inc, cube, div);

pipe.on('error', (error) => {console.log('Works?', error)});

console.log(func(10))
console.log(func2(7))