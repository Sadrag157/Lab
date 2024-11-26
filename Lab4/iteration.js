// loop for
const sum1 = (...arg) => {
    let result = 0
    for (let i = 0; i < arg.length; i++) {
        result += arg[i]
    }
    console.log(result)
}

// loop for of
const sum2 = (...arg) => {
    let result = 0
    for (const i of arg) {
        result += i
    }
    console.log(result)
}

// while
const sum3 = (...arg) => {
    let result = 0
    let i = 0
    while (i < arg.length) {
        result += arg[i]
        ++i
    }
    console.log(result)
}

// do while
const sum4 = (...arg) => {
    let result = 0
    let i = 0
    if (arg.length === 0) {
        console.log(0)
        return
    }
    do {
        result += arg[i]
        ++i
    } while (i < arg.length);
    console.log(result)
}

// array.reduce
const sum5 = (...arg) => {
    let result = 0
    if (arg.length === 0) {
        console.log(0)
        return
    }
    result = arg.reduce((accumulator, currentValue) => accumulator+currentValue)
    console.log(result)
}

sum1(1, 2, 3)
sum2(0)
sum3(5, 2, 9)
sum4()
sum5(10, -1, -1, -1)