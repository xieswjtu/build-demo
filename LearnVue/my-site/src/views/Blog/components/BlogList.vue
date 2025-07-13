<template>
    <div v-loading="isLoading" ref="container" class="blog-list-container">
        <ul>
            <li v-for="(item, index) in blogs.row" :key="index">
                <div class="thumb">
                    <router-link 
                    :to="{ 
                        name: 'DetailBlog', 
                        params: { id: item.id } 
                    }"
                    >              
                        <img v-lazy="item.thumb" :src="item.thumb" :alt="item.title">
                    </router-link>
                </div>
                <div class="main">
                    <router-link 
                    :to="{ 
                        name: 'DetailBlog', 
                        params: { id: item.id } 
                    }"
                    >
                        <h2>{{ item.title }}</h2>
                </router-link>
                    <div class="aside">
                        <span>日期：{{ formatDate(item.createDate) }}</span>
                        <span>浏览：{{ item.scanNumber }}</span>
                        <span>评论：{{ item.commentNumber }}</span>
                        <router-link 
                        :to="{ 
                            name: 'CategoryBlog', 
                            params: { categoryId: item.category.id } 
                        }"
                        >
                        {{ item.category.name }}
                        </router-link>
                    </div>
                    <div class="desc">
                        {{ item.description }}
                    </div>
                </div>
            </li>
        </ul>
        <Pager 
            v-if="blogs.total" 
            :total="blogs.total" 
            :current="routeInfo.page"
            :limit ="routeInfo.limit"
            @pageChange="handlePageChange"
        />
    </div>
</template>

<script >
import Pager from '@/component/Pager'
import {getBlogs} from "@/api/blog"
import { formatDate } from '@/utils';
import eventBus from "@/eventBus"; //事件总线，引入

export default {
    components: {
        Pager
    },
    data() {
        return {
            isLoading: true,
            blogs: {},
        }
    },
    methods:{
        formatDate,
        handlePageChange(newPage) {

            const query = {
                page: newPage,
                limit: this.routeInfo.limit
            }
            // 跳转代码
            if (this.routeInfo.categoryId === -1){
                this.$router.push ({
                    name: "Blog",
                    query
                })
            } else {
                this.$router.push ({
                    name: "CategoryBlog",
                    query,
                    params: {
                        categoryId: this.routeInfo.categoryId
                    }
                })
            }          

        }
    },
    computed: {
        //获取路由信息
        routeInfo() {
            const categoryId = +this.$route.params.categoryId || -1
            const page = +this.$route.query.page || 1
            const limit = +this.$route.query.limit || 10
            return {
                categoryId,
                page,
                limit,
            }
        }
    },
    watch: {
        $route: {
            async handler(newVal){
                this.isLoading = true
                this.$refs.container.scrollTop = 0
                this.blogs = await getBlogs(newVal.query.page,newVal.query.limit)  
                this.isLoading = false
            }
        }
    },
    async created() {
        this.blogs = await getBlogs()
        this.isLoading = false
    },
    mounted() {
        const container = this.$refs.container; // 获取滚动容器
        // console.log(container)
        container.addEventListener('scroll', () => {
        eventBus.$emit('mainScroll'); // 事件总线，派发滚动事件
        });
    },
    beforeDestroy() {
        // 移除事件监听避免内存泄漏
        const container = this.$refs.container; // 获取滚动容器
        container.removeEventListener('scroll', this.scrollHandler);
    }
}
</script>

<style scoped lang="less">
@import "~@/styles/var.less";
.blog-list-container {
    max-height: 100vh;
    line-height: 1.7;
    position: relative;
    padding: 20px;
    overflow-y: auto;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    scroll-behavior: smooth;
    ul {
        list-style: none;
        margin: 0;
    }
}
li {
    display:flex;
    padding: 15px 0;
    border-bottom: 1px solid @gray;
    .thumb {
        flex: 0 0 auto;
        margin-right: 15px;
        img {
            display: block;
            max-width: 200px;
            border-radius: 5px;
        }
    }
    .main {
        flex: 0 0 auto;
        h2 {
            margin: 0;
        }
    } 
    .aside {
        font-size: 12px;
        color: @gray;
        span {
            margin-right: 15px;
        }
    }
    .desc {
        margin: 15px 0;
        font-size: 14px;
        white-space: pre-wrap;
        width: 100vh;
    }
}


</style>
