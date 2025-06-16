import Mock from "mockjs"

Mock.mock("/api/banner", "get",{
    code: 0,
    msg: "",
    data: [
        {
            title: "1.laskhgflkashg"
        },
        {
            title: "2.jsahgjkfasf"
        },
        {
            title: "3.ajksfghkjgjk"
        },
    ]
})