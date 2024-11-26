// random value from min to max
function random(min, max) {
    if(!max){
        max = min
        min = 0
    }
    return Math.floor(Math.random() * (max - min + 1)) +min
}
console.log(random(4,10))
console.log(random(10))

// generateKey 
function generateKey(num, characters){
    const result = []
    for(i = 0; i<num; i++){
        const randomElementInArray = random(characters.length)
        result.push(characters[randomElementInArray])
    }
    return result.join('')
}
const characters = 'ABCDEFGHIJKLMOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
console.log(generateKey(16, characters))