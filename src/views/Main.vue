<template>
  <div>
    <h1 class="color-text">Welcome to MELP</h1>
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
  background-color: #eeeeee;
  color: #212121;
  opacity: 0.6;
  width: 55%;
}
</style>
