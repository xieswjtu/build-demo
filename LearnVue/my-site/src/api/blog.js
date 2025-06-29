import request from "./request";

//获取博客列表
export  async function getBlogs(page=1, limit=10, categoryId=-1){
    return await request.get("/api/blog", {
        params: {
            page,
            limit,
            categoryId,
        }
    })
}

//获取博客分类
export  async function getBlogType(){
    return await request.get("/api/blogtype")
}