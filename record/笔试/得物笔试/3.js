const P = new Promise((resovle, reject)=>{
    console.log(1)
    resovle()
    console.log(2)
    reject("error")
})
P.then (()=>{
    console.log(3)
}).catch(e=>{
    console.log(e)
})
console.log(4)