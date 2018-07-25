<template>
  <li class="item" @click="listDelete">{{content}}</li>
</template>

<script>
export default {
  props: ['content', 'index'],
  methods: {
    listDelete: function() {
      this.$emit('delete', this.index)
    }
  }
}
</script>

<style scoped>
  .item{
    color: green
  }
</style>