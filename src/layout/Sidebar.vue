<template>

</template>

<script>
export default {
  name: 'Sidebar',
  props: {
    isCollapse: false
  },
  methods: {
    handleOpen () {
      console.log(1)
    },
    handleClose () {
      console.log(2)
    }
  }
}
</script>

<style scoped>

</style>
