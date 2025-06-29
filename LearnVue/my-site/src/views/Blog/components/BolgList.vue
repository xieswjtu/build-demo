<template>
    <div v-loading="isLoading" class="blog-list-container">
        <ul>
            <li v-for="(item, index) in blogs.row" :key="index">
                <div class="thumb">
                    <a href="" >
                        <img :src="item.thumb" :alt="item.title">
                    </a>
                </div>
                <div class="main">
                    <a href="">
                        <h2>{{ item.title }}</h2>
                    </a>
                    <div class="aside">
                        <span>日期：{{ item.createDate }}</span>
                        <span>浏览：{{ item.scanNumber }}</span>
                        <span>评论：{{ item.commentNumber }}</span>
                        <a href="">{{ item.category.name }}</a>
                    </div>
                    <div class="desc">
                        {{ item.description }}
                    </div>
                </div>
            </li>
        </ul>
        <Pager/>
    </div>
</template>

<script >
import Pager from '@/component/Pager'
import {getBlogs} from "@/api/blog"
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
    async created() {
        this.blogs = await getBlogs()
        this.isLoading = false
        console.log(this.blogs)
        console.log(this.blogs.row)
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
