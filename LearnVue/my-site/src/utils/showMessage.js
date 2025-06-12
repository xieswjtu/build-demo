import getComponentRootDom from "./getComponentRootDom"
import Icon from "@/component/Icon"
import styles from "./showMessage.module.less"
/**
 * 
 * @param {String} content 消息内容
 * @param {String} type 消息类型 info error success warn
 * @param {Number} duration 多久后消失
 * @param {HTMLElement} container 容器，消息会显示到该容器正中；如果不传，则显示到页面正中
 */

export default function({content, type = "info", duration=2000, container}) {
    //创建消息元素
    const div = document.createElement("div");
    const iconDom = getComponentRootDom(Icon, {
        type
    })
   
    div.innerHTML = `<span class="${styles.icon}">${iconDom.outerHTML}</span><div>${content}</div>`
     console.log(div)
    //设置样式
    const typeClassName = styles[`message-${type}`]; //类型样式名
    div.className = `${styles.message} ${typeClassName}`
    //将div加入容器中
    if (!container){
        container = document.body
    } else {
        //容器的position是否改动过
        if (getComputedStyle(container).position === "static") {
            container.style.position = "relative"
        }
    }
    container.appendChild(div)

    //强行又渲染一次，回到正常位置，产生动画
    div.clientHeight //强行触发回流
    div.style.opacity = 1;
    div.style.transform = `translate(-50%, -50%)`;
    //等一段时间消失
    setTimeout(()=>{
        div.style.opacity = 0;
        div.style.transform =`translate(-50%, -50%) translateY(-25px)`
        div.addEventListener("transitionend", function(){
            div.remove()
        }, {once:true})
    },duration)

    
}