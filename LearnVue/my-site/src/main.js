import Vue from 'vue'
import App from './App.vue'
import router from './router'
import "./styles/global.less"
import "@/mock"

Vue.config.productionTip = false

//全局引入自定义指令
import vLoading from '@/directives/loading'
import vLazy from '@/directives/lazy'
Vue.directive("loading", vLoading)
Vue.directive("lazy", vLazy)



new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
