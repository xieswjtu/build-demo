//手写instanceof 

const myInstanceof = (left, right) =>{
    //获取对象原型
    let proto = Object.getPrototypeOf(left)
    //获取构造函数原型
    let prototype = right.prototype
    //判断是否在原型链上
    while (true) {
        if (!proto) return false
        if (proto === prototype) return true

        proto = Object.getPrototypeOf(proto)
    }
}

//使用
const num = new Number(6)
console.log(myInstanceof(num,Number))
