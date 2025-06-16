const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  
  configureWebpack: {
    resolve: {
      fallback: {
        "url": require.resolve("url/")  // 解决 url 模块缺失问题
      }
    }
  },
  
  //开发环境跨域设置
  devServer:{
    proxy: {
      "/api": {
        target:"http://localhost:8080",
      },
    }
  }
})
