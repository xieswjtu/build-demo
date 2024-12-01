//题目1
function fn1(){
    console.log("1")
    return Promise.reject("4")
}
async function fn2(){
    console.log(2)
    await fn1()
    console.log(3)
}
fn2()



