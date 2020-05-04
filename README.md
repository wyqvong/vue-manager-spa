# vue-manager-spa

- 本管理系统模板是参考花裤衩大神的vue-admin-template为模板加以一些样式和功能的修饰来制作的.

- 登录后通过token发送userInfo请求，获取权限进行验证，匹配相应的路由添加到路由表。

- 通过路由动态添加侧边栏

## 技术栈以及组件库

- vue-cli: 快速构建项目

- vuex：状态管理

- vue-router: 路由管理，实现spa单页面开发

- axios: 异步请求数据

- sass: css预处理器

- element-ui: ui组件库

- js-cookie：处理cookie的API

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Lints and fixes files

```
npm run lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

### 开发日记

- el-menu导航栏为垂直时，设置不了menu-trigger
