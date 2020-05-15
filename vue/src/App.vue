<template>
  <div id="app">
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


.btn {
    color: whitesmoke;
    font-weight: bold;
    background : #6851ff;
    border-radius: 10px;
    height: 50px;
    width: 250px;
}

.btn:hover {
    transform: scale(1.05);
}
</style>
