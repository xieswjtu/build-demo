//手写防抖
const myDebounce = function(fn, t) {
    let timer //声明定时器
    return function() {
        let curThis = this//将该函数的this传给fn
        let e = Array.prototype.slice.call(arguments,0)//将该函数的参数传递给fn
        if (timer) clearTimeout(timer) //检查之前是否有定时器，有则删除
        timer = setTimeout(function(){
          fn.apply(curThis,e)
        }, t)
    } 
}