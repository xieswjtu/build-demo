//打印某对象属性
function printObject(obj, key){
    console.log(obj[key])
    // console.log(obj.key) 错误写法，会输出undefined
}

const obj = {
    name: "小明"
}
printObject(obj, "name")