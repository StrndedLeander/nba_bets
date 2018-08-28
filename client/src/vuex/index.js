import Vuex from "vuex";
import Vue from "vue";
import bets from "./modules/bets";
import users from "./modules/users"

Vue.use(Vuex);

export default new Vuex.Store({
  modules: { bets, users },
  state: {},
  getters: {},
  actions: {},
  mutations: {}
});
