const f = function(){
    f.x = function(){
        console.log(1)
    }
    this.x = function(){
        console.log(2)
    }
}
f.prototype.x = function(){
    console.log(3)
}
f.x = function(){
    console.log(4)
}

f.x()
const obj = new f
obj.x()
f.x()
//输出 4 2 1