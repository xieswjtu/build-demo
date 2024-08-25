//通用事件绑定函数
const myEvent = function(el, type, selctor, fn) {
    if (fn === null) {
        fn = selctor
        selctor = null
    }
    el.addEventLisenter(type, e => {
        let target = e.target
        if (selctor) {
          if (target.match(selctor)){
            fn.call(target, e)
          }
        } else {
            fn.call(target,e)
        }
    })
}

//示例
//普通绑定
const btn1 = document.getElementById("btn1")
myEvent(btn1, "click", function(e){
    e.preventDefault()
    alert(this.innerHTML)
})

//代理绑定
const div3 = document.getElementById("div3")
myEvent(div3, "click", "a", function(e){
    e.preventDefault()
    alert(this.innerHTML)
})
//例子中的HTML的结构如下所示
{/* <div id="div3">
    <a href="#">a1</a><br>
    <a href="#">a2</a><br>
    <a href="#">a3</a><br>
    <button>加载更多。。。</button>
</div> */}
