<template>
    <div class="layout-container">
        <div class="left">
            <!-- 提供具名插槽，名为header -->
            <slot name="left"></slot>
        </div>
        <div class="main">
            <!-- 默认插槽名为default -->
            <slot></slot>           
        </div>
        <div class="right">
            <slot name="right"></slot>
        </div>

    </div>
</template>

<script >
export default {

}
</script>

<style scoped lang="less">
.layout-container {
    width: 100%;
    height: 100%;
    display:flex;
    .left,
    .right {
        flex: 0 0 auto;
        overflow: hidden;
    }
    .main {
        flex: 1 1 auto;
        overflow: hidden;
    }
}

</style>
