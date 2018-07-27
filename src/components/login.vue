<template>
  <div class="form_contianer">
  <el-form ref="form" :model="form" :rules="rules">
    <h3 class="title">XX系统登录</h3>
    <el-form-item prop="username">
      <el-input v-model="form.username" placeholder="请输入账号"><i slot="prefix" class="icon ming-icons m-icon-yonghu2"></i></el-input>
    </el-form-item>
    <el-form-item prop="password">
      <el-input v-model="form.password" type="password" placeholder="请输入密码"><i slot="prefix" class="icon ming-icons m-icon-mima"></i></el-input>
    </el-form-item>
    <el-form-item label="">
      <el-checkbox-group v-model="form.type">
        <el-checkbox label="记住密码" name="type"></el-checkbox>
      </el-checkbox-group>
    </el-form-item>
    <el-form-item>
      <el-button class="loginBtn" type="primary" @click="onSubmit('form')">登录</el-button>
    </el-form-item>
  </el-form>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        form: {
        },
        rules: {
          username: [
            {required: true, message: '请输入账号', trigger: 'blur'}
          ],
          password: [
            {required: true, message: '请输入密码', trigger: 'blur'}
          ]
        }
      }
    },
    methods: {
      onSubmit(form) {
        this.$refs[form].validate((valid) => {
          if (valid) {
            alert(valid)
          } else {
            return false
          }
        })
      }
    }
  }
</script>

<style scoped>
  .form_contianer {
    width: 360px;
    margin: 10% auto;
    padding: 35px;
    border: solid 1px #eaeaea;
    border-radius: 5px;
    box-shadow: 0 0 25px #cac6c6;
  }
  .title {
    margin: 0px auto 40px auto;
    text-align: center;
    color: #505458;
    }
  .loginBtn {
    width: 100%;
  }
</style>