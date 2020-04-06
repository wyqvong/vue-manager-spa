<template>
  <span class="logo-title">{{ title }}</span>
</template>

<script>
export default {
  name: 'Logo',
  data() {
    return {
      title: 'YK管理系统'
    }
  }

}
</script>

<style lang="scss" scoped>
.logo-title{
  color: #ffffff;
  height: 50px;
  line-height: 50px;
  float: left;
  margin-left: 28px;
  cursor: default;
}
</style>
