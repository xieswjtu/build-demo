module.exports = {
    mode: "develpment",
    module: {
        rules: [
            {
                test: /index\.js$/, //正则表达式，匹配模块的路径
                use: [
                    {
                        loader: "", //加载器的路径
                        options: {

                        }
                    } //每个加载器的使用是一个对象
                ] //匹配到了之后，使用哪些加载器
            }, //规则1
            // {} //规则2
        ],//模块的匹配规则
    }
}