<script setup lang="ts">

defineProps({
    title: {
        type: String,
        required: true
    },
    
    image: {
      type: String,
      required: true,
    }
})

</script>

<template>
    <div class="card">
    <img :src="`https://image.tmdb.org/t/p/original${image}`" alt="No image found">
    <div class="movie-title">
      <h4>{{ title }}</h4>
    </div>
  </div>
</template>

<style scoped>
.card {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 20rem;
  width: 12rem;
  border: 0.10rem rgb(94, 94, 94) solid;
  border-radius: 10px;
  margin: 1rem;
  background-color: rgb(61, 61, 61);
}

img {
  height: 75%;
  width: 100%;
  border-radius: 10px 10px 0px 0px;
}

.movie-title {
  padding: 0rem 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  color: rgb(160, 160, 160);
}
</style>