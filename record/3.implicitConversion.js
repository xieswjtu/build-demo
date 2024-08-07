//实现（a == 1 && a == 2 && a == 3）为true

//利用对象隐式转换调用toString
let a = {
    i: 1,
    toString() {
        return a.i++
    }
}
console.log(a == 1 && a == 2 && a == 3)

//利用defineProperty
let val = 0
Object.defineProperty(global, "a1", {
    get: function() {
        return ++val
    }
})

console.log(a1 == 1 && a1 == 2 && a1 == 3)