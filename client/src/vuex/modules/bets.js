import BetService from '../../services/Api/BetService'

export default {
  namespaced: true,
  state: {
    bets: [],
    gameInfo: {
      homeTeam: '',
      awayTeam: ''
    }
    
  },
  getters: {},
  actions: {
    // Get game stats from api and create bet thorugh that
    async newBet({state, commit}, {season, date, team, gameStatus, limit}) {
      try {
        await BetService.newBet()
      } catch (error) {

      }
    },
    // Functions for making api requests to get game data

  },
  mutations: {}
}
