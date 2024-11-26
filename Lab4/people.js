const people = {
    lenin: { born: 1870, died: 1924 },
    mao: { born: 1893, died: 1976 },
    gandhi: { born: 1869, died: 1948 },
    hirohito: { born: 1901, died: 1989 },
};

function ages(people){
    const objOfPeopleLifeTime = {}
    for(const index in people){
        let allInfo = people[index]
        let life = allInfo.died - allInfo.born
        objOfPeopleLifeTime[index] = life
    }
    return objOfPeopleLifeTime
}
console.dir(ages(people));
// {
//   lenin: 54,
//   mao: 83,
//   gandhi: 79,
//   hirohito: 88,
// }