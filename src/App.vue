<template>
  <div id="app">
    <Navbar />
    <router-view />
  </div>
</template>

<script>
import Navbar from "@/components/Navbar";
// import initMap from "./maps";

export default {
  name: "App",
  //This is the function that prints the map, but doesn't work, I need to check why
  // async mounted() {
  //   try {
  //     const google = await initMap();
  //     const geocoder = new google.maps.Geocoder();
  //     const map = new google.maps.Map(this.$el);

  //     geocoder.geocode({ address: `Austria` }, (results, status) => {
  //       if (status !== `OK` || !results[0]) {
  //         throw new Error(status);
  //       }
  //       map.setCenter(results[0].geometry.location);
  //       map.fitBounds(results[0].geometry.viewport);
  //     });

  //   } catch (error) {
  //     console.log(error);
  //   }
  // },
  components: {
    Navbar
  }
};
</script>

<style>
/* html,
body {
  margin: 0;
  padding: 0;
} */

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
  /* width: 50vw;
  height: 50vh; */
}

#bgim {
  width: 100%;
  
}
</style>
