<template>
  <div>
    <h3 class="modified">We show you the best restaurants in the City</h3>
    <div v-for="element of restaurants" :key="element.id" class="center-align">
      <div class="row">
        <div class="col m3 l3"></div>
        <div class="col s12 m6 l6">
          <div class="card deep-orange lighten-5">
            <div class="card-content">
              <span class="card-title">{{element.name}}</span>
              <h5>Ubication</h5>
              <p>
                St: {{element.address.street}},
                <br>
                {{element.address.city}}, {{element.address.state}}
                <br>
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
      restaurants: []
    };
  },
  //   methods: {},
  created() {
    this.$http
      .get("https://s3-us-west-2.amazonaws.com/lgoveabucket/data_melp.json")
      .then(data => {
        console.log(data);
        this.restaurants = data.body.slice(0, 10);
      });
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
