<template>
   <el-row class="container">
    <el-col :span="24" class="header">
      <el-col :class="isCollapse?'logo-collapsed':'logo-expended'">
        <img src="../assets/logo.png" style="width: 64px;height: 56px;float: left;" />
        <p>ming-front</p>
      </el-col>
      <el-col>
        <div class="menu-toggle" @click.prevent="collapse">
          <i class="ming-icons m-icon-bars" v-show="!isCollapse"></i>
          <i class="ming-icons m-icon-bars-copy" v-show="isCollapse"></i>
        </div>
      </el-col>
      <el-col :span="2" class="person">
        <el-dropdown trigger="hover">
          <el-button type="primary">
            个人中心<i class="el-icon-arrow-down el-icon--right"></i>
          </el-button>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>我的消息</el-dropdown-item>
            <el-dropdown-item>设置</el-dropdown-item>
            <el-dropdown-item divided @click.native="loginout">退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </el-col>
    </el-col>
    <el-col :span="24" class="main">
      <el-col :span="4" :class="isCollapse?'menu-collapsed':'aside'">
        <el-menu default-active="1-4-1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse">
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>系统管理</span>
            </template>
            <el-menu-item index="1-2">用户管理</el-menu-item>
            <el-menu-item index="1-3">角色管理</el-menu-item>
            <el-menu-item index="1-4">系统菜单</el-menu-item>
          </el-submenu>
        </el-menu>
      </el-col>
      <el-col :span="20" class="content">
        <el-table ref="multipleTable" :data="tableData" tooltip-effect="dark" class="table">
          <el-table-column type="selection" width="55" align="center"></el-table-column>
          <el-table-column
            prop="date"
            label="日期"
            sortable
            align="center"
            width="120">
            <template slot-scope="scope">{{ scope.row.date }}</template>
          </el-table-column>
          <el-table-column
            prop="name"
            label="姓名"
            sortable
            align="center"
            width="120">
          </el-table-column>
          <el-table-column
            prop="address"
            label="地址"
            sortable
            align="center"
            show-overflow-tooltip>
          </el-table-column>
          <el-table-column label="操作" align="center">
            <template slot-scope="scope">
              <el-button
                size="mini"
                @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
              <el-button
                size="mini"
                type="danger"
                @click="handleDelete(scope.$index, scope.row)">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-col>
    </el-col>
  </el-row>
</template>

<style lang="scss">
  body {
    margin: 0px;

    .container {
      .header {
        background-color: #20a0ff;
        color: #FFF;
        width: 100%;
        text-align: center;
        display: flex;
        height: 56px;

        .logo-expended {
          flex:0 0 230px;
          width: 230px;
        }
        .logo-collapsed {
          flex:0 0 60px;
          width: 64px;
        }
        .menu-toggle {
          background: #20a0ff;
          border-left: 1px solid #FFF;
          text-align: center;
          color: white;
          height: 56px;
          width: 56px;
          line-height: 56px;
        }
        .person {
          float: right;
          text-align: center;
          line-height: 56px;
        }
      }

      .main {
        background-color: #E9EEF3;
        color: #333;
        text-align: center;
        display: flex;
        overflow-x: hidden;
        overflow-y: auto;

        .aside {
          background-color: #D3DCE6;
          color: #333;
          text-align: center;
          flex:0 0 230px;
          width: 230px;
          .el-menu-vertical-demo:not(.el-menu--collapse) {
            width: 230px;
            min-height: 400px;
          }
        }
        .menu-collapsed{
          flex:0 0 60px;
          width: 60px;
          .el-menu-vertical-demo:not(.el-menu--collapse) {
            width: 60px;
            min-height: 400px;
          }
        }
        .content {
          margin: 15px 10px;
          width: 100%;
          .table {
            width: 100%;
            border-radius: 5px;
          }
        }
      }
    }
  }
</style>

<script>
  export default {
    data() {
      return {
        isCollapse: false,
        tableData: [{
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-08',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-06',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-07',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }],
        multipleSelection: []
      };
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log("hello");
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
      //折叠导航栏
      collapse: function () {
        this.isCollapse = !this.isCollapse;
      },
      //退出登录
      loginout: function () {
        this.$axios.get('http://localhost:8082/user')
        .then(function (response) {
          console.log(response)
        })
        .catch(function (error) {
          console.log(error)
        })
        //this.$router.push('/login');
      }
    }
  }
</script>