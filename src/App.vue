<template>
  <div id="app">
    <div id="navbar">
      <a href="/">Home</a>
      <a href="/todo">Todo App</a>
      <a href="/gallery">Gallery</a>
    </div>
    <h1>Frontend Vue App</h1>
    <hr/>
    <router-view></router-view> 
  </div>
</template>

<script>
</script>

<style lang="sass">

$vue-color: #42B983
#app,
#navbar,
#navbar a
  display: flex

#app,
#navbar a 
  align-items: center

#navbar,
#navbar a 
  justify-content: center

#app  
  flex-direction: column
  margin-top: 25px

#navbar 
  width: 100%
  height: 50px
  margin-bottom: 35px


#navbar a 
  margin-left: 15px
  padding: 10px
  border-radius: 15px
  background-color: #888
  color: #fff
  text-decoration: none

h1
  color: $vue-color
  text-transform: uppercase

hr
  margin: 15px auto
  width: 50%

</style>
