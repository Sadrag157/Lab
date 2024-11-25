// func range (1)
const range = (start, end) => {
    let output = []
    for(let i = start; i<=end; i++){
        output.push(i)
    }
    console.log(output)
}
range(15,30)

// func rangeOdd (2)
const rangeOdd = (start, end) => {
    let output = []
    for(let i = start; i<=end; i++){
        if(i%2!=0){
            output.push(i)
        }
    }
    console.log(output)
}
rangeOdd(15,30)