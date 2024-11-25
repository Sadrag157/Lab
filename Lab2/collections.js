// first instance
const data = [
    {name: 'Alex', phone: '+380983271289'},
    {name: 'Vlad', phone: '+380507894512'},
    {name: 'Vlada', phone: '+380964761285'},
    {name: 'Vika', phone: '+380754712389'},
    {name: 'Alisa', phone: '+380128603416'}
]

const findPhoneByName = (name) => {
    for(i = 0; i<= data.length; i++){
        if(name == data[i].name){
            return data[i].phone
        }throw ("error")
    }
}
console.dir(findPhoneByName('Alex'))

// second instance
const data2 = {
    Alex: '+380983271289',
    Vlad: '+380507894512',
    Vlada: '+380964761285',
    Vika: '+380754712389',
    Alisa: '+380128603416'
}
const findPhoneByName2 = (name) => {return data2[name]}
console.dir(findPhoneByName2("Vlada"))