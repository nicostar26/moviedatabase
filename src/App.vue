<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { ApiService } from './apiService';
import Header from './components/Header.vue';
import Card from './components/Card.vue';

const movies = ref([]);

async function getPopularMovies(){
  try {
    const movieData = await ApiService.getPopularMovies();
    movies.value = movieData.results;
    console.log(movies.value);
  } catch (error) {
    console.error('Error fetching popular movies', error);
  }
}

onMounted(() => {
  getPopularMovies();
}
);

</script>

<template>
  <div class="app">
    <Header />
    <h2 class="label">Popular Movies</h2>
    <div class="card-wrapper">
      <Card v-for="(movie, id) in movies" :key="id" :title="movie.title" :image="movie.poster_path"/>
    </div>
  </div>
</template>

<style scoped>

.app {
  background-color: rgb(61, 61, 61); 
}
.label {
  margin-left: 5.5%;
  color: rgb(160, 160, 160);
}

.card-wrapper {
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  align-items: center;
  padding: 0rem 5rem;
}

</style>
