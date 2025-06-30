<template>
    <div class="blog-container">
        <Layout>
            <template>
                <BlogList/>
            </template>
            <template #right>
                <BlogCategory/>
            </template>
        </Layout>
    </div>
</template>

<script >

import Layout from "@/component/Layout"
import BlogCategory from "./components/BlogCategory.vue"
import BlogList from "./components/BlogList.vue"
export default {
    components : {
        // RightList,
        Layout,
        BlogCategory,
        BlogList,

    },
    data() {
        return {
            list:[
                {
                    name:"a",
                    isSelect: true,
                    children: [],
                },
                {
                    name:"b",
                    isSelect: false,
                    children: [
                        {
                            name:"b-1",
                            isSelect: false,
                            children: [],
                        },
                        {
                            name:"b-2",
                            isSelect: false,
                            children: [
                                {
                                    name:"b-2-1",
                                    isSelect: false,
                                    children: [],
                                },
                                {
                                    name:"b-2-2",
                                    isSelect: false,
                                    children: [],
                                },
                            ],
                        },
                    ],
                },
                {
                    name:"c",
                    isSelect: false,
                    children: [],
                },
            ]
        }
    },
}
</script>

<style >

</style>
