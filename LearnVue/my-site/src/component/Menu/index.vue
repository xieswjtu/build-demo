<template>
    <div class="menu-container">
        <RouterLink
        v-for="(item, index) in  items"
        :key="index"
        :to="item.link"
        :class="{selected:isSelected(item)}"
        >
          <Icon :type="item.icon" />
          <div>{{ item.title }}</div>
        </RouterLink>
    </div>
</template>

<script >
import Icon from '@/component/Icon'
export default {

    components:{
        Icon
    },
    data() {
        return {
            items: [
                {
                    link:"/",
                    title:"首页",
                    icon:"home"
                },
                {
                    link:"/blog",
                    title:"文章",
                    icon:"blog",
                    startWith:true
                },
                {
                    link:"/about",
                    title:"关于我",
                    icon:"user"
                },
                {
                    link:"/project",
                    title:"项目",
                    icon:"code"
                },
                {
                    link:"/message",
                    title:"留言板",
                    icon:"chat"
                },
            ]
        }
    },
    methods: {
        isSelected(item){
            const path = item.link.toLowerCase() //菜单地址
            const curPath = location.pathname.toLowerCase() //当前浏览器路径
            if (item.startWith){
                return curPath.startsWith(path)
            } else {
                return curPath === path

            }
        },
    },
}
</script>

<style scoped lang="less">
@import "~@/styles/var.less";
.menu-container{
    margin: 24px 0;
    color: @gray;
    a {
        font-size: 18px;
        height: 60px;
        display: flex;
        align-items: center;
        text-indent: 30px;
        .icon-container{
            width: 24px;
            height: 16px;
        }
        &:hover {
            color: #fff ;
        }
    }
    .selected {
        background: #2d2d2d;
    }
}
</style>
