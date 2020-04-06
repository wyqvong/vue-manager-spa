<template>
  <div class="app-main">
    <transition name="transform" mode="out-in">
      <!-- 设置key属性，进入不同的子路由时重新触发生命钩子 -->
      <router-view :key="key" />
    </transition>
  </div>
</template>

<script>
export default {
  name: 'AppMain',
  computed: {
    key() {
      return this.$route.path
    }
  }
}
</script>

<style lang="scss" scoped>
.app-main{
  height: calc(100vh - 100px);
  /* max-height: calc(100vh - 114px); */
  width: calc(100vw - 180px);
  overflow: auto;
  margin-left: 180px;
  padding: 20px;
  &::-webkit-scrollbar {
  display: none;
  }
}

</style>
