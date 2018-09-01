<template>
<div>
  <ul v-for="standing in standings" :key="standing.id">
    <li>{{standing.name}}</li>
  </ul>
  <button @click="basicGet">Hmm!</button>
</div>
</template>

<script>
import {
  mapState,
  mapActions
} from "vuex";
export default {
  computed: {
    ...mapState("games", {
      standings: state => state.standings
    })
  },
  methods: {
    ...mapActions("games", ["basicGet"])
  }
};
</script>

<style scoped>

</style>
