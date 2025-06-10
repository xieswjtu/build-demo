<template>
  <div class="app-container">
    <Layout>
      <template #left>
        <div class="aside">
          <SiteAside/>
        </div>
      </template>
      <template>
        <RouterView />
      </template>
    </Layout>
     <!-- <Pager 
       :current="current"
       :total=500
       @pageChange="handlePageChange($event)"
     /> -->
  </div>
</template>



<script>
// import Pager from '@/component/Pager'
import SiteAside from '@/component/SiteAside'
import Layout from '@/component/Layout'
export default {
  data() {
    return{
      current: 1,
    }
  },
  components: {
    // Pager,
    SiteAside,
    Layout,
  },
  methods: {
    handlePageChange(newPage){
      console.log(newPage)
      this.current = newPage
    }
  }
}
</script>

<style lang="less" scoped>
@import "~@/styles/mixin.less";
.app-container{
  .self-fill();
  background: red
}
.aside{
  width: 250px;
  height: 100%;
  background: black;
}
</style>