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
      <!-- "https://timesofindia.indiatimes.com/photo/81274581.cms" -->
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
  border: 0.15rem black solid;
  border-radius: 10px;
  margin: 1rem;
}

img {
  height: 15rem;
  width: 12rem;;
}

.movie-title {
  padding: 0rem 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}
</style>