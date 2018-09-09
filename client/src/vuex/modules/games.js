export default {
  namespaced: true,
  state: {
    season: "2018-2019-regular/standings.json",
    game: {
      homeTeam: '',
      awayTeam: '',
      venue: '',
      venueAllegiance: '',
      playedStatus: '',
      homePlayers: [],
      awayPlayers: []
    },
    schedule: {}
  },
  getters: {},
  actions: {
    async getSchedule() {

    },
    async getGameInfo() {

    }
  },
  mutations: {}
}
