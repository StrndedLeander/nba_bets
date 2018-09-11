import Vuex from "vuex";
import Vue from "vue";
import games from "./modules/games"
// import bets from "./modules/bets";
import users from "./modules/users"
import teams from "./modules/teams"

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    games,
    users,
    teams
  },
  state: {},
  getters: {},
  actions: {},
  mutations: {}
});
