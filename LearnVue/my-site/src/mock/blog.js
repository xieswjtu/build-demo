import Mock from "mockjs"
import qs from "querystring"

//Mock快速生成多条数据，简洁写法(Mock.js的数据模板语法)示例
Mock.mock("/api/blogtype", "get", {
    code: 0,
    msg: "",
    "data|10-20": [
        {
            "id|+1" : 1,
            name: "分类@id",
            "articleCount|0-300": 0,
            "order|+1" : 1,
        }
    ]
})

Mock.mock(/^\/api\/blog(\?.+)?$/, "get", function(options){
    const query = qs.parse(options.url);
    return Mock.mock({
        code: 0,
        msg: "",
        data: {
            "total|2000-3000" : 0,
            [
                `row|${ query.limit ||10}`
            ]:[
                {
                    id:"@guid",
                    title: "@ctitle(1,50)",
                    description: "@cparagraph(1,10)",
                    category: {
                        "id|1-10" : 0,
                        name: "分类@id",
                    },
                    "scanNumber|0-3000" : 0,
                    "commentNumber|0-300" : 30,
                    "thumb": ["@image(300x250, @color, #fff, @natural)",null],
                    createDate: `@date('T')`,
                },
            ]
        }
    })
})