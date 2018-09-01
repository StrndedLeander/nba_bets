const Authentication = require('./controller/Authentication')
const Games = require('./controller/GameController')

module.exports = (app) => {
  app.get('/', (req, res) => {
    res.send('Hello World!')
  })

  app.post('/register', Authentication.register)

  app.post('/login', Authentication.login)

  app.get('/standings', Games.getStandings)
}
