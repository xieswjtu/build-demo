const {CleanWebpackPlugin} = require("clean-webpack-plugin")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const CopyWebpackPlugin = require('copy-webpack-plugin')

const webpack = require("webpack")


module.exports = {
    mode: "develpment",
    dectool: "source-map",
    output: {
        filename:"scripts/[name].[chunkhash:5].js",
        publicPath: "/" //在某些loader中会使用，统一配置，拼接在路径前面（也可在loader里面单独配置）
    },
    module: { //针对模块的配置，目前版本只有两个配置，rules，noParse
        rules: [ //模块匹配规则，可以存在多个规则
            { //每个规则是一个对象
                test: /index\.js$/, //正则表达式，匹配模块的路径
                use: [
                    {
                        loader: "模块路径", //加载器的路径
                        options: {
                            //向对应loader传递额外的参数
                        }
                    } //每个加载器的使用是一个对象
                ] //匹配到了之后，使用哪些加载器
            }, //规则1
            {
                //file-loader： 生成依赖文件到输出目录，再将模块文件设置为：导出一个路径
                //url-loader： 将依赖文件转换为：导出一个base64格式的字符串
                test: /\.(png)|(gif)|(jpg)$/,
                use:[{
                    loader: "url-loader",
                    options: {
                        limit:false, //不限制任何大小，所有经过loader的文件进行base64编码返回
                        limit:100*1024, //只要文件不超过100*1024字节，则使用base64编码，否则交给file-loader处理
                        name: "img/[name].[hash:5].[ext]" //可以写配置传给file-loader
                    }
                }]
            }
            // {} //规则2
        ],//模块的匹配规则
    },
    plugins: [
        new CleanWebpackPlugin(), //自动清空dist目录，减少因代码修改而重复打包重复生成打包文件，而需要对旧文件进行的手动删改。

        new HtmlWebpackPlugin({
            template: "页面模板文件路径", //页面按什么模板生成
            chunks: [], //生成页面的js对应哪个chunk生成的js
        }), //自动生成页面

        new CopyWebpackPlugin([
            {from: "./public", to: "./"} //数组里面每个对象是一个复制规则
        ]), //复制静态文件到指定目录

        new webpack.DefinePlugin({
            PI: `Math.PI`, //相当于 const PI = Math.PI
        }), //全局变量定义插件，使用该插件定义一些常量值

        new webpack.BannerPlugin({
            banner:`
            hash:[hash]
            chunkhash:[chunkhash]
            name:[name]
            `
        }), //可以为每个chunk生成的文件头部添加一行注释，一般用于添加作者，公司，版权等信息

        new webpack.ProvidePlugin({
            $: "jquery",
            _: "lodash",
        }), //自动加载模块，而不必到处import或require
        //然后在任意源码中使用，
        // $("#item")
        //_.drop([1,2,3], 2)

    ],
    devServer: {
        port: 8000,
        open: true,
        proxy: { //代理规则
            '/api': { 
                target: "http://localhost:3000",
                changeOrigin: true, // 能更改请求头中的host和origin为新的target中的地址，当target是域名的话，则需要这个参数
                secure: false, // 不检查安全问题。 设置后，可以接受运行在 HTTPS 上，可以使用无效证书的后端服务器
              },
        }

    },
    stats: 'errors-warnings', //配置打包成功后显示的内容
}


//重下往上，反向运行loader