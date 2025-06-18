<template>
    <div 
    class="carousel-item-container" 
    ref="container"
    @mousemove="handleMousemove"
    @mouseleave="handleMouseleave"
    >
        <div class="carousel-image" :style="imagePosition" ref="image">
            <img :src="carousel.Img">
        </div>
        <div class="title">{{ carousel.title }}</div>
    </div>
</template>

<script >
export default{
    props: [
        "carousel"
    ],
    data() {
        return {
            containerSize: null,
            imageSize:null,
            mosueX: 0,
            mosueY: 0,
        }
    },
    computed: {
        //实现图片随鼠标移动抖动
        imagePosition() {
            if (!this.imageSize || !this.containerSize) {
                return
            }
            const extraWidth = this.imageSize.width - this.containerSize.width
            const extraHeight = this.imageSize.hegiht - this.containerSize.hegiht 
            const left = -extraWidth /this.containerSize.width * this.mosueX
            const top = -extraHeight/ this.containerSize.hegiht * this.mosueY
            return {
                transform: `translate(${left}px,${top}px)`
            }
        },
        center(){
            return {
                x: this.containerSize.width/2,
                y: this.containerSize.hegiht/2,
            }
        }
    },
    mounted() {
        this.setSize()
        window.addEventListener("resize", this.setSize)
        this.mosueX = this.center.x
        this.mosueY = this.center.y
    },
    destroyed() {
        window.removeEventListener("resize", this.setSize)
    },
    methods: {
        handleMousemove(e) {
            const rect = this.$refs.container.getBoundingClientRect();
            this.mosueX = e.clientX - rect.left;
            this.mosueY = e.clientY - rect.top
        },
        handleMouseleave() {
            this.mosueX = this.center.x
            this.mosueY = this.center.y
        },
        setSize() {
            this.containerSize = {
                width : this.$refs.container.clientWidth,
                hegiht : this.$refs.container.clientHeight
            }
            this.imageSize = {
                width : this.$refs.image.clientWidth,
                hegiht : this.$refs.image.clientHeight
            }         
        }
    }

}
</script>

<style scoped lang="less">
@import "~@/styles/mixin.less";
@import "~@/styles/var.less";
.carousel-item-container{
    width: 100%;
    height: 100%;
    color: #fff;
    position: relative;
    transition: 0.3s;
    overflow: hidden;
    .carousel-image{
        width: 110%;
        height: 110%;
        transition: 0.5s;
        img {
            width: 100%;
            height: 100%;
            object-fit: cover; /* 核心解决方案 */
            object-position: center; /* 确保图片居中显示 */
        }
    }
    .title {
        font-size: 50px;
        color: @gray;
        position: absolute;
        top: 50%;
        left:30px;
        letter-spacing: 5px;
        text-shadow: -1px 0 0 #000, 1px 0 0 #000, 0 -1px 0 #000, 0 1px 0 #000;
    }
}
</style>
