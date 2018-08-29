import BetService from '../../services/BetService'

export default {
  namespaced: true,
  state: {
    bets: [],
    team1: '',
    team2: ''
  },
  getters: {},
  actions: {
    // Get game stats from api and create bet thorugh that
    async newBet({state, commit}) {
      try {
        await BetService.newBet({
          
        })
      } catch (error) {

      }
    },
    // Functions for making api requests to get game data

  },
  mutations: {}
}
