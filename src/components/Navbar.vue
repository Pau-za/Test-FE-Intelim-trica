<template>
  <div class="mt">
    <nav class="deep-orange darken-4">
      <div class="nav-wrapper">
        <a href="#" class="brand-logo right">
          <h5>MELP</h5>
        </a>
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
/* @media screen and (min-width: 992px) and (max-width: 1060px)  { */
.mt {
  margin-top: -6%;
}
h5 {
  font-family: "Homemade Apple", cursive;
  font-family: "Leckerli One", cursive;
  font-family: "Merienda One", cursive;
  font-family: "Pacifico", cursive;
}
/* }; */

@media screen and (max-width: 992px) and (min-width: 600px) {
  .navbar-fixed {
    margin-top: -10%;
  }
}

@media screen and (max-width: 600px) {
  .navbar-fixed {
    margin-top: -15%;
  }
}
</style>
