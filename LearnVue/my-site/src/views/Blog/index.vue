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
    <!-- <RightList :list="list" @select="handleSelect"/> -->
    </div>
</template>

<script >
// import RightList from './components/RightList.vue';
import Layout from "@/component/Layout"
import BlogCategory from "./components/BolgCategory.vue"
import BlogList from "./components/BolgList.vue"
export default {
    methods: {
        handleSelect(item) {
            console.log(item)
        }

    },
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
