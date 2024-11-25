// numbers average
const average = (a,b) => {return ((a+b)/2)}

// number square
const square = (x) => {return (x*x)}

// number cube
const cube = (x) => {return (x*x*x)}

// calculate average of square and cube number
const calculate = (start, end) =>{
    let result = []
    for(i = start; i<=end; i++){
        result.push(average(square(i),cube(i)))
    }
    return result
}
console.dir(calculate(0,9))