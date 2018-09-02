import GamesService from '../../services/GamesService'

export default {
  namespaced: true,
  state: {
    gameInfo: {
      homeTeam: '',
      awayTeam: ''
    },
    standings: []
  },
  getters: {},
  actions: {
    // Get game stats from api and create bet thorugh that
    async getStandings(commit) {
      try {
        const standings = await GamesService.getStandings("2018-2019-regular/standings.json")
        commit("setStandings", standings)
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
