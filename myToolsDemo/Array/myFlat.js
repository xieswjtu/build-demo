//数组扁平化
Array.prototype.myFlat = function(){
    let newArr = []
    for (let item of this){
        if (Array.isArray(item)){
            newArr = newArr.concat(item.myFlat())
        }else{
            newArr.push(item)
        }
    }
    return newArr
}

//示例
let arr =[1,2,3,[4,5],[6,7,[8,9,10,[11]]],12,13]
console.log(arr.myFlat())