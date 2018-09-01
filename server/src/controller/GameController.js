const request = require('request')
const api = require('../Api/apiConfig')

module.exports = {
  getStandings (req, res) {
    let path = req.body.path
    request(api.baseURL + path, function (error, response) {
      if (error) {
        return error.message
      }
      res.send(response)
    })
  }
}
