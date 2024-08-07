// 如何判断一个对象是否属于某个类？
// 1.使用 instanceof 运算符来判断构造函数的 prototype 属性是否出现在对象的原型链中的任何位置。
const a1 = 1
console.log(a1 instanceof Number)// false 
//a1 是一个基本类型的数字（primitive type），而不是一个 Number 对象。因此，instanceof 运算符将返回 false
const b1 = new Number(1)
console.log(b1 instanceof Number)// true 

// 2.通过对象的 constructor 属性来判断，对象的 constructor 属性指向该对象的构造函数，但是这种方式不是很安全，因为 constructor 属性可以被改写。
const a2 = 1
console.log(a2.__proto__.constructor) //ƒ Number() { [native code] }

// 3.如果需要判断的是某个内置的引用类型的话，可以使用 Object.prototype.toString() 方法来打印对象的[[Class]] 属性来进行判断。
const a3 = 1
// JavaScript 中，toString() 方法是一个非常常用的方法，可以将不同类型的数据转换为字符串。
console.log(Object.prototype.toString.call(a3))//'[object, Number]'    用call改变this指向
console.log(a3.toString())//'1'

//对一个基本类型使用某些方法或属性时，JavaScript 会自动将其转换为相应的包装对象（即所谓的“装箱”或“自动装箱”），以便于在对象上调用方法
//23 调用方法进行了自动装箱 1 没有自动包装