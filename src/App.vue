<template>
  <div id="app">
    <div>
      <input class="item" v-model="inputValue"/>
      <button @click="handleSubmit">提交</button>
    </div>
    <ul>
      <todo-item v-for="(item, index) of list" 
        :content="item" 
        :index="index"
        :key="index"
        @delete="handleDelete"
      ></todo-item>
    </ul>
  </div>
</template>

<script>
import hello from "./components/hello.vue"
export default {
  components: {
    "todo-item": hello
  },
  data () {
   return {
    inputValue: '',
    list: []
   }
  },
  methods: {
    handleSubmit() {
      this.$data.list.push(this.inputValue)
    },
    handleDelete(index) {
      this.list.splice(index, 1)
    }
  }
}
</script>
