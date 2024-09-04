// 5. 数组去重
// 为 Array 对象添加一个去除重复项的方法
// 输入
// [false, true, undefined, null, NaN, 0, 1, {}, {}, 'a', 'a', NaN]
// 输出
// [false, true, undefined, null, NaN, 0, 1, {}, {}, 'a']

//ES6之后
Array.prototype.quchong = function(){
    return [...new Set(this)]
}

//ES6之前
Array.prototype.unqi = function() {
    
}

// (NaN === NaN) => false

// NaN ： is not a number，不等于自己
// typeof NaN => number
// Object.prototype.toString.call(NaN) => "[object Number]"
// ES6 新增方法：Number.isNaN() 用来判断是否属于数字
