
<template>
    <ul class="right-list-container">
        <li v-for="(item, index) in list"  :key="index">
            <span 
            :class="{active: item.isSelect}"
            @click="handleClick(item)"
            >
                {{ item.name }}
            </span>
        <!-- 显示当前组件 -->
         <RightList :list="item.children" @select="handleClick(item)"/>
        </li>
    </ul>
</template>

<script >
export default {
    //组件递归嵌套
    name: "RightList",
    //给当前组件命名，方便递归
    props: {
        list: {
            type: Array,
            default: ()=>{}
        }
    },
    methods: {
        handleClick(item) {
            this.$emit("select", item)
        }
    }
}
</script>

<style scoped lang="less">
@import "~@/styles/var.less";
.right-list-container {
    list-style: none;
    padding: 0;
    .right-list-container {
        margin-left: 1em;
    }
    li {
        min-height: 40px;
        line-height: 40px;
        span {
            cursor: pointer;
        }
        & .active {
            color: @warn;
            font-weight: bold;
        }
    }
}

</style>
