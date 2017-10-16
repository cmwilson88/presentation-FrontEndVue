<template lang="pug">
  #app
    #navbar
      #nav
        a(href="/") Home
        a(href="/todo") Todo App
        a Photo Gallery
    h1 Vue Frontend App
    app-todo-item/
</template>

<script>
import TodoItem from './components/TodoItem.vue'
export default {
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

#navbar 
  display: flex;
  justify-content: center
  background-color: #131313
  width: 100%
  height: 50px

#nav 
  display: flex
  justify-content: space-between

  width: 50%
  height: 100%
  color: #fff

#nav a 
  display: flex
  justify-content: center
  align-items: center
  margin-right: 5px
  background-color: #333

h1
  color: $vue-color
  text-transform: uppercase

</style>
