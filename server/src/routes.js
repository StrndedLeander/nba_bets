const Authentication = require('./controller/Authentication')
const Games = require('./controller/GameController')

module.exports = (app) => {
  app.post('/register', Authentication.register)

  app.post('/login', Authentication.login)

  // Routes to make Api calls
  app.get('/Api/standings', Games.getStandings)
}
