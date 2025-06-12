const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  
  //开发环境跨域设置
  devServer:{
    proxy: {
      "/api": {
        targrt:"http://localhost:8080/"
      },
    }
  }
})
