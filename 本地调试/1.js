const k = 3
let str = "a12b03c3d0"
let list = "abcdefghljklmnopqrstuvwxyz".split("")
list.unshift(0)
let numList = []
let strNum = ""
if (!list.indexOf(str[0])){
    strNum= strNum + str[0]
}
for (let i=1; i<str.length;i++){
    if (list.indexOf(str[i] === -1)){
        strNum= strNum + str[i]
        console.log(numList)
    } else {
        if (list.indexOf(str[i-1]) !== -1){
            numList.push(Number(strNum))
            strNum = ""
        }
    }
}
numList.sort((a, b)=>b-a)
const res = numList[k-1]
console.log(res)