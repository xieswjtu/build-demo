Array.prototype.myFilter = function(callback){
    let newArr = []
    for (let item of this){
        if (callback(item)){
            newArr.push(item)
        }
    }
    return newArr
}

let arr = [
    {
        num: 1,
        age: 25
    },
    {
        num: 2,
        age: 22
    },
    {
        num: 3,
        age: 25
    },
    {
        num: 4,
        age: 23
    },
    {
        num: 5,
        age: 25
    }
]
console.log(arr.myFilter(item => item.age===25)[0])
