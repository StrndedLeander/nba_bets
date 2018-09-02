const request = require('request')
const api = require('../Api/apiConfig')

module.exports = {
  getStandings (req, res) {
    let path = req.body.path
    let url = api.baseURL + path
    console.log(api.baseURL + path)
    request(url, function (error, response, body) {
      if (!error && response.statusCode === 200) {
        var json = JSON.parse(body)
        console.log(json)
        res.send(json)
      } else {
        let error = 'There was an error: ' + response.statusCode
        console.log(body)
        res.status(400).send(error)
      }
    })
  }
}
