//手写bind

Function.prototype.myBind = function () {
    //参数拆解为数组
    const args = Array.prototype.slice.call(arguments)
    //获取this
    const t = args.shift()
    const self = this 
    //返回一个函数
    return function () {
        return self.apply(t, args)
    }
}


//使用
function fn1(a, b, c) {
    console.log("this", this)
    console.log(a, b, c)
    return "this is fn1"
}
const fn2 = fn1.bind({x:100}, 10, 20, 30)
const res = fn2
console.log(res)