<template>
  <div class="navbar">
    <logo />
    <div class="right-menu">
      <el-dropdown class="avatar-container" trigger="click">
        <div class="avatar-wrapper">
          <div class="user-name">{{ username }}</div>
          <img src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" class="user-avatar">
        </div>
        <el-dropdown-menu slot="dropdown" class="user-dropdown">
          <router-link to="/account/profile">
            <el-dropdown-item>
              个人中心
            </el-dropdown-item>
          </router-link>
          <router-link to="/account/setting">
            <el-dropdown-item>
              个人设置
            </el-dropdown-item>
          </router-link>
          <el-dropdown-item divided>
            <span style="display:block;" @click="logout">退出登录</span>
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
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
  },
  computed: {
    ...mapGetters([
      'avatar'
    ])
  },
  methods: {
    async logout() {
      await this.$store.dispatch('user/logout')
      this.$router.push(`/login?redierct=${this.$route.fullPath}`)
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

    &:focus {
    outline: none;
    }

    .avatar-container {
      margin-right: 30px;
      display: flex;

      .avatar-wrapper {
        margin-top: 5px;
        display: flex;

        .user-name {
        color: #ffffff;
        font-size: 18px;
        margin-right: 10px;
        cursor:pointer;
       }

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
