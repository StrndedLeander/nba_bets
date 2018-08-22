const Authentication = require('./controller/Authentication')

module.exports = (app) => {
  app.get('/', (req, res) => {
    res.send('Hello World!')
  })

  app.post('/register', Authentication.register)

  app.post('/login', Authentication.login)
}
