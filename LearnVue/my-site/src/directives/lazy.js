import eventBus from "@/eventBus";
import debounce from 'lodash/debounce';
import defaultGif from '@/asset/gif/imgLoading.gif'

let imgs = []
function setImage(img){
    img.dom.src = defaultGif
    const rect = img.dom.getBoundingClientRect() //得到图片在视口内的矩形区域
    const height = rect.height || 150
    if(rect.top < window.innerHeight + 100 && rect.top > -height){
        //在视口范围内
        const tempImg = new Image()
        tempImg.onload = function(){
            img.dom.src = img.src
            imgs = imgs.filter((i)=> i !== img) //将已经处理过的图片移除
            tempImg.onload = null; // 清除事件引用
            tempImg.src = "";      // 释放资源,防止内存泄露
        } 
        tempImg.src = img.src
    }
}

//调用该函数，设置哪些合适的图片
function setImages() {
    for (const img of imgs){
        //处理该图片
        setImage(img)
    }
}
function handleScroll() {
    setImages()
    console.log(1)
}

eventBus.$on("mainScroll",debounce(handleScroll,50))

export default {
    inserted(el, bindings) {
        const img ={
            dom:el,
            src:bindings.value,
        }
        imgs.push(img)
        setImage(img)
    },
    unbind(el){
        imgs = imgs.filter((img) => img.dom !== el)
    }
}