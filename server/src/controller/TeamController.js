const request = require('../Api/request')

module.exports = {
  getStandings (req, res) {
    let path = req.query.path
    let standings = request.doRequest(path)
    console.log(standings)
    res.send({
      standings: standings
    })
  },
  getTeams (req, res) {
    let path = req.query.path
    let teams = request.doRequest(path)
    console.log(teams)
    res.send({
      teams: teams
    })
  }
}
