<template>
  <div id="app">
     <Avatar 
         url="https://img2.baidu.com/it/u=2798934738,3124074903&fm=253&fmt=auto&app=120&f=JPEG?w=800&h=800"
         :size = 100
     />
     <Icon type="info" />
     <Pager 
       :current="current"
       :total=600
       @pageChange="handlePageChange($event)"
     />
  </div>
</template>



<script>
import Avatar from './component/Avatar.vue';
import Icon from './component/Icon.vue';
import Pager from './component/Pager.vue'
export default {
  data() {
    return{
      current: 1,
    }
  },
  components: {
    Avatar,
    Icon,
    Pager,
  },
  methods: {
    handlePageChange(newPage){
      console.log(newPage)
      this.current = newPage
    }
  }
}
</script>