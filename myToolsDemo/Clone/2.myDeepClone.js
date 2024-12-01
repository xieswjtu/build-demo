// 手写深拷贝
console.log('deepClone')

const myDeepClone = (oldObject) =>{
    let newObject = Array.isArray(oldObject)?[]:{}
    for (let k in oldObject) {
        if (oldObject[k] instanceof Object){
            newObject[k] = myDeepClone(oldObject[k])
        } else {
            newObject[k] = oldObject[k]
        }
    }
    return newObject
}

//深拷贝使用
const a ={
    one:1,
    two:2,
}
const obj1 = {
    age: 20,
    name: 'xxx',
    address: {
        city: "sichuan",
        loaction: {
            num: 210,
            city: "chengdu"
        }
    },
    arr: [1,2,a]
}

const obj2 = myDeepClone(obj1)

console.log("old",obj1)
console.log("new", obj2)