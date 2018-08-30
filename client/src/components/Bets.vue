<template>
  <div>
    <ul v-for="bet in bets" :key="bet.gameID">

    </ul>
  </div>
</template>

<script>
  import {mapActions} from 'vuex'
  export default {
    computed:{

    },
    methods:{
      ...mapActions('bets',[
        'basicGet'
      ])
    }
  }
</script>

<style scoped>

</style>
