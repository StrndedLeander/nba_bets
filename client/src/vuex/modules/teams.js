import TeamService from '../../services/TeamService'

export default {
  namespaced: true,
  state: {
    request: {
      league, season, feed, format, params
    },
    standings: {},
    teams: {}
  },
  getters: {},
  actions: {
    async getStandings({
      commit
    }) {
      try {
        let standings = await TeamService.getStandings({
          path: "latest/standings.json"
        })
        console.log(standings.data)
        commit("setStandings", standings.data)
      } catch (error) {
        console.log(error)
      }
    },
    async getTeams() {
      // stats = Win % , W, L, T /
      let teams = await TeamService.getTeams({
        league:, season, feed, format, params,
        path: "latest/team_stats_totals.json"
      })
      console.log(teams)
    }
  },
  mutations: {
    setStandings(state, standings) {
      state.standings = standings
    },
    setTeams(state, teams) {
      state.teams = teams
    }
  }
}
