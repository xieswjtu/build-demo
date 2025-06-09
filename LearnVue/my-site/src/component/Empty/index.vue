<template>
    <div class="empty-container">
        <Icon :type=iconType :style="{ fontSize: iconSize }"/> 
        <div :style="{fontSize: textSize}">{{ text }}</div>  
    </div>
</template>

<script >
import Icon from '../Icon'

export default{
    props: {
        text :{
            type: String,
            default: "无数据"
        },
        // 新增图标大小控制 
        iconSize: {
            type: String, 
            default: "100px" 
        },
        // 新增文本大小控制 
        textSize: {
            type: String,
            default: '20px' 
        },
        // 新增图标类型扩展
        iconType: {
            type: String,
            default: "empty"
        }
    },
    components: {
        Icon
    },
}

</script>

<style scoped lang="less">
@import "~@/styles/mixin.less";
@import "~@/styles/var.less";
.empty-container {
    .self-center();
    color: @gray;
    text-align: center;
}

</style>
