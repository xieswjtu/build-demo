//手写typeof typeof实际不能区别复杂数据类型 但是Object.prototype.toString可以 所以用它对typeof进行升级优化
const myTypeof = function(obj) {
    let res = Object.prototype.toString.call(obj)
    const len = res.length
    res = res.slice(8,len-1)
    return res
}

console.log(myTypeof(1))