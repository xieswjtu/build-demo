<template>
    <div class="site-aside-container">
        <Avatar 
            url="https://img2.baidu.com/it/u=2798934738,3124074903&fm=253&fmt=auto&app=120&f=JPEG?w=800&h=800"
            :size=100
            userName="用户名"
        />
        <Menu></Menu>
        <Contact text="weix2187912" iconType="weixin"/>
        <Contact text="asg38287473287" iconType="github"/>

    </div>
</template>

<script >
import Avatar from '@/component/Avatar';
import Contact from '@/component/Contact'
import Menu from '@/component/Menu'
export default {
  components: {
    Avatar,
    Contact,
    Menu,
  },
}
</script>

<style scoped lang="less">
@import "~@/styles/var.less";
.site-aside-container{
    background-color:@dark;
    padding: 20px 0;
    height: 100%;
    box-sizing: border-box;
    overflow-x: hidden;
    overflow-y: auto;
}

.avatar-container {
    margin: 20px auto;
}

</style>
