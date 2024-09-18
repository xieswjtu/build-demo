function setname(name){
    this.name = name
}
setname.prototype.printName = function(){ console.log(this.name) }
let a = new setname("cc")
a.name = "dd"
a.__proto__.name = "ee"

a.__proto__.printName()
a.printName()
console.log(a)