<template>
  <div class="menu-wrapper">
    <template v-if="hasOneShowingChild(item.children,item) && (!onlyOneChild.children||onlyOneChild.noShowingChildren)&&!item.alwayShow">
      <app-link v-if="onlyOneChild.meta">
        <el-menu-item :class="{'submenu-title-noDropdown':!isNest}">
          <item :icon="onlyOneChild.meta.icon||(item.meta&&item.meta.icon)" :title="onlyOneChild.meta.title" />
        </el-menu-item>
      </app-link>
    </template>
  </div>
</template>

<script>
export default {
  name: 'SidebarItem',
  props: {
    // 父组件传过来的 route
    item: {
      type: Object,
      required: true
    },
    basePath: {
      type: String,
      default: ''
    },
    isNest: {
      type: Boolean,
      default: false
    }
  },
  data() {
    this.onlyOneChild = null
    return {}
  },
  methods: {
    hasOneShowingChild(children = [], parent) {
      const showingChildren = children.filter(item => {
        if (item.hidden) { // 当前目录为隐藏目录
          return false
        } else {
          this.onlyOneChild = item
          return true
        }
      })
      // 当只有一个子路由时，默认情况下会显示该子路由
      if (showingChildren.length === 1) {
        return true
      }
      // 当没有子路由时，直接显示父
      if (showingChildren.length === 0) {
        this.onlyOneChild = { ... parent, path: '', noShowingChildren: true }
        return true
      }
      return false
    }
  }
}
</script>

<style>

</style>
