<template>
  <div class="app-wrapper">
    <div class="main-container">
      <navbar />
      <sidebar class="sidebar-container" />
      <app-main />
    </div>
  </div>
</template>

<script>
import { Sidebar } from './components'
import Navbar from './components/Navbar'
import AppMain from './components/AppMain'

export default {
  name: 'Layout',
  components: {
    Navbar,
    Sidebar,
    AppMain
  },
  computed: {
    sidebar() {
      return this.$store.state.app.sidebar
    }
  }
}
</script>

<style lang="scss">
  .app-wrapper {
    display: flex;
    height: 100%;
    width: 100%;
  }
</style>
