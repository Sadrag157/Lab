const array = [42, false, "true", 51, "cow", {n: 4}, true, true, 13, 65, "1", null, undefined, NaN]

const countType = (array) => {
    const typeCounter = {};
    for(element of array){
        const type = typeof element;
        typeCounter[type]  = (typeCounter[type] || 0) +1;
    }
    return typeCounter;
}
console.log(countType(array));