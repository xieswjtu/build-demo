<template>
    <div class="home-container" ref="container">
        <div 
        class="image" 
        v-for="(item, index) in banner"
        :key = index
        >
            <div>
                {{ item.title }}
            </div>
        </div>
        <div class="icon icon-up">
            <Icon type="arrowup" :size=50 />
        </div>
        <div class="icon icon-down">
            <Icon type="arrowdown" :size=50 />
        </div>
        <ul class="indicator">
            <li v-for="(item, index) in banner" :key="index"></li>
        </ul>
    </div>
</template>

<script >
import { getBanners } from "@/api/banner"
import Icon from "@/component/Icon"
export default {
    components: {
        Icon
    },
    data() {
        return{
            banner: []
        }
    },
    // methods: {
    //     handleClick () {
    //         window.showMessage({content:"jsakfgahflkas",container:this.$refs.container})
    //         console.log(this.$refs)
    //     }
    // },
    async created() {
        this.banner = await getBanners()
    },
}
</script>

<style scoped lang="less">
@import "~@/styles/mixin.less";
@import "~@/styles/var.less";
.home-container {
    width: 100%;
    height: 100%;
    position: relative
}
.icon-cotainer{
    font-size: 50px;
}
.icon{
    .self-center();
    &.icon-up::before, 
    &.icon-down::before {
    content: none !important; /* 强制清除伪元素内容 */
    }
    color: @gray;
    &.icon-up{
        top:20px;
        animation: jump-up 2s infinite;
    }
    &.icon-down{
        top:auto;
        bottom: 16px;
        animation: jump-down 2s infinite;
    }
    @jump: 5px;
    @keyframes jump-up{
        0% {
            transform: translate(-50%, @jump);
        }
        50% {
            transform: translate(-50%, -@jump);
        }
        100% {
            transform: translate(-50%, @jump);
        }
    }
    @keyframes jump-down{
        0% {
            transform: translate(-50%, -@jump);
        }
        50% {
            transform: translate(-50%, @jump);
        }
        100% {
            transform: translate(-50%, -@jump);
        }
    }
}
</style>
