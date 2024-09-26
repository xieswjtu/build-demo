//考察引用数据类型，存储为地址.
function Set(data){
    data.v = 2
    data = {v: 3}
    data.v = 4
}
var data = {v: 1}
Set(data)
console.log(data.v)