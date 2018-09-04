const request = require('request')
const api = require('../Api/apiConfig.js')
const authentication = require('../Api/AuthenticateApi')

module.exports = {
  getStandings (req, res) {
    authentication.authenticate()
    let path = req.body.path
    let url = api.baseURL + path
    console.log(url)
    request(url, function (error, response, body) {
      if (response === null || response === undefined) {
        return new Error('LibratoMetrics.Error: Request failed without a response. Network Connected?')
      }
      if (!error && response.statusCode === 200) {
        var json = JSON.parse(body)
        console.log('hi' + json)
        res.send(json)
      } else {
        let error = 'There was an error: ' + response.statusCode
        console.log(body)
        res.status(400).send(error)
      }
    })
  }
}
