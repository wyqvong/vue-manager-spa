<template>
  <div class="search-container">
    <el-form :inline="true" :model="formInline" size="mini" class="search-form-inline">
      <el-form-item v-for="item in formItem" :key="item.name" :label="item.name">
        <el-select v-if="item.options" v-model="item.data">
          <el-option v-for="option in item.options" :key="option.value" :label="option.name" :value="option.value" />
        </el-select>
        <el-input v-else v-model="item.data" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">查询</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'Search',
  data() {
    return {
      formItem: [
        { name: 'ID', data: '' },
        { name: '类型',
          options: [
            { name: '2016级', value: 2016 },
            { name: '2017级', value: 2017 },
            { name: '2018级', value: 2018 },
            { name: '2019级', value: 2019 }
          ],
          data: ''
        }
      ]
    }
  },
  methods: {
    onSubmit() {
      console.log('submit!')
    }
  }
}
</script>

<style lang="scss" scoped>
  .search-container{
    height: 50px;
    margin-top: 50px;
    background-color: #E3E4DF;
    .el-form{
    float: right;
    margin-right: -115px;
    margin-top: 10px;
    }
  }

</style>
