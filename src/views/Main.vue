<template>
  <div>
    <Navbar/>
    <h1 class="color-text">Welcome to MELP</h1>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar";
export default {
  name: "Main",
  components: {
    Navbar
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
