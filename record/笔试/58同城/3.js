for (let i=0; i<2; i++){
    setTimeout(function(){
        console.log(i)
    },1000)
}
for (var i=0; i<2; i++){
    setTimeout(function(){
        console.log(i)
    },1000)
}

a = {a:[1,2,3],b:1}
console.log(Reflect.has(a, "a"))