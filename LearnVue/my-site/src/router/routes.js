import Home from "@/views/Home/index.vue"
import About from "@/views/About/index.vue"
import Blog from "@/views/Blog/index.vue"
import Project from "@/views/Project/index.vue"
import Message from "@/views/Message/index.vue"

export default [
    { path: "/", component: Home },
    { path: "/about", component: About },
    { path: "/blog", component: Blog },
    { path: "/project", component: Project },
    { path: "/message", component: Message },
]