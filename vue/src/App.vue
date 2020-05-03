<template>
  <div id="app">
    <callgRPC/>
  </div>
</template>

<script>
import CallgRPC from "./components/CallgRPC.vue"
export default {
  name: 'App',
  components: {
    CallgRPC
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
