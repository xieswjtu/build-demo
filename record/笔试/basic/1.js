// 1. 修改this指向
// 封装函数 f，使 f 的 this 指向指定的对象。
// 方法1
function bindThis1 (fn, target) {
    return function(){
        return fn.call(target)
    }
}
// 方法2
function bindThis2 (fn, target) {
    return function () {
        return fn.apply(target)
    }
}
// 方法3
function bindThis3 (fn, target) {
    return fn.bind(target)
}

