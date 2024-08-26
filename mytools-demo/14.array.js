//数组去重
//方法1 Set去重
function quChong1 (arr) {
    return [...new Set(arr)]
}
//方法2 Map去重
function quchong2 (arr) {
    const newArr = []
    arr.reduce((pre, cur) =>{
        if (!pre.has(cur)){
            pre.set(cur, 1)
            newArr.push(cur) 
        }
    },new Map())
}
