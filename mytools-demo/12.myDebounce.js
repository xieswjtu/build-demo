//手写防抖
const myDebounce = function(fn, t) {
    let timer //声明定时器
    return function() {
        if (timer) clearTimeout(timer) //检查之前是否有定时器，有则删除
        timer = setTimeout(function(){
          fn()
        }, t)
    } 
}