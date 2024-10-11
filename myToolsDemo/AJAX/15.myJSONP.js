//手写JSONP

//回调函数
//下面代码写在<script>标签中
function callback(resp) {
    console.log(resp)
}

function myJSONP(url) {
    const script = document.createElement("script")
    script.src = url
    script.onload(function(){
        script.remove()
    })
    document.body.appendChild(script)
}