<template>
    <img 
    class="avatar-container" 
    :src = "url" 
    :style = "{width: size+'px', height: size+'px'}">
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
        }
    }
}

</script>

<style>
.avatar-container{
    border-radius: 50%;
    object-fit: cover; /*防止图片宽高不一致出现拉伸*/
    display: block; 
}
</style>