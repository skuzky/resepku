<template>
    <div class="card shadow card-product">
        <img :src=" 'assets/images/' + product.gambar " class="card-img-top" alt="..." style="max-height:217px; min-height:217px;">
        <div class="card-body">
            <h5 class="card-tittle">{{product.nama}}</h5>
            <p class="card-text maksimal">{{product.deskripsi}}
            </p>
            <router-link class="btn btn-success" :to="'/resep/'+ product.id "><b-icon-eyeglasses></b-icon-eyeglasses> Lihat Detail</router-link>
        </div>

    </div>

<!-- <div>
    <h1>KONTO</h1>
</div> -->

</template>

<script>
export default {
    name: "CardProduct",    
    props: ["product"]
}
</script>

<style>

</style>