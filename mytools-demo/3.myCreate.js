//手写Object.create
//相对于new，Object.create是手动指定原型为传入参数，new是自动指定原型为构造函数原型
//将传入对象作为原型

function myCreate(obj) {
    function F(){}
    F.prototype = obj
    return new F()
}