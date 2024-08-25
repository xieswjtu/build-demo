//js异步宏任务微任务
Promise1 = Promise.resolve()
console.log("start")

setTimeout(function(){
    console.log("Timer1")
},0)

Promise1.then(()=>{
    console.log("Promise1")
    setTimeout(function(){
        console.log("Timer3")
    },0)
}).then(() => {
    console.log("Promise2")
})

setTimeout(function(){
    console.log("Timer2")
},0)

console.log("end")