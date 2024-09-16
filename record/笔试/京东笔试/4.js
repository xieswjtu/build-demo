function Person(){}
const person1 = new Person()
const person2 = new Person()
Person.prototype.getName = function(){
    return this.name
}
Person.prototype.name = "tom"
person1.name = "jerry"
var name2 = person2.getName()
console.log(name2)

console.log(typeof("1" + 1))
// 在 JavaScript 中，当将字符串与数字相加时，JavaScript 会将数字隐式地转换为字符串，然后进行字符串连接