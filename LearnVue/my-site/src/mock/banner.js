import Mock from "mockjs"

Mock.mock("/api/banner", "get",{
    code: 0,
    msg: "",
    data: [
        {
            title: "黑神话：悟空",
            Img:"https://pica.zhimg.com/v2-e531452d76fa8f399f8a37410d1d6b7c_1440w.jpg"

        },
        {
            title: "黑神话：悟空",
            Img:"https://pic2.zhimg.com/v2-d7285f42ecddc6978b32ba193f57a0ad_1440w.jpg"
        },
        {
            title: "黑神话：悟空",
            Img:"https://pica.zhimg.com/v2-1d784cfd913db4eeb275a15a6cd6afa2_1440w.jpg"
        },
    ]
})