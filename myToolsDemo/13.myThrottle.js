//手写节流
function myThrottle(fn, t) {
    let timer = null
    return function(){
        if (!timer) {
            timer = setTimeout(() =>{
              fn()
              timer = null //在setTimeout中无法用clearTimeout，因为定时器还在运作。
            }, t)
        }
    }
}