# 指令

## 一、条件渲染指令 ​​

### 1. v-if / v-else / v-else-if​​

    ​​作用​​：根据表达式真假条件渲染或销毁元素。
    ​​特性​​：惰性渲染​​：初始条件为假时元素不会被渲染。
    ​​性能消耗​​：适合条件切换不频繁的场景（如权限控制）。

​​示例​​：

    <p v-if="score >= 90">优秀</p>
    <p v-else-if="score >= 60">及格</p>
    <p v-else>不及格</p>

​​2. v-show​​

    ​​作用​​：通过 display: none 控制元素显隐，元素始终存在于 DOM 中。
    ​​特性​​：高频切换优化​​：适合频繁显隐的场景（如选项卡切换）。
    ​​不支持 <template> 标签​​。

​​示例​​：

    <div v-show="isLoading">加载中...</div>

## ​​二、循环渲染指令​​

### 1. v-for​​

    ​​作用​​：遍历数组、对象或数字生成动态内容。
    ​​关键特性​​：必须添加 :key​​：唯一标识符优化虚拟 DOM 渲染。
    ​​遍历参数格式​​：(item, index)（数组）或 (value, key)（对象）。

​​示例​​：

```javascript
<!-- 遍历数组 -->
<li v-for="(item, index) in items" :key="item.id">
  {{ index }} - {{ item.name }}
</li>

<!-- 遍历对象 -->
<div v-for="(value, key) in user">{{ key }}: {{ value }}</div>

<!-- 遍历数字范围 -->
<span v-for="n in 5">{{ n }}</span>
```

### ​​2. 高级技巧​​

    ​​避免与 v-if 混用​​：优先用计算属性过滤数据，而非直接结合 v-if。
    
    computed: {
      activeItems() {
        return this.items.filter(item => item.isActive);
      }
    }

## ​​三、数据绑定指令​​ ​

### 1. v-model​​

    ​​作用​​：在表单元素上实现双向数据绑定。
    ​​适用场景​​：文本输入框、多行文本域、复选框、单选按钮、选择框。
    ​修饰符​​：
    .lazy：输入停止后更新（如防抖场景）。
    .number：自动将输入转为数字。
    .trim：去除首尾空格。

​​示例​​：

    <!-- 基础用法 -->
    <input v-model="message" placeholder="输入内容">
    
    <!-- 复选框（数组绑定） -->
    <input type="checkbox" v-model="hobbies" value="篮球">
    <input type="checkbox" v-model="hobbies" value="足球">
    
    <!-- 自定义组件双向绑定（Vue 3） -->
    <CustomInput v-model="customValue" />

### ​<font color= #800 >2. v-bind​</font>

​​作用​​：动态绑定 HTML 属性或组件 props。
​​简写​​：（如 :src="imageUrl"）。
特殊：绑定对象形式（动态属性，取决于：后的值为true 或 false）​​：

```javascript
​<div :class="{ 
   active: isActive, 
   'text-danger': hasError }"
></div>
```

## ​四、内容渲染指令​​ ​​

### 1. v-text 与 v-html​​

    ​​v-text​​：更新元素的 textContent（等同于 {{ }} 插值）。
    ​​v-html​​：更新元素的 innerHTML（注意防范 XSS 攻击）。

### ​​2. v-pre 与 v-cloak​​

    ​​v-pre​​：跳过元素编译，显示原始 Mustache 标签。
    ​​v-cloak​​：隐藏未编译的模板直到 Vue 实例就绪（需配合 CSS）：
    [v-cloak] { display: none; }

## ​​五、事件处理指令​​ ​​

### 1. v-on​​

    ​​作用​​：监听 DOM 事件并执行方法。
    ​​简写​​：@（如 @click="handleClick"）。
    ​​修饰符​​：
    .stop：阻止事件冒泡。
    .prevent：阻止默认行为。
    .once：事件仅触发一次。

## ​​六、高级指令与自定义​​

### <font color= #800 size=>​​1. 计算属性 computed</font>​

​​特性​​：对计算出的结果缓存，再次使用直接读取缓存，依赖项变化了会自动重新计算。

​​适用场景​​：复杂计算、数据格式化、依赖多数据源。

语法：写在computed配置项中，作为属性直接使用，this.计算属性 或 {{计算属性}}

​​示例​​：

```javascript
​computed: {
  totalPrice() {
    return this.items.reduce((sum, item) => 
    sum + item.price * item.quantity, 0);
  }
}
```

扩展：计算属性和方法有什么区别？

计算属性本质是包含getter和setter的方法

当获取计算属性时，实际上是在调用计算属性的getter方法。vue会收集计算属性的依赖，并缓存计算属性的返回结果。只有当依赖变化后才会重新进行计算。

```javascript
conputed{
    propName{
      get(){
        //getter
      },
      set(val){
        //setter
      }
    }
}
```

### ​​2. 侦听器 watch​​

    ​​特性​​：
    深度监听​​：deep: true 监听对象内部变化。
    ​​立即执行​​：immediate: true 初始化时触发回调。
    示例​​：
    watch: {
      user: {
        handler(newVal) {
          console.log('用户信息变化:', newVal);
        },
        deep: true
      }
    }

### ​​3. 自定义指令​​

    ​​全局注册​​:
    Vue.directive('focus', {
      inserted(el) {
        el.focus();
      }
    });
    局部注册​​：
    directives: {
      'highlight': {
        bind(el, binding) {
          el.style.backgroundColor = binding.value || 'yellow';
        }
      }
    }

# 六.内置组件

## 1.插槽（slot）

用于占位

# 其他问题

## Scoped

## 在vue中父组件传值给子组件props 加不加 ：（冒号）有什么区别？

在 Vue 组件中，向子组件的 `props` 传值时 ​**​加 `:`（冒号）和不加：（冒号）​**​ 的核心区别在于 ​**​数据传递方式​**​：  
​**​加 `:` 表示动态绑定（响应式数据）**，传递的值是 ​JavaScript 表达式的结果​​，支持任意类型（数字、布尔、对象、数组等）。

**​​不加 `:` 表示静态字符串传递。​**​