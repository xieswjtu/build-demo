//实际工程中闭包的应用
//闭包隐藏数据，只提供API
function createCache() {
    const data = {} //通过闭包隐藏数据不被外界访问。
    return {
        set: function (key, val) {
            data[key] = val
        },
        get: function (key) {
            return data[key]
        }//通过暴露的特定api修改数据
    }
}