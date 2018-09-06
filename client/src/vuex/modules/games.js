import GamesService from '../../services/GamesService'

export default {
  namespaced: true,
  state: {
    season: "2018-2019-regular/standings.json",
    gameInfo: {
      homeTeam: '',
      awayTeam: ''
    },
    standings: []
  },
  getters: {},
  actions: {
    // Get game stats from api and create bet thorugh that
    async getStandings({
      commit
    }) {
      try {
        commit("setStandings", await GamesService.getStandings({
          path: "latest/standings.json"
        }))
      } catch (error) {
        console.log(error)
      }
    }
    // Functions for making api requests to get game data

  },
  mutations: {
    setStandings(state, payload) {
      state.standings = payload
    }
  }
}
