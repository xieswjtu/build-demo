import routes from "./routes"
import Vue from "vue"
import VueRouter from "vue-router"

Vue.use(VueRouter); //使用Vue插件

const router = new VueRouter({
    routes,
    mode: "history"
})
export default router