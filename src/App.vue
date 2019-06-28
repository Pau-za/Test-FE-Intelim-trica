<template>
  <div id="app">
    <Navbar/>
    <router-view/>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar";
export default {
  name: "App",
  components: {
    Navbar
  }
};
</script>

<style>
#app {
  background-image: url("./assets/Intelimetrika_1.jpg");
  background-repeat: round;
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
