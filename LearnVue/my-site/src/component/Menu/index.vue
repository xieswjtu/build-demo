<template>
    <div class="menu-container">
        <RouterLink
        v-for="(item, index) in  items"
        :exact = "item.exact"
        :key="index"
        :to="item.link"
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
                    icon:"home",
                    exact: true,
                },
                {
                    link:"/blog",
                    title:"文章",
                    icon:"blog",
                    exact: false, //是否激活精确匹配
                },
                {
                    link:"/about",
                    title:"关于我",
                    icon:"user",
                    exact: true,
                },
                {
                    link:"/project",
                    title:"项目",
                    icon:"code",
                    exact: true,
                },
                {
                    link:"/message",
                    title:"留言板",
                    icon:"chat",
                    exact: true,
                },
            ]
        }
    },
    // methods: {
    //     isSelected(item){
    //         const path = item.link.toLowerCase() //菜单地址
    //         const curPath = location.pathname.toLowerCase() //当前浏览器路径
    //         if (item.startWith){
    //             return curPath.startsWith(path)
    //         } else {
    //             return curPath === path

    //         }
    //     },
    // },
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
    // .selected {
    //     background: #2d2d2d;
    // }
    a.router-link-active {
        background: #2d2d2d;
    }
}
</style>
