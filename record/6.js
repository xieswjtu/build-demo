//异步同步async宏任务微任务promise
async function async1 () {
    //async中的函数会被立即执行
    console.log("async1 start")
    // await后面的都作为回调内容，即微任务
    await async2()
    console.log("async1 end")
}

async function async2() {
    console.log("async2")
}

console.log("script start")

setTimeout(function() {
    console.log('setTimeout')
}, 0)

async1()
//初始化promise时，传入函数会被立即执行
new Promise (function (resolve){
    console.log("promise1")
    resolve()
}).then (function () {
    console.log("promise2")
})

console.log("script end")