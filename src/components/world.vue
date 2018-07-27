<template>
  <button @click="togoLogin">登录</button>
</template>

<script>
export default {
  methods: {
    togoLogin() {
      this.$router.push('/login')
    }
  }
}
</script>

<style scoped>

</style>