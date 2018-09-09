const Authentication = require('./controller/Authentication')
const Teams = require('./controller/TeamController')

module.exports = (app) => {
  app.post('/register', Authentication.register)

  app.post('/login', Authentication.login)

  // Routes to make Api calls
  app.get('/Api/standings', Teams.getStandings)
  app.get('/Api/teams', Teams.getTeams)
}
