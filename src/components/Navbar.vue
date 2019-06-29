<template>
  <div class="navbar-fixed">
    <nav class="deep-orange darken-4">
      <div class="nav-wrapper">
        <a href="#" class="brand-logo right">Logo</a>
        <a href="#" class="sidenav-trigger" data-target="side-menu">
          <i class="material-icons">menu</i>
        </a>
        <ul id="nav-mobile" class="left hide-on-med-and-down">
          <li>
            <router-link to="/">Home</router-link>
          </li>
        </ul>
      </div>
    </nav>
    <ul class="sidenav orange lighten-4" id="side-menu">
      <li>
        <router-link to="/">Home</router-link>
      </li>
      <li>
        <div class="divider"></div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Navbar",
   methods: {
    activate: document.addEventListener("DOMContentLoaded", () => {
      var elems = document.querySelectorAll(".sidenav");
      var instances = M.Sidenav.init(elems);
    })
  }
};
</script>

<style scoped>
.navbar-fixed {
  margin-top: -6%;
}
</style>
