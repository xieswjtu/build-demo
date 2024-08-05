// 手写深拷贝
console.log('deepClone')

const MyDeepClone = (newObject,oldObject) =>{
    for (let k in oldObject) {
        if (oldObject[k] instanceof Array){
            newObject[k] = []
            MyDeepClone(newObject[k], oldObject[k])
        } else if (oldObject[k] instanceof Object) {
            newObject[k] = {}
            MyDeepClone(newObject[k], oldObject[k])
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

const obj2 = MyDeepClone({}, obj1)
obj2.age = 25

console.log("old",obj1)
console.log("new", obj2)