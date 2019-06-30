<template>
  <div>
    <h3 class="modified">We show you the best restaurants in the City</h3>
    <div class="row">
      <form class="col s12">
        <div class="row">
          <div class="col s3"></div>
          <div class="input-field col s6 modified">
            <i class="material-icons prefix">search</i>
            <input id="icon_prefix" type="text" class="validate" v-model="search" />
            <label for="icon_prefix">Search by State</label>
          </div>
          <div class="col s3"></div>
        </div>
      </form>
    </div>
    <div>
      <h5 class="modified">Order restaurants by name</h5>
      <a class="waves-effect waves-light btn orange darken-4" @click="orderByNameZtoA()">Z to A</a>
    </div>
    <div v-for="element of filterByCountry" :key="element.id" class="center-align">
      <div class="row">
        <div class="col m3 l3"></div>
        <div class="col s12 m6 l6">
          <div class="card deep-orange lighten-5">
            <div class="card-content">
              <span class="card-title">{{element.name}}</span>
              <h5>Ubication</h5>
              <p>
                St: {{element.address.street}},
                <br />
                {{element.address.city}}, {{element.address.state}}
                <br />
              </p>
              <h5>Contact</h5>
              <p>
                Email:
                <a :href="element.contact.email">{{element.contact.email}}</a>
              </p>
              <p>Phone: {{element.contact.phone}}</p>
            </div>
            <div class="card-action deep-orange darken-4">
              <a :href="element.contact.site" target="blank">Visit the Site</a>
              <!-- <a href="#">This is a link</a> -->
            </div>
          </div>
        </div>
        <div class="col m3 l3"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Restaurants",
  data() {
    return {
      restaurants: [],
      search: ""
    };
  },
  computed: {
    filterByCountry() {
      return this.restaurants.filter(element => {
        return element.address.state.toLowerCase().match(this.search);
      });
    }
  },
  created() {
    this.$http
      .get("https://s3-us-west-2.amazonaws.com/lgoveabucket/data_melp.json")
      .then(data => {
        //this promise executes when the response of the data is ok
        this.restaurants = data.body;
        console.log(this.restaurants);
      });
  },
  methods: {
    orderByNameZtoA() {
      this.restaurants.sort((a, b) => {
        if (a.name > b.name) {
          return -1;
        }
      });
    }
  }
};
</script>

<style scoped>
.modified {
  background-color: #eeeeee;
  color: #212121;
  opacity: 0.6;
  width: 100%;
}
</style>
