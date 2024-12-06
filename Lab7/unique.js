const unique = (array) => {

    let result = [];

    for (const item of array) {
        if (!result.includes(item)) {
            result.push(item);
        }
    }

    return result;
}

const result = unique([2, 1, 1, 3, 2]);
console.log(result); // [2, 1, 3]

const result1 = unique(['top', 'bottom', 'top', 'left']);
console.log(result1); // ['top', 'bottom', 'left']