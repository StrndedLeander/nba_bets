import BetService from '../../services/Api/BetService'

export default {
  namespaced: true,
  state: {
    bets: [],
  },
  getters: {},
  actions: {
    // Get game stats from api and create bet thorugh that
    // async newBet({
    //   state,
    //   commit
    // }, {
    //   season,
    //   date,
    //   team,
    //   gameStatus,
    //   limit
    // }) {
    //   try {
    //     await BetService.newBet()
    //   } catch (error) {

    //   }
    // },


  },
  mutations: {

  }
}
