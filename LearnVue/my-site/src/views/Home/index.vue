<template>
    <div class="home-container" ref="container">
     <h1>主页</h1>
     <button @click="handleClick">click</button>
    </div>
</template>

<script >

export default {
    methods: {
        handleClick () {
            window.showMessage({content:"jsakfgahflkas",container:this.$refs.container})
            console.log(this.$refs)
        }
    }
}
</script>

<style scoped>
.home-container{
    background: burlywood;
    height: 300px;
}
</style>
