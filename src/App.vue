<template lang="pug">
  <div id="app">
    h1 Vue Todo App
    app-todo-item/
  </div>
</template>

<script>
import TodoItem from './components/TodoItem.vue'
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: {
    appTodoItem: TodoItem
  }
}
</script>

<style lang="sass">

$vue-color: #42B983
#app  
  display: flex
  flex-direction: column
  align-items: center

h1
  color: $vue-color
  text-transform: uppercase

</style>
