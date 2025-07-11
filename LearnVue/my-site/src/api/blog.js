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

//获取单个博客内容
export async function getBlog(id){
    return await request.get(`/api/blog/${id}`)
}

//提交评论
export async function postComment(commentInfo){
    return await request.post("/api/comment",commentInfo)
}

//获取评论
export async function getComment(blogid, page=1, limit=10){
    return await request.get("/api/comment", {
        params: {
            blogid,
            page,
            limit,
        }
    })
}