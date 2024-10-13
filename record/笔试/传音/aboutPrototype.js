function Person(){
    this.name = "A"
}
Person.name = "B"
person = new Person
console.log(person.name)

//逻辑中断
const a = 10, b =25
console.log(a&&b)
console.log(a||b)