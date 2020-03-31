<template>
  <div class="login">
    <div class="main">
      <el-form ref="loginForm" :model="loginForm" :rules="loginRules">
        <div class="title-container">
          <h3 class="title">LOGIN FORM</h3>
        </div>
        <el-form-item>
          <el-input
            ref="username"
            v-model="loginForm.username"
            name="username"
            placeholder="Username"
            type="text"
          />
        </el-form-item>
        <el-form-item>
          <el-input
            ref="password"
            v-model="loginForm.password"
            placeholder="Password"
            name="password"
            @keyup="handleLogin()"
          />
        </el-form-item>
        <el-button @click="handleLogin()">Login</el-button>
      </el-form>
    </div>
  </div>
</template>

<script>
import { validUsername, validPassword } from '@/utils/validate'
export default {
  name: 'Login',
  data() {
    const validateUsername = (rule, value, callback) => {
      if (validUsername(value)) {
        callback()
      } else {
        callback(new Error('请输入合法的用户名'))
      }
    }
    const validatePassword = (rule, value, callback) => {
      if (validPassword(value)) {
        callback()
      } else {
        callback(new Error('请输入3~12位的密码'))
      }
    }
    return {
      loginForm: {
        username: 'admin',
        password: '123456'
      },
      loginRules: {
        username: [{ required: true, trigger: 'blur', validator: validateUsername }],
        password: [{ required: true, trigger: 'blur', validator: validatePassword }]
      },
      loading: false,
      redirect: undefined
    }
  },
  methods: {
    handleLogin() {
      // 表单验证
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          this.loading = true
          this.$store.dispatch('user/login', this.loginForm).then(() => {
            this.$router.push({ path: this.redirect || '/' })
            this.loading = false
          }).catch(() => {
            this.loading = false
          })
        } else {
          console.log('Error Submit!!!')
          return false
        }
      })
    }
  }
}
</script>

<style lang="scss">

</style>
