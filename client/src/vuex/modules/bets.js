import BetService from '../../services/Api/BetService'

export default {
  namespaced: true,
  state: {
    bets: [],
    gameInfo: {
      homeTeam: '',
      awayTeam: ''
    },
    standings: []
  },
  getters: {},
  actions: {
    // Get game stats from api and create bet thorugh that
    async newBet({
      state,
      commit
    }, {
      season,
      date,
      team,
      gameStatus,
      limit
    }) {
      try {
        await BetService.newBet()
      } catch (error) {

      }
    },
    async basicGet(commit) {
      try {
        commit("setStandings", await BetService.getBets("2017-2018-regular/standings.json"))
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
