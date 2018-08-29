<template>
<v-layout column>
  <v-flex xs6 offset-xs3 class="flexContainer">
    <div class="white elevation-2">
      <v-toolbar flat dense dark class="green">
        <v-toolbar-title>Login</v-toolbar-title>
      </v-toolbar>
      <div class="px-4 py-2">
        <form>
          <v-text-field label="E-Mail" v-model="email"></v-text-field><br>
          <v-text-field type="password" label="Password" v-model="password"></v-text-field>
        </form><br>
      </div>
      <div class="error" v-html="error"></div>
      <v-btn dark class="cyan" @click="login">Login</v-btn>
    </div>
  </v-flex>
</v-layout>
</template>

<script>
import {mapState} from 'vuex'

export default {
  computed:{
    ...mapState('users',{
      email: state => state.email,
      password: state => state.password,
      error: state => state.error
    })
  }
}
</script>

<style scoped>

</style>
