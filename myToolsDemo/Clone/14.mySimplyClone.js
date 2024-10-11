//手写浅拷贝  （其他方法还有Object.assign()和=直接赋值）
function mySimplyClone(oldObj) {
    var newObj = Array.isArray(oldObj)? [] : {}
    for (let k in oldObj) {
        newObj[k] = oldObj[k]
    }
    return newObj
}