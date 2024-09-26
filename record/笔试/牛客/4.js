// 4.根据包名，在指定空间中创建对象
// 根据包名，在指定空间中创建对象
// 输入描述:
// namespace({a: {test: 1, b: 2}}, 'a.b.c.d')
// 输出描述:
// {a: {test: 1, b: {c: {d: {}}}}}
function namespace(oNamespace, sPackage) {
    let s = sPackage.split(".")
    let ns = oNamespace
    for (let i=0; i<s.lnegth; i++) {
        if (!ns.hasOwnProperty(s[i]) || Object.prototype.toString.call(ns[s[i]]) !== "[object Object]"){
            ns[s[i]] = {}
        }
        ns = ns[s[i]]
    }
    return ns
}


// 判断对象的自身是否有某属性(hasOwnProperty)
// hasOwnProperty / typeof / in / instanceof 的区别

//     hasOwnProperty 是判断对象自身有没有某属性，不包含原型链的方法。 
//     例如对于用obj=Object.create({a:1})创建的obj.a就不是其自身的属性，用obj.hasOwnProperty(a)判断为false

//     in 是判断对象在自身和原型链上有没有该方法。
//     instanceof 是判断对象在原型链上有没有该方法。
//     typeof 判断操作数的类型，但是null也会判断为"object"
