<template>
  <div class="state-summary p-2 rounded">
    <span class="m-2">{{ state.name }}</span>
    <p>
      <input :id="`${state.name}-visited`" class="m-2" type="checkbox" v-model="stateVisited"
      v-on:change="$emit('isVisited', stateName, stateVisited)">
    </p>
    <p>
      <router-link v-bind:to="{ name: 'detail', params: {state: stateName}}">
        <img class="map-icon" src="@/assets/map.png" height="30px" width="30px">
      </router-link>
    </p>
  </div>
</template>
<script>
export default {
  name: 'State',
  data() {
    return {
      stateName: this.state.name,
      stateVisited: this.state.visited
    }
  },
  props: {
    state: Object
  }
}
</script>
<style scoped>
.state-summary {
  height: 8em;
  width: 10em;
  border: 1px solid #EEE;
  background-color: whitesmoke;
}
</style>