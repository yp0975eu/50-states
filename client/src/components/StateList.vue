<template>
  <div id="stateList">
    <Summary
      v-bind:total="totalVisited"
      v-bind:visitedAll="visitedAll"
      >
    </Summary>
    <div class="d-flex flex-wrap jusftify-content-center">
      <div class="p-2" v-for="state in states" v-bind:key="state.name">
        <State v-bind:state="state" v-on:isVisited="updateVisited"></State>
      </div>
    </div>
 </div>
</template>

<script>
import State from '@/components/State'
import Summary from '@/components/Summary'
/*
  when component mounts call getAll service, populated the states array
  when it completes
*/
export default {
  name: 'StateList',
  components: {
    State,
    Summary
  },
  data() {
    return {
      states: []
    }
  },
  mounted() {
    this.getAll()
  },
  methods: {
    getAll() {
      this.$stateService.getAll().then(data => {
        this.states = data
      }).catch(e => console.log(e))
    },
    updateVisited(stateName, stateVisited) {
      this.$stateService.setVisited(stateName, stateVisited).then(() => {
        this.getAll()
      })
    }
  },
  computed: {
    totalVisited() {
      let visited = this.states.filter(state => {
        return state.visited
      })
      return visited.length
    },
    visitedAll() {
      let visited = this.states.filter(state => {
        return state.visited
      })
      return visited.length === this.states.length
    }
  }
}
</script>

<style scoped>
</style>
