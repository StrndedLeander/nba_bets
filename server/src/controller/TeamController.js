const request = require('../Api/request')
const api = require('../Api/apiConfig.js')

module.exports = {
  getStandings (req, res) {
    let path = req.query.path
    let apiKey = api.apiKey
    let config = {
      path: path,
      apiKey: apiKey
    }
    let standings = request.request(config)
    res.send({
      standings: standings
    })
  },
  getTeams (req, res) {
    let path = req.query.path
    let apiKey = api.apiKey
    let config = {
      path: path,
      apiKey: apiKey
    }
    let teams = request.request(config)
    res.send({
      teams: teams
    })
  }
}
