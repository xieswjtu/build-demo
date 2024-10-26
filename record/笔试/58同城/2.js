var v=100
function fn1(){
    this.v=300
    return ()=>{
        let v=200
        console.log(this.v)
    }
}
fn1()()
console.log(v)