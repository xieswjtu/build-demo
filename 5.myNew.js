//手写new
//调用new时，有以下四个步骤：
// 1.创建一个新的空对象
// 2.将新的空对象原型设置为构造函数原型
// 3.让函数的this指向这个对象，并执行函数代码
// 4.返回这个对象(如果是值类型，返回创建的对象；如果是引用类型，返回这个引用类型的对象)
function myNew(constructor, ...args) {
    if (typeof constructor !== "function") {
        console.log("type error")
        return
    }
    //实现12步，新建空对象，对象原型为构造函数的prototype对象
    const obj = Object.create(constructor.prototype)
    //将this指向新对象
    const res = constructor.apply(obj, args)
    //判断函数返回值类型
    if (res && (typeof res === "object" || typeof res === "function")) {
        return res
    }
    return obj
}