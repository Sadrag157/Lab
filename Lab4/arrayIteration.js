const m = max([[1, 2, 3], [4, 5, 6], [7, 8, 9]]);
function max(twoDArray){
    flatArray = twoDArray.flat()
    let maxValue
    for(const tempArray of flatArray){
        maxValue=maxValue>tempArray ? maxValue : tempArray
    }
    return maxValue
}
console.log(m)