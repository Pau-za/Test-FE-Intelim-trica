<template>
  <div class="container">
    <h1 class="deep-orange lighten-5">Welcome to MELP</h1>
    <Restaurants/>
  </div>
</template>

<script>
import Restaurants from "@/components/Restaurants";
export default {
  name: "Main",
  components: {
      Restaurants
  }
};
</script>

<style>
.color-text {
  /* background-color: #eeeeee;
  color: #000000;
  opacity: 0.6; */
  width: 55%;
}
</style>
