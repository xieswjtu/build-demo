import imgUrl from "@/asset/image/loading0.svg"
import styles from "./loading.module.less"
//创建img元素，并给予唯一标识
function createLoadingImg() {
    const img = document.createElement("img")
    img.dataset.role = "loading"
    img.src = imgUrl
    img.className = styles.loading
    return img
}
//根据唯一标识找到img元素
function getLoadingImage(el) {
    return el.querySelector("img[data-role=loading]")
}

//导出指令的配置对象
// export default {
//     bind() {
            //只调用一次，指令第一次绑定到元素时调用。在这里可以进行一次性初始化的设置
//         //根据binding.value的值，决定创建或删除img元素
//     },
//     update() {
           //被绑定元素插入父节点时调用
//         //根据binding.value的值，决定创建或删除img元素
//     }
// }
//由于bind 和 update 中逻辑一样，采用合并写法

export default function(el, binding) {
    const curImg = getLoadingImage(el)
    if (binding.value) {
        if (!curImg){
            const img = createLoadingImg()
            el.appendChild(img)
        }
    } else {
        if (curImg){
            curImg.remove()
        }
    }
}