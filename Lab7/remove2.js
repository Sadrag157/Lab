const removeElements = (array, ...items) => {
    for(const item of items) {
      const index = array.indexOf(item)
      if(index !== -1) array.splice(index, 1)
    }
};

const array = ['Kiev', 'Beijing', 'Lima', 'Saratov'];
removeElements(array, 'Lima', 'Berlin', 'Kiev');
console.log(array); // ['Beijing', 'Saratov']

const array1 = [1, 2, 3, 4, 5, 6, 7];
removeElements(array1, 5, 1, 6);
console.log(array1); // [2, 3, 4, 7]