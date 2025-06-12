import Vue from "vue";

/**
 * 获取某个组件渲染的Dom根元素
 * @param {*} comp 组件
 * @param {*} props 
 */
export default function(comp, props){
    const vm = new Vue({
        render: h => h(comp, {props})
    })
    vm.$mount()
    return vm.$el
}