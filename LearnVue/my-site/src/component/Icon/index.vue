<template>
    <i class="iconfont icon-container" :class = fontClass :style="{ fontSize: size + 'px' }"></i>
</template>

<script>
const classMap = {
    home: "icon-aichegujiabeifen5",
    user: "icon-user-fill",
    code: "icon-resource",
    blog: "icon-chuangzuo",
    chat: "icon-huati",
    success: "icon-success-filling",
    error: "icon-prompt-filling",
    warn: "icon-warning-filling",
    close: "icon-delete-filling",
    empty: "icon-empty",
    weixin:"icon-icon-test7",
    github: "icon-icon-test6",
    info: "icon-prompt-filling",
    arrowup: "icon-up",
    arrowdown:"icon-down"
}
export default {
    props: {
        type:{
            type: String,
            require: true,
        },
        size: {
            type:Number,
            default:16
        }
    },
    computed:{
        fontClass(){
            return classMap[this.type]
        }
    }
}

</script>

<style>
@import "//at.alicdn.com/t/c/font_4939226_gn7hq2ou4ic.css";

</style>