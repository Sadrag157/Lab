// fn function
const fn = () =>{
    const obj1 = {name: ''};
    let obj2 = {name: ''};

    obj1.name = 'Alex'
    obj2.name = 'Alex'

    //obj1 = {year: 2007}  не працює, бо obj1 - константа
    obj2 = {year: 2007}

    console.dir(obj1)
    console.dir(obj2)
}
fn()

// createUser function
const createUser = (name, city) =>{
    let user = {name: name, city: city}
    return user
}
console.dir(createUser('Alex', 'Chernihiv'))