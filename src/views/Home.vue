<template>
  <div class="home">
    <Navbar/>
    <div class="container">
        <Hero/>
      <div class="row mt-4">
        <div class="col">
          <h2>
            Rekomendasi
            <strong>Resep</strong>
          </h2>
        </div>
        <div class="col">
          <router-link to="/resep" class="btn btn-success float-right">
            Lihat Semua Resep
          </router-link>
        </div>
      </div>

      <!-- product -->

      <div class="row mb-4">
        <div class="col-md-4 mt-4" v-for="product in products" :key="product.id">
          <!-- <h2>{{product.nama}}</h2> -->
          <CardProduct :product="product"/>
        </div>
      </div>

    </div>
      <Footer/>
  </div>

</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/Navbar.vue';
import Hero from '@/components/Hero.vue';
import CardProduct from '@/components/CardProduct.vue';
import Footer from '@/components/Footer.vue';

import axios from "axios";
// const axios = require('axios');

export default {
  name: 'Home',
  components: {
    Navbar,
    Hero,
    CardProduct,
    Footer,
  },
  data() {
    return{
      products:[],
    };
  },
  methods: {
    setProduct(data) {
      this.products = data;
    },
  },
  mounted() {
    axios
      .get("http://localhost:3000/best-products")
      // .then(response) => this.setProduct(response.data)
          // console.log("berhasiil :", response);
      .then((response) => this.setProduct(response.data))
      .catch((error) => console.log(error))
  },
};
</script>
