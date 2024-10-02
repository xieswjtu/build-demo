//字节
//!!!!!!!!!!!!!!!!!!
console.log({} instanceof Object)
console.log({}.toString instanceof Function)
console.log(Object instanceof Function)
console.log(Function instanceof Object)

//true true true true


//京东
Function.prototype.a = 1
Object.prototype.b = 2

function A() {

}

var a = new A()

console.log(a.a, a.b)//undefined 2
console.log(A.a, A.b)//1 2