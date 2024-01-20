<script setup lang="ts">

</script>

<template>
  <div class="header">
    <h3>Movie Database</h3>
    <div class="input">
        <h4>Search</h4>
        <input type="text" class="search">
    </div>
  </div>
</template>

<style scoped>
.header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2rem 4rem;
    background-color: rgb(61, 61, 61);
    margin-bottom: 2rem;
}

h3 {
    color: white;
}

h4 {
    margin-right: 1rem;
}

.input {
    display: flex;
    align-items: center;
    color: white;
}

input {
    height: 1.5rem;
}
</style>
