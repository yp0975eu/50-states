<template>
  <div class="footer">
    <div class="m-2">
      <span class="p-3">
        <router-link to="/">Home</router-link>
      </span>
      <span class="p-3">
        <router-link to="about">About this site</router-link>
      </span>
    </div>
    <p class="text-right p2">Photo by Chris Lawton on <a href="https://unsplash.com/photos/KpBXAOs80YI">Unsplash</a></p>
    <p class="text-right p2">Map icon by Icons8 on<a href="https://icons8.com/icon/43632/map">Unsplash</a></p>
  </div>
</template>
<script>
export default {
  name: 'Footer'
}
</script>
<style scoped>
</style>