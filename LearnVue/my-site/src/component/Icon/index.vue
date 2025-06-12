<template>
    <i class="iconfont icon-container" :class = fontClass></i>
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
    info: "icon-prompt-filling"
}
export default {
    props: {
        type:{
            type: String,
            require: true,
        },
    },
    computed:{
        fontClass(){
            return classMap[this.type]
        }
    }
}

</script>

<style>
@import "//at.alicdn.com/t/c/font_4939226_obrthhsqcqp.css";

</style>