<template>
    <div>
      <Navbar />
      <div class="container">
        <div class="row mt-4">
          <div class="col">
            <h2>
              Resep 
              <strong>Makanan</strong>
            </h2>
          </div>
        </div>

        <div class="row mt-3">
          <div class="col">
            <div class="search-bar">
                <div class="input-group mb-3">
              <input
                v-model="search"
                type="text"
                class="form-control"
                placeholder="Cari Makanan Kesukaan Anda .."
                aria-label="Cari"
                aria-describedby="basic-addon1"
                @keyup="searchFood"
              />

              <div class="input-group-prepend">
                <span class="input-group-text" id="basic-addon1">
                  <b-icon-search></b-icon-search>
                </span>
              </div>
            </div>
            </div>
          </div>
        </div>

        <div class="row ">
            <div class="col">
                <div class="judul mb-3">
                    <span>Atau pilih berdasarkan kategori</span>
                </div>
                <b-button pill class="mr-2 mb-1" v-on:click="cari('makanan kering')">Makanan Kering</b-button>
                <b-button pill class="mr-2 mb-1" v-on:click="cari('makanan berkuah')">Makanan Berkuah</b-button>
                <b-button pill class="mr-2 mb-1" v-on:click="cari('sate')">Sate</b-button>
                <b-button pill class="mr-2 mb-1" v-on:click="cari('camilan')">Camilan</b-button>
                <b-button pill variant="outline-danger" class="mr-2 mb-1" v-on:click="searchFood()"><b-icon-x></b-icon-x></b-button>
            </div>
        </div>

        <div class="row mb-4">
          <div
            class="col-md-4 mt-4"
            v-for="product in products"
            :key="product.id"
          >
            <CardProduct :product="product" />
          </div>
        </div>
      </div>
      <Footer/>
    </div>

</template>

<script>
// @ is an alias to /src
import Navbar from "@/components/Navbar.vue";
import CardProduct from '@/components/CardProduct.vue';
import Footer from '@/components/Footer.vue';
import axios from "axios";

export default {
  name: "Resep",
  components: {
    Navbar,
    CardProduct,
    Footer
  },
  data() {
    return {
      products: [],
      search: '',
    };
  },
  methods: {
    setProducts(data) {
      this.products = data;
    },
    searchFood() {
      axios
      .get("http://localhost:3000/products?q="+this.search)
      .then((response) => this.setProducts(response.data))
      .catch((error) => console.log(error));
    },
    cari : function(kategori){
    //   alert(kategori);
       axios
      .get("http://localhost:3000/products?q="+kategori)
      .then((response) => this.setProducts(response.data))
      .catch((error) => console.log(error));
    }
  },
  mounted() {
    axios
      .get("http://localhost:3000/products")
      .then((response) => this.setProducts(response.data))
      .catch((error) => console.log(error));
  },
};
</script>

<style></style>
