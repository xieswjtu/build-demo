import Vue from 'vue'
import App from './App.vue'
import router from './router'
import "./styles/global.less"
import showMessage from './utils/showMessage'
import "@/mock"

Vue.config.productionTip = false
 window.showMessage = showMessage


new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
