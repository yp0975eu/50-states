<template>
  <div class="summary">
    <h2>You have visited {{ total }} {{ statesPlural}}</h2>
    <p id="visited-all" v-if="visitedAll">You have visited all 50 states plus the District of Columbi</p>
  </div>
</template>
<script>
export default {
  name: "Summary",
  props: {
    total: Number,
    visitedAll: Boolean
  },
  computed: {
    statesPlural() {
      return this.total === 1 ? "state" : "states";
    }
  }
};
</script>
<style scoped>
#visited-all {
  color: "orange";
  font-weight: 500;
}
</style>