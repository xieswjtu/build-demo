<template>
    <div class="avatar-container" >
        <img 
        class="avatar-img" 
        :src = "url" 
        :style = "{width: size+'px', height: size+'px'}"
        :alt="userText || '用户头像'"
        >
        <div class="user-name">{{userName}}</div>
    </div>
</template> 

<script>
export default {
    props: {
        url :{
            type: String,  
            required: true, //属性必传
        },
        size :{
            type: Number,
            default: 80, //设置默认值
        },
        userName :{
            type: String,  
            default:"user"
        },       
    }
}

</script>

<style scoped lang="less">
@import "~@/styles/var.less";
.avatar-container{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    .avatar-img{
        border-radius: 50%;
        object-fit: cover; /*防止图片宽高不一致出现拉伸*/
    }
    .user-name{
        font-size: 20px;
        font-weight: bold;
        padding: 18px;
        height: 20px;
        line-height: 20px;
        color: @gray;
    }
}
</style>