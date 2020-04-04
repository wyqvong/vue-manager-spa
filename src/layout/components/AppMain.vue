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

<style scoped>
.app-main{
  min-height: calc(100vh - 50px);
  width: 100%;
  overflow: hidden;
}
</style>
