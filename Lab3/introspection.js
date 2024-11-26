const iface = {
    m1: x => [x],
    m2: function (x, y, z, w , t) {
      return [x, t];
    },
    m3(x, y, z) {
      return [x, y, z];
    }
}

const introspected = []
for(const index in iface){
    const valueArray = iface[index]
    const tempArray = [index, valueArray.length]
    introspected.push(tempArray)
}
console.dir(JSON.stringify(introspected))