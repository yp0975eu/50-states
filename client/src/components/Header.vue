<template>
  <div class="header">
    <div class="jumbotron">
      <h1 id="title" class="display-4">Have you visited every state?</h1>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Header'
}
</script>
<style scoped>
  .jumbotron {
    background-image: url('../assets/bg.jpg');
    background-position: center;
    background-size:cover;
  }
  #title {
    font-weight: 50;
    color: antiquewhite;
  }
</style>