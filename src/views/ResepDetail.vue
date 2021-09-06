<template>
  <div class="food-detail">
    <Navbar/>
    <div class="container h-100">
      <div class="row mt-4">
        <div class="col">
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
              <li class="breadcrumb-item">
                <router-link to="/" class="text-dark">Home</router-link>
              </li>
              <li class="breadcrumb-item">
                <router-link to="/resep" class="text-dark">Resep</router-link>
              </li>
              <li class="breadcrumb-item active" aria-current="page">Resep Masakan {{product.nama}}</li>
            </ol>
          </nav>
        </div>
      </div>
      <div class="row mt-3">
        <div class="col-md-6 justify-content">
          <img :src=" '../assets/images/' + product.gambar " class="img-fluid shadow" />
        </div>
        <div class="col-md-6">
          <h2>
            <strong>Resep {{ product.nama }}</strong>
          </h2>
          <hr>
          <p>Oleh <strong>Admin</strong></p>
          <h4>Deskripsi : </h4>
          <p style="height:110px;">{{product.deskripsi}}</p>
        
          <div class="col mt-4">
            <hr>
            <div class="d-flex justify-content-center pt-2">
              <strong><h5><b-icon-clock></b-icon-clock>&nbsp;{{product.waktu}}</h5></strong>
            </div>
            <hr>
          </div>
          
        </div>
      </div>
      <hr>
      <div class="row mt-4">
        <div class="col">
          <h2>
            <strong>Bahan Bahan</strong>
          </h2>
          <ul class="bahan">
              <li v-for="item in product.bahan" :key="item.message">
              {{ item.message }}
              </li>
            </ul>
          <div>

          </div>
        </div>
      </div>
      <hr>
      <div class="row mt-4">
        <div class="col">
          <h2>
            <strong>Langkah Langkah</strong>
          </h2>
          <ol class="langkah">
           <li v-for="item in product.langkah" :key="item.message">
            {{item.message}}
            </li> 
          </ol>
        </div>
      </div>
      <!-- <h1>detail asdadsadas{{$route.params.id}}</h1> -->
    </div>
    <Footer/>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import Footer from '@/components/Footer.vue';
import axios from "axios";

export default {
    name:"ResepDetail",
    components:{
      Navbar,  
      Footer
    },
    data(){
      return{
        product: {},
      };
    },
    methods:{
      setProduct(data){
        this.product = data;
      }
    },
    mounted() {
      axios
        .get("http://localhost:3000/products/" + this.$route.params.id)
        .then((response) => this.setProduct(response.data))
        .catch((error) => console.log(error));
    },
   
};

</script>

<style>

</style>