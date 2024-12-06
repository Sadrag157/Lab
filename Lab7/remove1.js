const removeElement = (array, item) => {
    const index = array.indexOf(item)
    if(index !== -1) {array.splice(index, 1)}
};
  
const array = [1, 2, 3, 4, 5, 6, 7];
removeElement(array, 3);
console.log(array); // [1, 2, 4, 5, 6, 7]

const array2 = ['Kiev', 'Beijing', 'Lima', 'Saratov'];
removeElement(array2, 'Lima');
removeElement(array2, 'Berlin');
console.log(array2); // ['Kiev', 'Beijing', 'Saratov']