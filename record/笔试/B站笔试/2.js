console.log(1)
setTimeout(()=>{console.log(2), 0})
console.log(3)
Promise.resolve(4).then(b=>{
    console.log(b)
})
console.log(5)