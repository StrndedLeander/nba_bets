<template>
<v-layout column>
  <v-flex xs6 offset-xs3 class='flexContainer'>
    <div class='white elevation-2'>
      <v-toolbar flat dense dark class='cyan'>
        <v-toolbar-title>Register</v-toolbar-title>
      </v-toolbar>
      <div class='px-4 py-2'>
        <form>
          <v-text-field label='E-Mail' :value="email" @input="updateEmail"></v-text-field><br>
          <v-text-field type='password' label='Password' :value="password" v-on:input='updatePassword'></v-text-field>
        </form><br>
      </div>
      <div class='error' v-html='error'></div>
      <v-btn dark class='cyan' @click='register'>Register</v-btn>
    </div>
  </v-flex>
</v-layout>
</template>

<script>
import {
  mapState,
  mapActions,
  mapMutations
} from 'vuex';

export default {
  computed: {
    ...mapState('users', {
      email: state => state.email,
      password: state => state.password,
      error: state => state.error
    })
  },
  methods: {
    ...mapActions('users', ['register'])
  },
  updateEmail(e){
    this.$store.commit('setEmail', e.target.value)
  },
  updatePassword(e){
    this.$store.commit('setPassword', e.target.value)
  }
};
</script>

<style scoped>
.flexContainer {
  width: 53%;
}
</style>
