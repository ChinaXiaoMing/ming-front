<template>
  <div style="height: 100%">
    <el-container style="height: 100%">
      <el-menu :uniqueOpened="false" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose"
               :collapse="isCollapse" background-color="#304156" text-color="rgb(191, 203, 217)" router>
        <el-menu-item index="/home">
          <i class="el-icon-s-platform" style="color: #909399"></i>
          <template #title>首页</template>
        </el-menu-item>
        <el-submenu index="1">
          <template #title>
            <i class="el-icon-location"></i>
            <span>导航一</span>
          </template>
          <el-menu-item index="/login">选项1</el-menu-item>
          <el-menu-item index="1-2">选项2</el-menu-item>
          <el-menu-item index="1-3">选项3</el-menu-item>
          <el-submenu index="1-4">
            <template #title>选项4</template>
            <el-menu-item index="1-4-1">选项1</el-menu-item>
          </el-submenu>
        </el-submenu>
        <el-submenu index="2">
          <template #title>
            <i class="el-icon-menu"></i>
            <span>导航二</span>
          </template>
          <el-menu-item index="2-1">选项1</el-menu-item>
        </el-submenu>
        <el-menu-item index="3" disabled>
          <i class="el-icon-document"></i>
          <template #title>导航三</template>
        </el-menu-item>
      </el-menu>
      <el-container>
        <el-header>
          <div @click.prevent="doCollapse" class="collapse-icon">
            <i class="ming-icons m-icon-bars" v-show="!isCollapse"></i>
            <i class="ming-icons m-icon-bars-copy" v-show="isCollapse"></i>
          </div>
          <div class="breadcrumb">
            <el-breadcrumb separator="/">
              <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
              <el-breadcrumb-item><a href="/">活动管理</a></el-breadcrumb-item>
              <el-breadcrumb-item>活动列表</el-breadcrumb-item>
              <el-breadcrumb-item>活动详情</el-breadcrumb-item>
            </el-breadcrumb>
          </div>
          <div class="person">
            <el-dropdown trigger="hover">
              <el-button>
                个人中心<i class="el-icon-arrow-down el-icon--right"></i>
              </el-button>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>我的消息</el-dropdown-item>
                <el-dropdown-item>设置</el-dropdown-item>
                <el-dropdown-item divided @click.native="loginout">退出登录</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </div>
        </el-header>
        <el-main>
          <router-view style="width: 100%;"/>
        </el-main>
        <el-footer>Footer</el-footer>
      </el-container>
    </el-container>
  </div>
</template>

<script>

export default {
  data () {
    return {
      isCollapse: false,
      width: '200px'
    }
  },
  methods: {
    doCollapse () {
      this.isCollapse = !this.isCollapse
    },
    loginout () {
      this.$router.push('/login')
    }
  }
}
</script>

<style>
  html, body {
    margin: 0;
    height: 100%;
  }
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }
  .el-header {
    height: 60px;
    color: #333;
    line-height: 60px;
    background-color: #B3C0D1;
  }
  .collapse-icon {
    width: 40px;
    float: left;
  }
  .breadcrumb {
    display: flex;
    align-items: center;
    float: left;
    height: 60px;
  }
  .person {
    display: flex;
    float: right;
  }

  .el-main {
    display: flex;
    justify-content: center;
    align-items: center;
    color: #333;
    background-color: #E9EEF3;
  }

  .el-footer {
    height: 60px;
    color: #333;
    text-align: center;
    line-height: 60px;
    background-color: #B3C0D1;
  }
</style>
