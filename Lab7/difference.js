const difference = (array1, array2) => {
    const filteredArray = []
    for(const item of array1) {
        if(!array2.includes(item)) {filteredArray.push(item)}
    }
    return filteredArray 
};

const array1 = [7, -2, 10, 5, 0];
const array2 = [0, 10];
const result = difference(array1, array2);
console.log(result); // [7, -2, 5]

const array3 = ['Beijing', 'Kiev'];
const array4 = ['Kiev', 'London', 'Baghdad'];
const result1 = difference(array3, array4);
console.log(result1); // ['Beijing']