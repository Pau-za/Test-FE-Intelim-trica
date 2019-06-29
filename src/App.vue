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
h1,
h2,
h3 {
  font-family: "Homemade Apple", cursive;
  font-family: "Leckerli One", cursive;
  font-family: "Merienda One", cursive;
  font-family: "Pacifico", cursive;
}

p {
  font-family: "Quicksand", sans-serif;
  font-family: "Dosis", sans-serif;
  font-family: "Josefin Sans", sans-serif;
  font-family: "Heebo", sans-serif;
}

#app {
  background-image: url("./assets/Intelimetrika_1.jpg");
  background-repeat: round;
  background-attachment: fixed;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  width: -webkit-fill-available;
}

#bgim {
  width: 100%;
}
</style>
