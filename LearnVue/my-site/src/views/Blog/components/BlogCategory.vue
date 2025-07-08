<template>
    <div class="blog-category-container" v-loading="isLoading">
        <div v-if="!isLoading">
            <h2>文章分类</h2>
            <RightList 
            :list="this.list" 
            @select="handleSelect"
            />        
        </div>
    </div>
</template>

<script >
import RightList from './RightList.vue';
import {getBlogType} from "@/api/blog"

export default {
    data() {
        return {
            datas: [],
            isLoading: true
        }
    },
    components: {
        RightList,
    },
    computed:{
        routeInfo() {
            const categoryId = +this.$route.params.categoryId || -1
            const page = +this.$route.query.page || 1
            const limit = +this.$route.query.limit || 10
            return {
                categoryId,
                page,
                limit,
            }
        },
        list() {
            const total = this.datas.reduce((a,b)=> a + b.articleCount,0)
            const res = [
                {
                    name:"全部",
                    id:-1,
                    articleCount:  total               
                },
                ...this.datas
            ]
            return   res.map(item=>({
                ...item,
                isSelect : this.routeInfo.categoryId === item.id
            }))
        }
    },
    methods: {
        handleSelect(item){
            console.log(item)
            const query = {
                page: 1,
                limit: this.routeInfo.limit
            }
            // 跳转代码
            if (item.id === -1){
                this.$router.push ({
                    name: "Blog",
                    query
                })
            } else {
                this.$router.push ({
                    name: "CategoryBlog",
                    query,
                    params: {
                        categoryId: item.id
                    }
                })
            }  

        }
    },
    async created() {
        this.datas = await getBlogType()
        this.isLoading =false
               
    }
}
</script>

<style scoped lang="less">
.blog-category-container{
    position: relative;
    width: 300PX;
    height: 100%;
    box-sizing: border-box;
    padding: 20PX;
    h2 {
        font-size: bold;
        letter-spacing: 2px;
        font-size: 1em;
        margin: 0;
    }
}

</style>
