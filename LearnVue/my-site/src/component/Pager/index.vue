<template>
    <div class="pager-container" v-if="pageNumber > 1">
        <div class="container-box">
        <a  @click=handleClick(1) :class="{disabled: current === 1}">|&lt;&lt;</a>
        <a  @click=handleClick(current-1) :class="{disabled: current === 1}">&lt;&lt;</a>
        <a           
          v-for="(n, i) in numbers" 
          :key="i" 
          :class="{active: n === current}"
          @click=handleClick(n)>
          {{ n }}
        </a>
        <a  @click=handleClick(current+1) :class="{disabled: current === pageNumber}">&gt;&gt;</a>
        <a  @click=handleClick(pageNumber) :class="{disabled: current === pageNumber}">&gt;&gt;|</a>
        </div>
    </div>
</template>

<script >
export default {
    props: {
        current: {
            type: Number,
            default: 1,
        },
        total: {
            type: Number,
            default: 0,
        },//总数据条数
        limit: {
            type: Number,
            default: 10,
        },//每页数据条数
        visibleNumber: {
            type: Number,
            default: 10,
        },//可见页码数
    },
    computed: {
        pageNumber() {
            return Math.ceil(this.total / this.limit)
        },
        visibleMin() {
            let min = this.current - Math.floor(this.visibleNumber/2)
            if (min < 0){
                min = 1
            }
            return min
        },
        visibleMax() {
            let max = this.visibleMin + this.visibleNumber - 1
            if (max > this.pageNumber){
                max = this.pageNumber
            }
            return max
        },
        numbers() {
            let arr = []
            for (let i=this.visibleMin ; i<=this.visibleMax; i++){
                arr.push(i)
            }
            return arr
        }
    },
    methods: {
        handleClick(newPage){
            if(newPage < 1){
                newPage = 1
            }
            if(newPage > this.pageNumber){
                newPage = this.pageNumber
            }
            if(newPage === this.current){
                return
            }
            this.$emit("pageChange",newPage)
        },
    }

}

</script>

<style lang="less" scoped>
@import "~@/styles/var.less";
.pager-container{
    display: flex;
    justify-content: center;
    margin: 20px 0 ;
    .container-box{
        width: 700px;//页码条长度
        display: flex;
        justify-content: space-between;
        a {
            &.disabled {
                color: @lightWords;
                cursor: not-allowed; //鼠标样式

            }
            &.active {
                color: @word;
                font-weight: bold;
                cursor: text; //鼠标样式

            }
        }
        
    }
}

</style>
