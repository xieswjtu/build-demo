<template>
    <div class="home-container" ref="container">
        <div 
            class="carousel-container" 
            :style="{ marginTop,}" 
        >
            <div 
            class="image"
            v-for="(item, index) in banner"
            :key = index 
            >
                <Carouselitem :carousel="item" />
            </div>
        </div>
        <div 
            v-show="index>=1" 
            @click="switchTo(index-1)" 
            class="icon icon-up"
        >
            <Icon type="arrowup" :size=50 />
        </div>
        <div 
            v-show="index<banner.length-1" 
            @click="switchTo(index+1)" 
            class="icon icon-down"
        >
            <Icon type="arrowdown" :size=50 />
        </div>
        <ul class="indicator">
            <li 
               :class="{active: index===i}" 
               v-for="(item, i) in banner" 
               :key="i"
            >
            </li>
        </ul>
    </div>
</template>

<script >
import { getBanners } from "@/api/banner"
import Icon from "@/component/Icon"
import Carouselitem from "./Carouselitem.vue"
import throttle from 'lodash/throttle'; // 引入节流函数
export default {
    components: {
        Icon,
        Carouselitem
    },
    data() {
        return{
            banner: [],
            index:0, //当前显示的是第几张轮播图
            containerHeight:0, //整个容器的高度
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
    mounted() {
        this.containerHeight = this.$refs.container.clientHeight
        window.addEventListener("resize", this.handleResize)

        //添加滚轮事件监听
        this.$refs.container.addEventListener('wheel', this.handleWheel);
    },
    destroyed() {
        window.removeEventListener("resize", this.handleResize)
        // 移除滚轮事件监听
        this.$refs.container.removeEventListener('wheel', this.handleWheel);
        this.handleWheel.cancel(); // 取消节流函数中待执行的调用
    },
    computed: {
        marginTop(){
            return -this.index * this.containerHeight + "px"
        },
    },
    methods: {
        switchTo(i) {
            this.index = i
        },
        handleResize(){
            this.containerHeight = this.$refs.container.containerHeight //页面尺寸变化重新计算高度
        },
        // 滚轮事件处理（使用节流）
        handleWheel: throttle(function(event) {
        // 根据滚轮方向切换图片
        if (event.deltaY > 5 && this.index < this.banner.length - 1) {
            // 向下滚动：切换到下一张
            this.switchTo(this.index + 1);
        } else if (event.deltaY < -5 && this.index > 0) {
            // 向上滚动：切换到上一张
            this.switchTo(this.index - 1);
        }
        }, 500) // 500ms内只触发一次[10](@ref)
    }
}
</script>

<style scoped lang="less">
@import "~@/styles/mixin.less";
@import "~@/styles/var.less";
.home-container {
    width: 100%;
    height: 100%;
    position: relative;
    overflow: hidden; 
}
.carousel-container {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    transition: 500ms;
    .image {
        height: 100%;
        width: 100%;
        
    }
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
.indicator{
    .self-center();
    transform: translateY(-50%);
    left:auto;
    right: 20px;
    li {
        list-style-type: none; // 关键：禁用默认标记
        &::marker {
        display: none; // 双保险：隐藏伪元素
        }
        width: 7px;
        height: 7px;
        border-radius: 50%;
        background: @word;
        cursor: pointer;
        margin-bottom: 10px;
        border: 1px solid #fff;
        box-sizing: border-box;
        &.active { //&连接器与父级合并，使得该属性能作用于li上
            background: #fff;
        }
    }
    
}
</style>
