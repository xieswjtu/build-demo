//配置全局基础配置
import axios from "axios"
let request = axios.create({
    baseURL:"http://localhost:3000",
    timeout:30*1000,
    responseType:"json",
})