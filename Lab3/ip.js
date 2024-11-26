const ipTransform = (IPv4 = '127.0.0.1') => {
    const ipValueArray = IPv4.split('.')
    const transformedIP = []
    for(i=0;i<ipValueArray.length;i++){
        let transformedElement = ipValueArray[i] << 8 * ((ipValueArray.length - 1) - i)
        transformedIP.push(transformedElement)
    }
    const result = transformedIP.reduce((accumulator, currentValue) => accumulator + currentValue)
    return result
}
console.log(ipTransform())  // 2130706433
console.log(ipTransform('10.0.0.1'))  // 167772161
console.log(ipTransform('192.168.1.10'))  // -1062731510