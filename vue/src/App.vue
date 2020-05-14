<template>
  <div id="app">
      <!-- <router-link to="/about">About</router-link> -->
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  background-color: #3d5e80;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.container {
    position: absolute;
    display: flex; 
    align-items: center;
    justify-content: center;
    width: 100%;
    top:20%;
    text-align: center;
}

.containerInner {
    box-shadow: 0 0 15px rgb(47, 41, 42);
    border-radius: 15px;
    padding: 15px;
}
</style>
