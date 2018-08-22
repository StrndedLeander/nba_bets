import Vuex from "vuex";
import Vue from "vue";
import bets from "./modules/bets";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: { bets },
  state: {},
  getters: {},
  actions: {},
  mutations: {}
});
