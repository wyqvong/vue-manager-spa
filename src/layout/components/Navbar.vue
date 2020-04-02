<template>
  <div class="navbar">
    <logo />
    <div class="right-menu">
      <el-dropdown class="avatar-container" trigger="click">
        <div class="user-name">{{ username }}</div>
        <div class="avatar-wrapper">
          <img :src="avatar" class="user-avatar">
          <i class="el-icon-caret-bottom" />
        </div>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
import Logo from '@/components/logo'

export default {
  name: 'Navbar',
  components: {
    Logo
  },
  data() {
    return {
      username: '王大大'
    }
  }
}
</script>

<style lang="scss" scoped>
.navbar {
  height: 50px;
  overflow: hidden;
  background: #333333;

  .right-menu {
    float: right;
    height: 100%;
    line-height: 50px;

    .avatar-container {
      margin-right: 30px;
      display: flex;

      .user-name {
        color: #ffffff;
        font-size: 18px;
        margin-right: 10px;
        cursor:pointer;
      }

      .avatar-wrapper {
        margin-top: 5px;
        position: relative;

        .user-avatar{
          background-color: #E39412;
          cursor:pointer;
          width: 40px;
          height: 40px;
          border-radius: 50%;
        }
      }
    }
  }
}
</style>
