<template>
  <div id="app">
    <div>
      <!-- <img id="bgim" src="./assets/Intelimetrika.jpg"> -->
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style>
#app {
  background-image: url("./assets/Intelimetrika_1.jpg");
  background-repeat: no-repeat;
  background-attachment: fixed;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  width: -webkit-fill-available;
  height: -webkit-fill-available;
}

#bgim {
  width: 100%;
}
</style>
