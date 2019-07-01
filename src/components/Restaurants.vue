<template>
  <div>
    <!-- <button @click="mounted()">Map</button> -->
    <div class="row">
      <div class="col s1"></div>
      <h3 class="col s10 deep-orange lighten-5">We show you the best restaurants in the City</h3>
      <div class="col s1"></div>
      <form class="col s12">
        <div class="row">
          <div class="col s3"></div>
          <div class="input-field col s6 deep-orange lighten-5">
            <i class="material-icons prefix">search</i>
            <input id="icon_prefix" type="text" class="validate" v-model="search" />
            <label for="icon_prefix">Search by State</label>
          </div>
          <div class="col s3"></div>
        </div>
      </form>
    </div>
    <div class="row deep-orange lighten-5">
      <div class="col s12 m6 l6">
        <h5 class="modified center-align">Order restaurants by name:</h5>
        <a class="waves-effect waves-light btn orange darken-4" @click="orderByNameZtoA()">Z to A</a>
        <a class="waves-effect waves-light btn orange darken-4" @click="orderByNameAtoZ()">A to Z</a>
      </div>
      <div class="col s12 m6 l6">
        <h5 class="modified">Order restaurants by rating:</h5>
        <a
          class="waves-effect waves-light btn orange darken-4"
          @click="orderByRatingDesc()"
        >Descendent</a>
        <a
          class="waves-effect waves-light btn orange darken-4"
          @click="orderByRatingAsc()"
        >Ascendent</a>
      </div>
    </div>
    <div v-for="element of filterByCountry" :key="element.id" class="center-align">
      <div class="row">
        <div class="col m3 l3"></div>
        <div class="col s12 m6 l6">
          <div class="card deep-orange lighten-5">
            <div class="card-content">
              <span class="card-title">{{element.name}}</span>
              <h6>Rating: {{element.rating}}</h6>
              <h5>Address</h5>
              <p>
                St: {{element.address.street}},
                <br />
                {{element.address.city}}, {{element.address.state}}
                <br />
              </p>
              <!-- <div id="map"></div> -->
              <h5>Contact</h5>
              <p>
                Email:
                <a :href="element.contact.email">{{element.contact.email}}</a>
              </p>
              <p>Phone: {{element.contact.phone}}</p>
            </div>
            <div class="card-action deep-orange darken-4">
              <a :href="element.contact.site" target="blank">Visit the Site</a>
              <div
                class="fb-like"
                :data-href="element.contact.site"
                data-width
                data-layout="button"
                data-action="like"
                data-size="small"
                data-show-faces="true"
                data-share="true"
              ></div>
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
      // map: null
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
        const location = this.restaurants.map(index => {
          return index.address.location;
        });
        console.log(location);
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
    },
    orderByNameAtoZ() {
      this.restaurants.sort((a, b) => {
        if (a.name < b.name) {
          return -1;
        }
      });
    },
    orderByRatingDesc() {
      this.restaurants.sort((a, b) => {
        return b.rating - a.rating;
      });
    },
    orderByRatingAsc() {
      this.restaurants.sort((a, b) => {
        return a.rating - b.rating;
      });
    },
  
    // initMap() {
    //   const location = this.restaurants.map(index => {
    //     return index.address.location;
    //   });
    //   console.log(this.location);
    //   this.map = new google.maps.Map(document.getElementById("map"), {
    //     center: this.location,
    //     zoom: 13
    //   });
    // }
  }
};
</script>

<style scoped>
.modified {
  background-color: #eeeeee;
  color: #000000;
  opacity: 0.6;
  /* width: max-content; */
}
</style>
